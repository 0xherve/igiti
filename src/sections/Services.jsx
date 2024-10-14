import ServiceCard from '../components/ServiceCard'
import {services} from '../constants'

const Services = () => {
  return (
    <section className='flex  max-md:flex-col max-lg:justify-between justify-center gap-10' >
      {services.map((service)=>(
        <ServiceCard key={service.label} {...service}/>
      ))}
    </section>
  )
}

export default Services