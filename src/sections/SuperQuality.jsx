import Button from '../components/Button';
import Container from '../components/Container';
import ShoeCard from '../components/ShoeCard';
import { useData } from '../DataContext';
import { urlFor } from '../assets/sanityClient';

const SuperQuality = () => {
  const { puzzles, product, setProduct, store } = useData();

  return (
    <Container className="grid items-center gap-12 lg:grid-cols-2">
      <div className="flex flex-col gap-8">
        <h2 className="font-palanquin text-4xl font-bold capitalize leading-tight">
          Igniting <span className="text-brand-500">Creativity</span>, celebrating culture.
        </h2>
        <p className="max-w-lg text-lg leading-7 text-muted">
          With a commitment to providing high-quality, culturally relevant products, our team is dedicated to creating
          experiences that enrich lives and spark imagination.
        </p>
        <div>
          <Button label="Shop Now" link={store?.link || 'https://buy.igiti.africa/'} />
        </div>
      </div>

      <div className="flex flex-col items-center gap-6">
        {product && (
          <img src={product} alt="Puzzle collection" className="aspect-[4/5] w-full max-w-md rounded-card object-cover" />
        )}
        <div className="grid w-full max-w-md grid-cols-4 gap-3">
          {puzzles.map((item, index) => (
            <ShoeCard
              key={index}
              imgURL={urlFor(item.thumbnail, 240)?.url()}
              changeBigShoeImg={setProduct}
              bigShoeImg={product}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default SuperQuality;
