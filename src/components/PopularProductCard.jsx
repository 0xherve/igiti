// import { star } from '../assets/icons'

const PopularProductCard = ( {imgURL, name, price}) => {
  return (
    <div className="product-card">
      <img src={imgURL} alt={name} className='w-fit h-auto rounded-xl object-contain' />
      <div className=" flex justify-start gap-2 ">
        {/* <img src={star} alt="rating" width={24} height={24} />
        <p className='font-montserrat text-xl 
        leading-normal text-slate-gray'>(4.5)</p> */}
        </div>
        <h3 className=' mt-2 text-2xl leading-normal font-semibold font-palanquin'>{name}</h3>
        <p className=' mt-2 font-semibold font-montserrat text-orange-500 text-2xl leading-normal'>{price}</p>
    </div>
  )
}

export default PopularProductCard