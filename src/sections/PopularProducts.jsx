import {products} from '../constants'
import PopularProductCard from '../components/PopularProductCard'

const PopularProducts = () => {
  return (
    <section id='products' className='max-sm:mt-12 max-container '>
      <div className='flex flex-col justify-center gap-3'>
        <h2 className='text-4xl font-palanquin font-bold '>
          <span className='text-coral-red'>Popular</span> Products</h2>
        <p className='lg:max-w-xl mt-2 font-montserrat'>Discover the latest collection of must-have Nike gear, 
        designed to elevate   your style and performance. From iconic sneakers to cutting-edge activewear, 
          our popular products are here to help you stay ahead of the game.</p>
      </div>
      <div className='mt-16 grid 
      lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1
      sm:gap-4 gap-14'>
        {products.map((product, index)=>(
          <PopularProductCard key={product.index} {...product} />
        ))}
      </div>
    </section>
  )
}

export default PopularProducts