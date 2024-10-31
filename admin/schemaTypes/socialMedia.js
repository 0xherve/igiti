// schemas/socialMedia.js
export default {
    name: 'socials',
    title: 'Social Media Links',
    type: 'document',
    fields: [
              { name: 'src', title: 'Icon', type: 'image', options: { hotspot: true }, validation: Rule => Rule.required() },
              { name: 'alt', title: 'Alt Text', type: 'string', validation: Rule => Rule.required() },
              { name: 'link', title: 'Link', type: 'url', validation: Rule => Rule.required() },
            ],
  };
  