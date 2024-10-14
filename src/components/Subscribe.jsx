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
    <input type="text" placeholder="subscribe@nike.com"
    className="input" />
    <div className='flex max-sm:justify-end items-center
    max-sm:w-full '>
    </div>
  </div> */}

  <Button label="Subscribe To Our newsletter" backgroundColor='bg-inherit'
 borderColor='border-orange-400' />
</section>

  )
}

export default Subscribe