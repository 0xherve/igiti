import { createContext, useContext, useState, useEffect, useMemo, useCallback } from 'react';
import { client, urlFor } from './assets/sanityClient';

const DataContext = createContext();

const fallbackNavLinks = [
  { href: '/', label: 'Home' },
  { href: '/contact', label: 'Contact' },
  { href: '/faq', label: 'FAQ' },
];
const fallbackStore = { label: 'Shop Now', link: 'https://buy.igiti.africa' };

// Fetch each content type independently. A malformed or unavailable Sanity query for
// one section must not prevent the rest of the published homepage from rendering.
const contentQueries = {
  puzzles: '*[_type == "puzzles"]{imgName, thumbnail}',
  products: '*[_type == "products"]',
  services: '*[_type == "services"]',
  reviews: '*[_type == "reviews"] | order(rating desc)',
  team: '*[_type == "team"] | order(rank asc)',
  footerLinks: '*[_type == "footerLinks"] | order(order asc)',
  socialMedia: '*[_type == "socials"]',
  store: '*[_type == "store"][0]',
  navLinks: '*[_type == "navLinks"] | order(order asc)',
  sponsors: '*[_type == "sponsors"]{ _id, name, image, link }',
};

const DataProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [retry, setRetry] = useState(0);
  const [puzzles, setPuzzles] = useState([]);
  const [product, setProduct] = useState(null);
  const [products, setProducts] = useState([]);
  const [services, setServices] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [team, setTeam] = useState([]);
  const [socialMedia, setSocialMedia] = useState([]);
  const [footerLinks, setFooterLinks] = useState([]);
  const [store, setStore] = useState(null);
  const [navLinks, setNavLinks] = useState(fallbackNavLinks);
  const [sponsors, setSponsors] = useState([]);

  const retryLoad = useCallback(() => setRetry((attempt) => attempt + 1), []);

  useEffect(() => {
    const controller = new AbortController();
    let timedOut = false;
    const timeout = setTimeout(() => {
      timedOut = true;
      controller.abort();
    }, 12000);

    const setters = {
      puzzles: (data) => {
        const items = Array.isArray(data) ? data : [];
        setPuzzles(items);
        setProduct(items[0]?.thumbnail ? urlFor(items[0].thumbnail)?.url() ?? null : null);
      },
      products: (data) => setProducts(Array.isArray(data) ? data : []),
      services: (data) => setServices(Array.isArray(data) ? data : []),
      reviews: (data) => setReviews(Array.isArray(data) ? data : []),
      team: (data) => setTeam(Array.isArray(data) ? data : []),
      footerLinks: (data) => setFooterLinks(Array.isArray(data) ? data : []),
      socialMedia: (data) => setSocialMedia(Array.isArray(data) ? data : []),
      store: (data) => setStore(data || null),
      navLinks: (data) => setNavLinks(Array.isArray(data) && data.length ? data : fallbackNavLinks),
      sponsors: (data) => setSponsors(Array.isArray(data) ? data : []),
    };

    setLoading(true);
    setError(null);

    Promise.allSettled(
      Object.entries(contentQueries).map(async ([key, query]) => ({
        key,
        data: await client.fetch(query, {}, { signal: controller.signal }),
      })),
    ).then((results) => {
      if (controller.signal.aborted && !timedOut) return;

      const failedSections = [];
      for (const result of results) {
        if (result.status === 'fulfilled') {
          setters[result.value.key](result.value.data);
        } else {
          failedSections.push(result.reason);
          console.error('Sanity content query failed:', result.reason);
        }
      }

      setError(failedSections.length
        ? 'Some website content could not be loaded. Other available sections are still shown.'
        : null);
    }).catch((fetchError) => {
      console.error('Unexpected error while loading Sanity content:', fetchError);
      setError('Website content could not be loaded. Please retry.');
    }).finally(() => {
      clearTimeout(timeout);
      if (!controller.signal.aborted || timedOut) setLoading(false);
    });

    return () => {
      clearTimeout(timeout);
      controller.abort();
    };
  }, [retry]);

  const value = useMemo(() => ({
    loading,
    error,
    retryLoad,
    puzzles,
    product,
    products,
    services,
    reviews,
    team,
    socialMedia,
    footerLinks,
    store: store || fallbackStore,
    navLinks,
    sponsors,
    setProduct,
  }), [loading, error, retryLoad, puzzles, product, products, services, reviews, team, socialMedia, footerLinks, store, navLinks, sponsors]);

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export const useData = () => useContext(DataContext);
export { DataContext, DataProvider };
