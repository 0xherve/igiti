import React from 'react'

const ServiceCard = ({imgURL, label, subtext}) => {
  return (
    <div className='service-contain'>
        <div className='flex items-start justify-between'> 
          <div className='service-img'> 
            <img src={imgURL} alt={label} width={24} height={24} />
        </div>
        <h1 className='text-2xl font-medium text-orange-500'>{label}</h1>
        </div>
        <p className='service-text'>{subtext}</p>
    </div>
  )
}

export default ServiceCard;