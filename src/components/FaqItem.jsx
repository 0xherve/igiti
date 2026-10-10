import { Disclosure } from '@headlessui/react';
import { minus, plus } from '../assets/icons';
import { cardClass } from './Card';

const FaqItem = ({ data }) => {
  const sections = data.sections || [];
  if (!sections.length) return <p>No FAQs available</p>;

  return (
    <div className="flex flex-col gap-4">
      {sections.map((item) => (
        <Disclosure as="div" key={item.index} className={`${cardClass} p-6 sm:p-8`}>
          <Disclosure.Button className="group flex w-full items-center justify-between gap-6 text-left font-montserrat text-lg font-medium text-gray-900 hover:text-brand-500 sm:text-xl">
            {item.question}
            <img src={plus} alt="" className="size-6 shrink-0 group-data-open:hidden" />
            <img src={minus} alt="" className="hidden size-6 shrink-0 group-data-open:block" />
          </Disclosure.Button>
          <Disclosure.Panel className="mt-4 font-montserrat text-lg text-muted">
            {typeof item.answer === 'string' ? (
              <p>{item.answer}</p>
            ) : (
              <>
                <p>{item.answer[0]}</p>
                <ul className="ml-5 list-disc">
                  {item.answer.slice(1).map((point, index) => (
                    <li key={index}>{point.point}</li>
                  ))}
                </ul>
              </>
            )}
            {item.text && <p className="mt-3">{item.text}</p>}
          </Disclosure.Panel>
        </Disclosure>
      ))}
    </div>
  );
};

export default FaqItem;
