import React from 'react'

const ServiceCard = ({imgURL, label, subtext}) => {
  return (
    <div className='service-contain gap-4'>
        <div className='flex items-center justify-between gap-8 space-x-evenly'> 
          <div className='service-img'> 
            <img src={imgURL} alt={label} width={24} height={24} />
        </div>
        <h1 className='text-2xl text-right font-semibold text-orange-500'>{label}</h1>
        </div>
        <p className='service-text text-center'>{subtext}</p>
    </div>
  )
}

export default ServiceCard;