import Container from '../components/Container';
import PopularProductCard from '../components/PopularProductCard';
import SectionHeading from '../components/SectionHeading';
import { urlFor } from '../assets/sanityClient';
import { useData } from '../DataContext';

const PopularProducts = () => {
  const { products } = useData();

  return (
    <Container>
      <SectionHeading description="Unleash your inner potential with our captivating collection of educational games.">
        <span className="text-brand-500">Popular</span> Products
      </SectionHeading>
      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product, index) => (
          <PopularProductCard
            key={product._id || index}
            imgURL={urlFor(product.image, 700)?.url()}
            name={product.name}
            price={product.price}
            rating={product.rating}
            description={product.description}
            link={product.url}
          />
        ))}
      </div>
    </Container>
  );
};

export default PopularProducts;
