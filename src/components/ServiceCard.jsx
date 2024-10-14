import React from 'react'

const ServiceCard = ({imgURL, label, subtext}) => {
  return (
    <div className='service-contain'>
        <div className='service-img'> 
            <img src={imgURL} alt={label} width={24} height={24} />
        </div>
        
        <p className='service-text'>{subtext}</p>
    </div>
  )
}

export default ServiceCard;