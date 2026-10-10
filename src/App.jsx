import { lazy, Suspense } from 'react';
import Hero from './sections/Hero';
import OurTeam from './sections/OurTeam';
import PopularProducts from './sections/PopularProducts';
import Services from './sections/Services';
import SuperQuality from './sections/SuperQuality';
import Reviews from './sections/Reviews';

const Sponsors = lazy(() => import('./sections/Sponsors'));

const App = () => (
  <div className="relative min-h-screen overflow-x-hidden">
    <div id="hero">
      <Hero />
    </div>
    <div id="products" className="mt-8 bg-surface py-section">
      <PopularProducts />
    </div>
    <div id="about-us" className="py-section">
      <SuperQuality />
    </div>
    <div id="services" className="py-section">
      <Services />
    </div>
    <div id="team" className="bg-surface py-section">
      <OurTeam />
    </div>
    <div id="sponsors" className="bg-surface py-section">
      <Suspense fallback={null}><Sponsors /></Suspense>
    </div>
    <div id="review" className="py-section">
      <Reviews />
    </div>
  </div>
);

export default App;
