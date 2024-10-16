import {products} from '../constants'
import PopularProductCard from '../components/PopularProductCard'

const PopularProducts = () => {
  return (
    <section className=' w-full'>
      <div className='flex flex-col justify-center gap-3 items-center'>
        <h2 className='text-4xl font-palanquin font-bold '>
          <span className='text-orange-500'>Popular</span> Products</h2>
        <p className='popular-text'>Unleash your inner potential with our captivating collection of educational games.</p>
      </div>
      <div className='product-list' >
        {products.map((product, index)=>(
          <PopularProductCard key={index} {...product} />
        ))}
      </div>
    </section>
  )
}

export default PopularProducts