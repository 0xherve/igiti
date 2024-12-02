import Button from '../components/Button'
import {adults} from '../assets/images'
import {useData} from '../DataContext'
import ShoeCard from "../components/ShoeCard";
import { urlFor } from "../assets/sanityClient";

const SuperQuality = () => {
  const { puzzles, product, setProduct, store } = useData();
  return (
    
    <section id="about-us" 
    className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
      <div className="flex flex-1 flex-col gap-10">
        <h2 className="font-palanquin font-bold capitalize text-4xl lg:max-w-lg">
           Igniting <span> </span>
          <span className="text-orange-500 inline-block"> Creativity</span>, celebrating culture. </h2>
          <p className="lg:max-w-lg info-text">
          With a commitment to providing high-quality, culturally relevant products, our team is dedicated to creating experiences that enrich lives and spark imagination.</p>
          <div>
          <Button label="Shop Now" link={'https://buy.igiti.africa/' || store.link}></Button>
          </div>
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
  )
}

export default SuperQuality