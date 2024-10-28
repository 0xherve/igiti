// schemas/services.js
export default {
    name: 'services',
    title: 'Services',
    type: 'document',
    fields: [
      {
        name: 'serviceItems',
        title: 'Services',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              { name: 'imgURL', title: 'Image URL', type: 'image', options: { hotspot: true }, validation: Rule => Rule.required() },
              { name: 'label', title: 'Label', type: 'string', validation: Rule => Rule.required() },
              { name: 'subtext', title: 'Subtext', type: 'text', validation: Rule => Rule.required() },
            ],
          },
        ],
      },
    ],
  };
  