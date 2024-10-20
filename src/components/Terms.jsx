import policyData from '../assets/return-policy.json';

const Terms = () => {
  return (
    <div className="container mx-auto px-4 lg:py-12 max-w-7xl flex flex-col font-montserrat">
      {/* Title Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-semibold text-orange-400 mb-4">{policyData.title}</h1>
        <p className="lg:text-lg max-lg:text-start font-medium text-gray-700">{policyData.description}</p>
      </div>
      
      {/* Sections */}
      <div className="space-y-8">
        {policyData.sections.map((section, index) => (
          <div key={index} className="border-b border-orange-200 pb-6">
            {/* Section Heading */}
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{section.heading}</h2>
            
            {/* Handling Points */}
            {section.points ? (
              section.points.map((point, subIndex) => (
                <div key={subIndex} className="mb-4">
                  <h3 className="text-lg font-medium text-gray-800 underline">{point.subheading}</h3>
                  <p className="text-medium text-gray-700">{point.content}</p>
                </div>
              ))
            ) : section.items ? (
              // Handling Items List
              <div className="text-medium text-gray-700">
                <p className="mb-2">{section.content}</p>
                <ul className="list-disc list-inside ml-5 space-y-2">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-700">{item}</li>
                  ))}
                </ul>
              </div>
            ) : (
              // Handling Simple Content
              <p className="text-base text-gray-700">{section.content}</p>
            )}
          </div>
        ))}
      </div>
      <div>
        <p className='my-5 '>{policyData.contact} <span className='underline font-medium'>{policyData.address}</span> <span>{policyData.regards}</span></p>
      </div>
    </div>
  );
};

export default Terms;
