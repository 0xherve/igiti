import { useState } from "react"
import Button from "../components/Button"
import { arrowRight } from '../assets/icons'
import { statistics, shoes } from '../constants'
import { bigShoe1 } from "../assets/images"
import ShoeCard from "../components/ShoeCard"

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1)
  return (
    <section id="home"
     className="w-full flex lg:flex-row flex-col
      justify-center min-h-screen gap-10 max-container">
        <div className="relative lg:w-2/5 w-full max-lg:padding-x pt-28
        flex flex-col justify-center items-start "  >
          <p className="text-coral-red text-xl font-montserrat">Our Summer Collection</p>
          <h1 className="mt-8 font-palanquin font-bold
          text-8xl max-sm:text-[52px] max-sm:leading-[1.5] z-10 ">
            <span className="lg:whitespace-nowrap
            relative z-10  \">The New Arrival  </span>
          <br/>
          <span className="text-coral-red  inline-block z-10 pr-5">Nike </span>
          shoes </h1>
          <p className="font-montserrat 
          text-slate-gray text-lg leading-8 
          mt-6 mb-8 sm:max-w-sm">Discover stylish Nike arrivals, quality comfort, and innovation for your active life. </p>
          <Button label="Shop Now" iconURL={arrowRight}></Button>
          <div className="flex justify-start 
          items-start flex-wrap w-full mt-10 gap-16">
            {statistics.map((stat, index)=>(
              <div key={index}>
                <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
                <p className="leading-7 font-palanquin text-slate-gray">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative flex-1 flex 
        justify-center items-center lg:min-h-full
        max-lg:py-40 bg-primary bg-hero bg-cover bg-center">
        <img src={bigShoeImg} alt="Shoe Collection" width={610} height={500} 
        className="object-contain relative z-10 " />
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