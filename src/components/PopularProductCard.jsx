import { star } from '../assets/icons'

const PopularProductCard = ( {link, imgURL, name, price, rating, description}) => {
  return (
    <a target='blank' href={link}>
      <div className="product-card mb-8">
      <img src={imgURL} alt={name} className='w-[350px] h-auto rounded-xl object-contain' />
      <div className=" flex justify-center gap-2">
        <img src={star} alt="rating" width={24} height={24} />
        <p className='font-montserrat text-xl 
        leading-normal text-slate-gray'>{rating}</p> 
        </div>
        <h3 className=' text-2xl leading-normal font-semibold font-palanquin'>{name}</h3>
        <p className=' mt-1 font-semibold font-montserrat text-orange-500 text-2xl leading-normal'>{price}</p>
        <p className='mt-2 popular-text'>{description}</p>
    </div>
    </a>
   
  )
}

export default PopularProductCard