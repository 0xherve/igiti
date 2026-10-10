import Container from '../components/Container';
import ServiceCard from '../components/ServiceCard';
import { urlFor } from '../assets/sanityClient';
import { useData } from '../DataContext';

const Services = () => {
  const { services } = useData();

  return (
    <Container className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {services.map((service) => (
        <ServiceCard
          key={service._id || service.label}
          imgURL={urlFor(service.image, 48)?.url()}
          label={service.label}
          subtext={service.text}
        />
      ))}
    </Container>
  );
};

export default Services;
