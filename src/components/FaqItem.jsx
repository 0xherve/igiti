import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { faq } from '../constants';
import { minus, plus } from '../assets/icons';

const FaqItem = ()=> {
  return (
    <div className='max-container my-5'>
        <div className="w-full flex flex-col  grid-rows-3 gap-5 ">
        {faq.map((item)=>(
            <Disclosure as="div" key={item.id} className="rounded-lg flex flex-col shadow-md min-w-fit h-auto p-8 font-montserrat bg-pale-blue">
            <DisclosureButton className="group flex w-full items-center justify-between gap-5 font-montserrat">  
              <span className="lg:text-2xl lg:font-medium text-black group-data-[hover]:text-orange-400">
                {item.question}
              </span>
              <img src={plus} alt="Expand" className='faq-img group-data-[open]:hidden '/>
              <img src={minus} alt="contract" className='faq-img group-data-[open]:block hidden'/>
            </DisclosureButton>
            <DisclosurePanel className="mt-3 font-medium text-lg text-gray-500 flex justify-between items-center">
                <p>{item.answer}</p>
            </DisclosurePanel>
          </Disclosure>
        ))}
        
    </div>
    </div>
  )
}

export default FaqItem;