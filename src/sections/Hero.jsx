import { useState } from "react"
import Button from "../components/Button"
import { arrowRight } from '../assets/icons'
import { puzzles } from '../constants'
import { adults } from "../assets/images"
import ShoeCard from "../components/ShoeCard"

const Hero = () => {
  const [product, setProduct] = useState(adults)
  return (
    <section id="home"
     className="hero">
        <div className="hero-title">
          <h1 className="hero-h1">
            <span className=" relative z-10">Bringing Africa to </span>
          <span className="text-orange-500  inline-block z-10 pr-5">Life.</span>
        </h1>
          <p className="hero-text">Journey through Africa Piece by Piece </p>
          <Button label="Shop Now" iconURL={arrowRight} link='https://igitiecom.netlify.app/'/>
        </div>
        <div className="hero-img">
        <img src={product} alt="Shoe Collection" width={610} height={500} 
        className="object-contain relative z-5 rounded-3xl" />
        <div className="hero-pics">
        {puzzles.map((item)=>(
          <div key={item} >
            <ShoeCard imgURL={item} key={item.thumbnail} 
            changeBigShoeImg={(item)=>setProduct(item)} 
            bigShoeImg={product}/></div>
        ))}  
        </div>   
        </div>
    </section>
  )
}

export default Hero