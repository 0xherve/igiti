import policyData from '../assets/privacy-policy.json';

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 lg:py-12 max-w-7xl flex flex-col font-montserrat">
      {/* Title Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-semibold text-orange-400 mb-4">{policyData.title}</h1>
        <p className="lg:text-lg max-lg:text-start font-medium text-gray-700">Effective Date: {policyData.effective_date}</p>
        <p className="lg:text-lg max-lg:text-start font-medium text-gray-700 mt-2">{policyData.introduction}</p>
      </div>

      {/* Sections */}
      <div className="space-y-8">
        {policyData.sections.map((section, index) => (
          <div key={index} className="border-b border-orange-200 pb-6">
            {/* Section Heading */}
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{section.heading}</h2>

            {/* Handling Subsections */}
            {section.subsections ? (
              section.subsections.map((subsection, subIndex) => (
                <div key={subIndex} className="mb-4">
                  <h3 className="text-lg font-medium text-gray-800 underline">{subsection.subheading}</h3>
                  {subsection.items ? (
                    <ul className="list-disc list-inside ml-5 space-y-2">
                      {subsection.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-gray-700">{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-medium text-gray-700">{subsection.content}</p>
                  )}
                </div>
              ))
            ) : section.content ? (
              // Simple Content
              <p className="text-base text-gray-700">{section.content}</p>
            ) : null}
          </div>
        ))}
      </div>

      {/* Contact Information */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Contact Us</h3>
        <p className="text-medium text-gray-700">
          Email: <a href={`mailto:${policyData.contact.email}`} className="underline text-blue-500">{policyData.contact.email}</a>
        </p>
        <p className="text-medium text-gray-700">
          Phone: <a href={`tel:${policyData.contact.phone}`} className="underline text-blue-500">{policyData.contact.phone}</a>
        </p>
        {policyData.contact.address && (
          <p className="text-medium text-gray-700">
            Address: <span>{policyData.contact.address}</span>
          </p>
        )}
      </div>

      {/* Acknowledgment */}
      <div className="mt-8">
        <p className="text-base text-gray-700">{policyData.acknowledgment}</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
