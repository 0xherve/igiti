import {products} from '../constants'
import PopularProductCard from '../components/PopularProductCard'

const PopularProducts = () => {
  return (
    <section id='products' className='max-sm:mt-12 max-container '>
      <div className='flex flex-col justify-center gap-3'>
        <h2 className='text-4xl font-palanquin font-bold '>
          <span className='text-orange-500'>Popular</span> Products</h2>
        <p className='lg:max-w-xl mt-2 font-montserrat text-xl'>Unleash your inner potential with our captivating collection of educational games. From challenging puzzles to interactive games, our products are designed to ignite curiosity, spark creativity, and foster a deeper understanding of African culture.</p>
      </div>
      <div className='mt-16 grid 
      lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1
      sm:gap-4 gap-14'>
        {products.map((product, index)=>(
          <PopularProductCard key={index} {...product} />
        ))}
      </div>
    </section>
  )
}

export default PopularProducts