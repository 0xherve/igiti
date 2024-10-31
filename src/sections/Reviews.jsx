import { useState, useEffect } from 'react'
import ReviewCard from '../components/ReviewCard'
import {client} from '../assets/sanityClient'
// import {reviews} from '../constants'

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(()=>{
    const fetchReviews = async ()=>{
      const query = '*[_type=="reviews"] | order(rating desc)';
      const data = await client.fetch(query);
      if( data && data.length> 0 ){
        setReviews(data)
      }
    else{
      console.log("No data found")
    }
    }
    fetchReviews()
  }, [])
  return (
    <section className="container relative">
      <h3 className="font-palanquin text-center
      text-4xl font-bold">What Our <span></span>
       <span className="text-orange-400 ">
        Customers</span> Say?</h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center">
         Here genuine stories from
         our customers about 
         their exceptional experience with us </p>
         <div className="mt-8 flex justify-between items-center flex-wrap max-lg:flex-col lg:gap-8 ">
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