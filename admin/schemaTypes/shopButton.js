// schemas/shopButton.js
export default {
    name: 'store',
    title: 'Store Link(only the first item will be shown)',
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
  };
  