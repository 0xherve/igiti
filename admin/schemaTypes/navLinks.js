// schemas/navLinks.js
export default {
    name: 'navLinks',
    title: 'Navigation Links',
    type: 'document',
    fields: [
      {
        name: 'links',
        title: 'Links',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              { name: 'href', title: 'Link URL', type: 'url', validation: Rule => Rule.required() },
              { name: 'label', title: 'Link Label', type: 'string', validation: Rule => Rule.required() },
            ],
          },
        ],
      },
    ],
  };
  