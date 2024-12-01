import { useData } from "../DataContext.jsx";
import Button from "../components/Button";
import Loader from "../pages/Loader";
import { arrowRight } from '../assets/icons';
import ShoeCard from "../components/ShoeCard";
import { urlFor } from "../assets/sanityClient";

const Hero = () => {
  const { puzzles, product, setProduct, loading, store } = useData();

  if (loading) return <Loader />;

  return (
    <section id="home" className="hero">
      <div className="hero-title">
        <h1 className="hero-h1">
          <span>Bringing Africa to </span>
          <span className="text-orange-500">Life.</span>
        </h1>
        <p className="hero-text">Journey through Africa Piece by Piece</p>
        <Button
          label={store?.label || "Shop Now"} // Added fallback text for label
          iconURL={arrowRight}
          link={"https://buy.igiti.africa/" || store.link} // Added fallback URL for link
        />
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
                imgURL={urlFor(item.thumbnail).url()}
                changeBigShoeImg={setProduct}
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
