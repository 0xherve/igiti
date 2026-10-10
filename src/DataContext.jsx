import { createContext, useContext, useState, useEffect, useMemo, useCallback } from 'react';
import { client, urlFor } from './assets/sanityClient';

const DataContext = createContext();

const fallbackNavLinks = [
  { href: '/', label: 'Home' },
  { href: '/contact', label: 'Contact' },
  { href: '/faq', label: 'FAQ' },
];
const fallbackStore = { label: 'Shop Now', link: 'https://buy.igiti.africa' };
const query = `{
  "puzzles": *[_type == "puzzles"]{imgName, thumbnail},
  "products": *[_type == "products"],
  "services": *[_type == "services"],
  "reviews": *[_type == "reviews"] | order(rating desc),
  "team": *[_type == "team"] | order(rank asc),
  "footerLinks": *[_type == "footerLinks"] | order(order asc),
  "socialMedia": *[_type == "socials"],
  "store": *[_type == "store"][0],
  "navLinks": *[_type == "navLinks"] | order(order asc),
  "sponsors": *[_type == "sponsors"]{ _id, name, image, link }
}`;

export const DataProvider = ({ children }) => {
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
    }, 10000);

    setLoading(true);
    setError(null);
    client.fetch(query, {}, { signal: controller.signal })
      .then((data) => {
        setPuzzles(data.puzzles || []);
        setProduct(data.puzzles?.[0]?.thumbnail ? urlFor(data.puzzles[0].thumbnail)?.url() ?? null : null);
        setProducts(data.products || []);
        setServices(data.services || []);
        setReviews(data.reviews || []);
        setTeam(data.team || []);
        setFooterLinks(data.footerLinks || []);
        setSocialMedia(data.socialMedia || []);
        setStore(data.store || null);
        setNavLinks(data.navLinks?.length ? data.navLinks : fallbackNavLinks);
        setSponsors(data.sponsors || []);
      })
      .catch((fetchError) => {
        if (controller.signal.aborted && !timedOut) return;
        console.error('Error fetching data:', fetchError);
        setError(timedOut ? 'The content server took too long to respond.' : 'Some content could not be loaded.');
      })
      .finally(() => {
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
export { DataContext };
