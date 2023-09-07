import Button from '../components/Button'
import {shoe8} from '../assets/images'

const SuperQuality = () => {
  return (
    
    <section id="about-us" 
    className="flex justify-between items-center max-lg:flex-col sm:flex-row gap-10 w-full max-container">
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin font-bold capitalize text-4xl lg:max-w-lg  ">
           We Provide You 
          <br/>
          <span className="text-coral-red inline-block z-10 pr-5">Super Quality</span>shoes. </h2>
          <p className="mt-4 lg:max-w-lg info-text">
          Beginning with a commitment to providing premium comfort and style,
           our Nike team is dedicated to inspiring everyone,
           to embrace their unique journeys through our cutting-edge sports apparel and footwear. </p>
           <p className='mt-6 lg:max-w-lg info-text'>Our dedication to detail and excellence ensures your satisfaction.</p>
          <div className='mt-11'>
          <Button label="View Details"></Button>
          </div>
      </div>
      <div className='flex-1 flex justify-center items-center'>
        <img src={shoe8} alt="Preview" 
        width={570} height={522} className='object-contain'/>
      </div>
    </section>
  )
}

export default SuperQuality