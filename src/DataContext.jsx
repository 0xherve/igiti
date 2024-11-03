// src/DataContext.js
import { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { client, urlFor } from './assets/sanityClient';

const DataContext = createContext();

// eslint-disable-next-line react/prop-types
export const DataProvider = ({ children }) => {

    const [loading, setLoading] =useState(true)
    const [product, setProduct] = useState(null); 
    const [puzzles, setPuzzles] = useState([]);
    const [ products, setProducts ]= useState([]);
    const [services, setServices] = useState([]);
    const [reviews, setReviews] = useState([]);
    const [team, setTeam ] = useState([]);
    const [socialMedia, setSocialMedia] = useState([]);
    const [footerLinks, setFooterLinks] = useState([])

    const loadAllData = async () => {
      setLoading(true);
    
      try {
        const query = `{
          "puzzles": *[_type == "puzzles"]{imgName, thumbnail},
          "products": *[_type == "products"],
          "services": *[_type == "services"],
          "reviews": *[_type == "reviews"] | order(rating desc),
          "team": *[_type == "team"] | order(rank asc),
          "footerLinks": *[_type == "footerLinks"] | order(order asc),
          "socialMedia": *[_type == "socials"]
        }`;
    
        const data = await client.fetch(query);
    
        // Set states with fallback to avoid empty or undefined data
        setPuzzles(data.puzzles || []);
        setProduct(data.puzzles?.[0]?.thumbnail ? urlFor(data.puzzles[0].thumbnail).url() : null);
        setProducts(data.products || []);
        setServices(data.services || []);
        setReviews(data.reviews || []);
        setTeam(data.team || []);
        setFooterLinks(data.footerLinks || []);
        setSocialMedia(data.socialMedia || []);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
    

  useEffect(() => {
    loadAllData();
  }, []);

  const value = useMemo(
    () => ({
      loading,
      puzzles,
      product,
      products,
      services,
      team,
      reviews,
      footerLinks,
      socialMedia,
    }),
    [loading, puzzles, product, products, services, team, reviews, footerLinks, socialMedia]
  );
  
  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
  export { DataContext };
  