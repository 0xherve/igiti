import { Link } from 'react-router';
import Container from '../components/Container';

const ErrorPage = () => (
  <Container as="section" className="py-section text-center font-montserrat">
    <h1 className="text-4xl font-bold text-brand-500">Page not found</h1>
    <p className="my-6 text-lg text-muted">This page does not exist.</p>
    <Link to="/" className="font-semibold underline">Back to home</Link>
  </Container>
);

export default ErrorPage;
