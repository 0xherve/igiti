// schemas/shopButton.js
export default {
    name: 'store',
    title: 'Store Link',
    type: 'document',
    fields: [
      { name: 'label',
         title: 'Label',
          type: 'string',
          options: { hotspot: true }, 
          validation: Rule => Rule.required(),
          Description: "The Label for the store button's link"
        },
        
      { name: 'link',
         title: 'Link',
          type: 'url',
           validation: Rule => Rule.required(),
          description: 'The link for the store link' 
        },
       ],
       description: "You can only have one button"
  };
  