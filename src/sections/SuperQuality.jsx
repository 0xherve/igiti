import Button from '../components/Button'
import {shoe8} from '../assets/images'

const SuperQuality = () => {
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
          <Button label="Shop Now"></Button>
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