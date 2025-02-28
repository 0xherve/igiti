export default {
    name: 'sponsors',
    title: 'Our Sponsors',
    type: 'document',
    fields: [
              {
                name: "name",
                title: "Name",
                type: "string",
                description: "Name of the product",
                validation: Rule => Rule.required() 
              },
              {
                name: "image",
                title: "Image",
                type: "image",
                description: "Image of the intended product highlight",
                validation: Rule => Rule.required() 
              },
              {
                name: "link",
                title: "Website Link",
                type: "url",
                description: "Link to sponsor's website",
                validation: Rule => Rule.required()
              }
        ],
    preview: {
      select: {
        title: "name",
        media: "image"
      }
    }
  };
  