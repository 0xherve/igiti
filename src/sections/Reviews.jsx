import Container from '../components/Container';
import ReviewCard from '../components/ReviewCard';
import SectionHeading from '../components/SectionHeading';
import { useData } from '../DataContext';

const Reviews = () => {
  const { reviews } = useData();
  // Duplicate the list so the marquee loops seamlessly.
  const loop = [...reviews, ...reviews];

  return (
    <section className="overflow-hidden">
      <Container>
        <SectionHeading description="Hear genuine stories from our customers about their exceptional experience with us.">
          What Our <span className="text-brand-500">Customers</span> Say?
        </SectionHeading>
      </Container>
      <div className="mt-12 overflow-hidden">
        <div className="flex w-max animate-marquee gap-8 hover:[animation-play-state:paused] motion-reduce:animate-none">
          {loop.map((review, index) => (
            <ReviewCard key={index} customerName={review.customerName} rating={review.rating} feedback={review.feedback} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
