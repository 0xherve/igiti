import { Disclosure } from '@headlessui/react';
import { minus, plus } from '../assets/icons';

const FaqItem = ({ data }) => {
  const { sections } = data;

  return (
    <div className='max-container my-4'>
      <div className="w-full flex flex-col gap-5">
        {sections && sections.length > 0 ? (
          sections.map((item) => (
            <Disclosure as="div" key={item.index} className="rounded-lg flex flex-col shadow-md min-w-fit h-auto p-8 font-montserrat bg-pale-blue">
              <Disclosure.Button className="group flex w-full items-center justify-between gap-5 font-montserrat">
                <span className="lg:text-2xl lg:font-medium text-black text-start group-hover:text-orange-400">
                  {item.question}
                </span>
                <img src={plus} alt="Expand" className='faq-img group-data-[open]:hidden '/>
              <img src={minus} alt="contract" className='faq-img group-data-[open]:block hidden'/>
              </Disclosure.Button>
              <Disclosure.Panel className="mt-3 font-medium text-lg text-gray-500">
                {typeof item.answer === 'string' ? (
                  <p>{item.answer}</p>
                ) : (
                  <div>
                    {/* If the answer is an array, render its points */}
                    <p>{item.answer[0]}</p>
                    <ul className="list-disc ml-5">
                      {item.answer.slice(1).map((point, index) => (
                        <li key={index}>{point.point}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {/* Render additional text if it exists */}
                {item.text && <p className="mt-3">{item.text}</p>}
              </Disclosure.Panel>
            </Disclosure>
          ))
        ) : (
          <p>No FAQs available</p>
        )}
      </div>
    </div>
  );
};

export default FaqItem;
