import { useState, useEffect } from 'react';
import ReviewCard from '../components/ReviewCard';
import { client } from '../assets/sanityClient';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      const query = '*[_type=="reviews"] | order(rating desc)';
      const data = await client.fetch(query);
      if (data && data.length > 0) {
        setReviews(data);
      } else {
        console.log("No data found");
      }
    };
    fetchReviews();
  }, []);

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
