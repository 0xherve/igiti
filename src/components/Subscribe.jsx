import Button from '../components/Button'

const Subscribe = () => {
  return (
    <section
    id="contact-us"
  className="flex justify-between items-center max-lg:flex-col gap-10">
  {/* <p
    className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold">
    Sign Up for Updates & Newsletter
  </p>
  <div className='lg:max-w-[40%] w-full flex items-center
  max-sm:flex-col gap-5 p-2.5 sm:border sm:slate-gray rounded-full'>
    
    <div className='flex max-sm:justify-end items-center
    max-sm:w-full '>
    </div>
  </div> */}
  
    <a href="https://eminence.beehiiv.com/subscribe" target='blank'>
    <buttom className='footer-last_button'>Subscribe To Our newsletter</buttom>
 </a>
</section>

  )
}

export default Subscribe