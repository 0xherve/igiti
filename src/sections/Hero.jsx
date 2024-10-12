import { useState } from "react"
import Button from "../components/Button"
import { arrowRight } from '../assets/icons'
import { shoes } from '../constants'
import { bigShoe1 } from "../assets/images"
import ShoeCard from "../components/ShoeCard"

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1)
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
        max-lg:py-40 bg-primary bg-hero bg-cover bg-center">
        <img src={bigShoeImg} alt="Shoe Collection" width={610} height={500} 
        className="object-contain relative z-5 " />
        <div className="flex sm:gap-6 absolute -bottom-[8%]
        sm:left-[10%] max-sm:px-6 items-center justify-center ">
        {shoes.map((shoe)=>(
          <div key={shoe}>
            <ShoeCard imgURL={shoe} 
            changeBigShoeImg={(shoe)=>setBigShoeImg(shoe)} 
            bigShoeImg={bigShoeImg}/></div>
        ))}  
        </div>   
        </div>
    </section>
  )
}

export default Hero