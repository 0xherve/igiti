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
     className="w-full flex lg:flex-row flex-col
      justify-center min-h-screen gap-10 max-container">
        <div className="relative lg:w-2/5 max-lg:padding-x 
        flex flex-col justify-center items-start ">
          <h1 className="font-palanquin font-bold
          text-8xl max-sm:text-[52px] max-sm:leading-[1.5] z-10 ">
            <span className=" relative z-10">Bringing Life to </span>
          <br/>
          <span className="text-orange-500  inline-block z-10 pr-5">Africa.</span>
        </h1>
          <p className="font-montserrat font-bold  
          text-slate-gray text-lg leading-8 
          mt-6 mb-8 sm:max-w-sm">Journey through Africa Piece by Piece </p>
          <Button label="Shop Now" iconURL={arrowRight}></Button>
        </div>
        <div className="relative flex-1 flex 
        justify-center items-center lg:min-h-full
        max-lg:py-4  bg-center">
        <img src={product} alt="Shoe Collection" width={610} height={500} 
        className="object-contain relative z-5 rounded-3xl" />
        <div className="flex sm:gap-6 absolute -bottom-[7%] max-lg:bottom-[-15%] ml-[20%] max-sm:gap-5
        sm:left-[10%] max-sm:px-6 items-center justify-center ">
        {puzzles.map((item)=>(
          <div key={item}>
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