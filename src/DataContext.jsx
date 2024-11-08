// src/DataContext.js
import { createContext, useContext, useState, useEffect, useMemo, useCallback } from 'react';
import { client, urlFor } from './assets/sanityClient';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [puzzles, setPuzzles] = useState([]);
  const [product, setProduct] = useState(null);
  const [products, setProducts] = useState([]);
  const [services, setServices] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [team, setTeam] = useState([]);
  const [socialMedia, setSocialMedia] = useState([]);
  const [footerLinks, setFooterLinks] = useState([]);
  const [store, setStore] = useState(null);

  const loadAllData = useCallback(async () => {
    setLoading(true);

    try {
      const query = `{
        "puzzles": *[_type == "puzzles"]{imgName, thumbnail},
        "products": *[_type == "products"],
        "services": *[_type == "services"],
        "reviews": *[_type == "reviews"] | order(rating desc),
        "team": *[_type == "team"] | order(rank asc),
        "footerLinks": *[_type == "footerLinks"] | order(order asc),
        "socialMedia": *[_type == "socials"],
        "store": *[_type == "store"][0] // Fetch the first store document
      }`;

      const data = await client.fetch(query);

      setPuzzles(data.puzzles || []);
      setProduct(data.puzzles?.[0]?.thumbnail ? urlFor(data.puzzles[0].thumbnail).url() : null);
      setProducts(data.products || []);
      setServices(data.services || []);
      setReviews(data.reviews || []);
      setTeam(data.team || []);
      setFooterLinks(data.footerLinks || []);
      setSocialMedia(data.socialMedia || []);
      setStore(data.store || null); // Store the fetched store data
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadAllData();
  }, [loadAllData]);

  const value = useMemo(
    () => ({
      loading,
      puzzles,
      product,
      products,
      services,
      reviews,
      team,
      socialMedia,
      footerLinks,
      store,
      setProduct, // Provide setProduct function in context
    }),
    [loading, puzzles, product, products, services, reviews, team, socialMedia, footerLinks, store]
  );

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export const useData = () => useContext(DataContext);
export { DataContext };
