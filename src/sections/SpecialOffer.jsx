import { offer }from '../assets/images'
import Button from '../components/Button'
import {arrowRight} from '../assets/icons'

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center 
    max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img src={offer} width={773} height={687}
        className="object-contain w-full"/>
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin font-bold capitalize text-4xl lg:max-w-lg  ">
          <span className="text-coral-red inline-block z-10 pr-5">Special</span>Offer </h2>
          <p className="mt-4 lg:max-w-lg info-text">
         Embark on a shopping journey that redifines your experience with unbelievable deals.
         From premium selections to incredible savings, we offer uparalleled value that sets us apart. </p>
           <p className='mt-6 lg:max-w-lg info-text'>
            Navigate the realm of  possibilities designed to fulfill your unique desires, 
            surpassing the loftiest expectations. Your journeywith us  is nothing short of exceptional. 
           </p>
          <div className='mt-11 flex flex-wrap gap-4'>
          <Button label="Shop Now" iconURL={arrowRight}></Button>
          <Button label='Learn more' backgroundColor="bg-white"
          borderColor="border-slate-gray" textColor="text-slate-gray"></Button>
          </div>
      </div>
    </section>
  )
}

export default SpecialOffer