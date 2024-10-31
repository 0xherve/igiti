// schemas/services.js
export default {
    name: 'services',
    title: 'Services',
    type: 'document',
    fields: [
      { name: 'image',
         title: 'Illustrative Image',
          type: 'image',
          options: { hotspot: true }, 
          validation: Rule => Rule.required(),
          Description: "The Image to illustrate the service"
        },
        
      { name: 'label',
         title: 'Label',
          type: 'string',
           validation: Rule => Rule.required(),
          description: 'The title for the service' 
        },

      { name: 'text',
         title: 'text',
          type: 'text',
           validation: Rule => Rule.required(),
          description: 'Ellaborate about the service you offer'
          }
       ],
  };
  