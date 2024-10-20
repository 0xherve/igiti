import ReviewCard from '../components/ReviewCard'
import {reviews} from '../constants'

const Reviews = () => {
  return (
    <section className="container ">
      <h3 className="font-palanquin text-center
      text-4xl font-bold">What Our <span></span>
       <span className="text-orange-400 ">
        Customers</span> Say?</h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center">
         Here genuine stories from
         our customers about 
         their exceptional experience with us </p>
         <div className="mt-5 flex justify-evenly 
         items-center max-lg:flex-col gap-14 ">
          {reviews.map((review)=>(
            <ReviewCard key={review.customerName} 
            imgURL={review.imgURL} customerName={review.customerName}
            rating={review.rating} feedback={review.feedback}/> 
          ))}
         </div>
    </section>
  )
}

export default Reviews