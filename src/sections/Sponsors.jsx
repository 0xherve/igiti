import { useState } from 'react';
import { useData } from '../DataContext';

const Sponsors = () => {
  const { sponsors, loading } = useData();

  if (loading || !sponsors?.length) return null;

  const handleSponsorClick = (link) => {
    if (link) {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section className="sponsors-section">
      <h2 className="text-4xl font-bold text-center mb-12">Our Partners</h2>
      <div className="max-w-7xl mx-auto">
        <div className="sponsors-container">
          <div className="sponsors-content">
            {sponsors.map((sponsor, index) => (
              <img 
                key={index} 
                src={sponsor.image}
                alt={sponsor.name}
                className="sponsor-item cursor-pointer"
                onClick={() => handleSponsorClick(sponsor.link)}
                title={`Visit ${sponsor.name}'s website`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;