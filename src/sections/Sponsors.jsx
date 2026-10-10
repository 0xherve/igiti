import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';
import SiteLink from '../components/SiteLink';
import { urlFor } from '../assets/sanityClient';
import { useData } from '../DataContext';

const Sponsors = () => {
  const { sponsors } = useData();
  if (!sponsors.length) return null;

  return (
    <Container>
      <SectionHeading>Our Partners</SectionHeading>
      <div className="mt-12 flex flex-wrap items-center justify-center gap-10">
        {sponsors.map((sponsor) => (
          <SiteLink key={sponsor._id} href={sponsor.link} target="_blank" title={`Visit ${sponsor.name}`}>
            <img
              loading="lazy"
              decoding="async"
              src={urlFor(sponsor.image, 250)?.url()}
              alt={sponsor.name}
              width={125}
              height={105}
              className="h-[105px] w-[125px] object-contain grayscale transition duration-300 hover:grayscale-0"
            />
          </SiteLink>
        ))}
      </div>
    </Container>
  );
};

export default Sponsors;
