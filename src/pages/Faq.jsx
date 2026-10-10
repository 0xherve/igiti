import Container from '../components/Container';
import FaqItem from '../components/FaqItem';
import faq from '../assets/faq.json';

const Faq = () => (
  <Container as="section" className="py-section">
    <h1 className="mb-10 text-center font-montserrat text-3xl font-bold text-brand-500">Frequently asked Questions</h1>
    <FaqItem data={faq} />
  </Container>
);

export default Faq;
