// schemas/navLinks.js
export default {
    name: 'navLinks',
    title: 'Navigation Links',
    type: 'document',
        fields: [
          { name: 'href', title: 'Link URL', type: 'string', validation: Rule => Rule.required() },
          { name: 'label', title: 'Link Label', type: 'string', validation: Rule => Rule.required() },
          { 
            name: 'order', 
            title: 'Order', 
            type: 'number', 
            validation: Rule => Rule.min(1), // Optional validation for positive integers
            description: 'Determines the position of this link in the navigation'
          }
        ]

  };
  