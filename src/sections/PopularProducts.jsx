import {products} from '../constants'
import PopularProductCard from '../components/PopularProductCard'

const PopularProducts = () => {
  return (
    <section id='products' className='max-sm:mt-12 w-full '>
      <div className='flex flex-col justify-center gap-3 items-center'>
        <h2 className='text-4xl font-palanquin font-bold '>
          <span className='text-orange-500'>Popular</span> Products</h2>
        <p className='lg:max-w-xl mt-2 font-montserrat text-2xl font-medium text-center info-text items-center'>Unleash your inner potential with our captivating collection of educational games.</p>
      </div>
      <div className='mt-5 grid sm:gap-8 grid-flow-col gap-16 p-10 rounded-2xl
       md:gap-36 justify-items-stretch max-lg:grid-flow-row' >
        {products.map((product, index)=>(
          <PopularProductCard key={index} {...product} />
        ))}
      </div>
    </section>
  )
}

export default PopularProducts