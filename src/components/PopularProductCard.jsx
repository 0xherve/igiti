import { star } from '../assets/icons'

const PopularProductCard = ( {imgURL, name, price, rating}) => {
  return (
    <a target='blank'>
      <div className="product-card mb-8">
      <img src={imgURL} alt={name} className='w-[350px] h-auto rounded-xl object-contain' />
      <div className=" flex justify-start gap-2 ">
        <img src={star} alt="rating" width={24} height={24} />
        <p className='font-montserrat text-xl 
        leading-normal text-slate-gray'>{rating}</p> 
        </div>
        <h3 className=' mt-2 text-2xl leading-normal font-semibold font-palanquin'>{name}</h3>
        <p className=' mt-2 font-semibold font-montserrat text-orange-500 text-2xl leading-normal'>{price}</p>
    </div>
    </a>
   
  )
}

export default PopularProductCard