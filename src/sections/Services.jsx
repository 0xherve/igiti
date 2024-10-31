import { useState, useEffect } from 'react'
import ServiceCard from '../components/ServiceCard'
import { client, urlFor } from '../assets/sanityClient'
// import {services} from '../constants'

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(()=>{
    const fetchServices = async ()=> {
      const query = '*[_type=="services"]'
      const data = await client.fetch(query);
      if (data && data.length > 0) {
        setServices(data)
      }
      else{ 
        console.warn('no data found')
      }
    }
    fetchServices()
  }
  , [])

  return (
    <section className='grid xl:grid-flow-col max-md:flex-col max-lg:i-between justify-center gap-10' >
      {services.map((service)=>(
        <ServiceCard key={service.label} 
        imgURL={urlFor(service.image).url()}
        label={service.label}
        subtext={service.text}
        />
      ))}
    </section>
  )
}

export default Services