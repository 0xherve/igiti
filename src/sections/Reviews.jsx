import ReviewCard from '../components/ReviewCard';
import { useData } from '../DataContext';

const Reviews = () => {
  const { reviews } = useData();

  return (
    <section className="reviews-section">
      <h3 className="font-palanquin text-center text-4xl font-bold">
        What Our <span className="text-orange-400">Customers</span> Say?
      </h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center">
        Hear genuine stories from our customers about their exceptional experience with us.
      </p>
      <div className="reviews-container z-10">
        <div className="reviews-content">
          {reviews.map((review, index) => (
            <ReviewCard
              key={review.customerName + index} // added index to ensure unique key if names are duplicated
              imgURL={review.imgURL}
              customerName={review.customerName}
              rating={review.rating}
              feedback={review.feedback}
            />
          ))}
          {/* Duplicate reviews for a seamless scroll effect */}
          {reviews.map((review, index) => (
            <ReviewCard
              key={review.customerName + "-dup-" + index}
              imgURL={review.imgURL}
              customerName={review.customerName}
              rating={review.rating}
              feedback={review.feedback}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
