import ServiceCard from '../components/ServiceCard'
import {services} from '../constants'

const Services = () => {
  return (
    <section className='max-container flex gap-10 max-md:flex-col max-md:justify-between justify-center' >
      {services.map((service)=>(
        <ServiceCard key={service.label} {...service}/>
      ))}
    </section>
  )
}

export default Services