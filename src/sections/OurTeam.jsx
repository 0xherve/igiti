import Container from '../components/Container';
import MemberCard from '../components/MemberCard';
import SectionHeading from '../components/SectionHeading';
import { urlFor } from '../assets/sanityClient';
import { useData } from '../DataContext';

const OurTeam = () => {
  const { team } = useData();

  return (
    <Container>
      <SectionHeading description="Get to know the people behind Igiti Enterprises">
        Meet the <span className="text-brand-500">Team</span>
      </SectionHeading>
      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {team.map((member) => (
          <MemberCard key={member.name} role={member.role} name={member.name} imgURL={urlFor(member.image, 288)?.url()} />
        ))}
      </div>
    </Container>
  );
};

export default OurTeam;
