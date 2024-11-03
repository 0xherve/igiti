import { useData } from "../DataContext.jsx"; // Import useData from DataContext
import Button from "../components/Button";
import Loader from "../pages/Loader"; // Ensure Loader is imported
import { arrowRight } from '../assets/icons';
import ShoeCard from "../components/ShoeCard";
import { urlFor } from "../assets/sanityClient";

const Hero = () => {
  const { puzzles, product, setProduct, loading } = useData(); // Access DataContext properties

  if (loading) return <Loader />; // Display loader if data is loading

  return (
    <section id="home" className="hero">
      <div className="hero-title">
        <h1 className="hero-h1">
          <span>Bringing Africa to </span>
          <span className="text-orange-500">Life.</span>
        </h1>
        <p className="hero-text">Journey through Africa Piece by Piece</p>
        <Button label="Shop Now" iconURL={arrowRight} link="https://igitiecom.netlify.app/" />
      </div>

      <div className="hero-img max-lg:mx-2">
        {product && (
          <img
            src={product}
            alt="Puzzle Collection"
            width={610}
            height={500}
            className="object-contain relative z-5 rounded-3xl"
          />
        )}
        
        <div className="hero-pics">
          {puzzles.map((item, index) => (
            <div key={index}>
              <ShoeCard
                imgURL={urlFor(item.thumbnail).url()} // Generate image URL using Sanity helper
                changeBigShoeImg={setProduct} // Pass the function to update main product image
                bigShoeImg={product}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
