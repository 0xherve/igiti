import ServiceCard from '../components/ServiceCard'
import { urlFor } from '../assets/sanityClient'
import { useData } from '../DataContext'
// import {services} from '../constants'

const Services = () => {
  const { services } = useData()
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