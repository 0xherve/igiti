import { useState, useEffect } from "react";
import Button from "../components/Button";
import { arrowRight } from '../assets/icons';
import ShoeCard from "../components/ShoeCard";
import { client, urlFor } from "../assets/sanityClient";

const Hero = () => {
  const [product, setProduct] = useState(null); // Set initial state to null
  const [puzzles, setPuzzles] = useState([]);

  useEffect(() => {
    const fetchPuzzle = async () => {
      const query = '*[_type == "puzzles"]{imgName, thumbnail}';
      const data = await client.fetch(query);
      if (data && data.length > 0) {
        setPuzzles(data);
        setProduct(urlFor(data[0].thumbnail).url()); // Set the first image as default
      } else {
        console.warn("No puzzle images found");
      }
    };

    fetchPuzzle();
  }, []);

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
      <div className="hero-img">
        {product && ( // Ensure product has been set
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
                imgURL={urlFor(item.thumbnail).url()} // Pass URL directly to ShoeCard
                changeBigShoeImg={setProduct} // Directly pass the setter function
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
