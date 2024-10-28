// schemas/footerLinks.js
export default {
    name: 'footerLinks',
    title: 'Footer Links',
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
              { name: 'title', title: 'Title', type: 'string', validation: Rule => Rule.required() },
              { name: 'links', title: 'Links', type: 'array', of: [{ type: 'object', fields: [{ name: 'name', title: 'Name', type: 'string', validation: Rule => Rule.required() }, { name: 'link', title: 'Link', type: 'url' }] }] },
            ],
          },
        ],
      },
    ],
  };
  