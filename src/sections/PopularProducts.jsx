// import {products} from '../constants'
import { urlFor } from '../assets/sanityClient'
import PopularProductCard from '../components/PopularProductCard'
import { useData } from '../DataContext';

const PopularProducts = () => {
  const {products} = useData();

  return (
    <section className=' w-full'>
      <div className='flex flex-col justify-center gap-3 items-center'>
        <h2 className='text-4xl font-palanquin font-bold '>
          <span className='text-orange-500'>Popular</span> Products</h2>
        <p className='popular-text'>Unleash your inner potential with our captivating collection of educational games.</p>
      </div>
      <div className='product-list' >
        {products.map((product, index)=>(
          <PopularProductCard key={index} 
          imgURL={urlFor(product.image).url()}
          name={product.name}
          price ={product.price}
          rating={product.rating}
          description={product.description}
          link={product.url}
          />
        ))}
      </div>
    </section>
  )
}

export default PopularProducts