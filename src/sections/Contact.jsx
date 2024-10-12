import Button from '../components/Button'
import { arrowRight } from '../assets/icons'

const Contact = () => {
  return (
    <section
    id="contact-us"
  className="max-container flex justify-between items-center max-lg:flex-col gap-10"
>
  <h3
    className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold">
    Contact Us
  </h3>
  <div >
    

    <Button label='Send Message' iconURL={arrowRight} full width></Button>
  </div>
</section>

  )
}

export default Contact