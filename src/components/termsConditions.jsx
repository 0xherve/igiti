import termsData from '../assets/terms-conditions.json';

const TermsConditions = () => {
  return (
    <div className="container mx-auto px-4 lg:py-12 max-w-7xl flex flex-col font-montserrat">
      {/* Title Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-semibold text-orange-400 mb-4">{termsData.title}</h1>
        <p className="lg:text-lg max-lg:text-start font-medium text-gray-700">{termsData.description}</p>
      </div>
      
      {/* Sections */}
      <div className="space-y-8">
        {termsData.sections.map((section, index) => (
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
      
      {/* Contact and Closing */}
      <div className="mt-8">
        <p className="my-5">
          {termsData.contact} 
          <span className="underline font-medium">{termsData.email}</span> 
          <span className="font-medium"> | {termsData.phone}</span>
        </p>
        <p>{termsData.regards}</p>
      </div>
    </div>
  );
};

export default TermsConditions;
