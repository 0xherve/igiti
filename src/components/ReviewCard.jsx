import React from 'react'
import { star } from '../assets/icons'

const ReviewCard = ({imgURL, customerName, rating, feedback}) => {
  return (
    <div className='flex justify-center items-center p-8
    flex-col shadow-xl rounded-2xl border-slate-400 min-w-sm max-w-sm'>

    {/* {imgURL ? {
      <img src={imgURL} alt={customerName}
        className='rounded-full object-cover 
        w-[120px] height-[120px]' /> */} 
        <p className='mt-8 max-w-sm text-center info-text'>{ feedback }</p>
        <div className='mt-3 flex flex-col justify-center items-center gap-2.5'>
            <img src={star} width={24} height={24}
            className='object-contain m-0' />
            <p className='font-montserat text-slate-gray font-medium text-xl'>{rating}</p>
            <h3 className='mt-1 font-palanquin text-3xl
            text-center  font-bold'>{customerName}</h3>
        </div>
    </div>
  )
}

export default ReviewCard