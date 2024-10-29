// schemas/products.js
export default {
  name: 'products',
  title: 'Highlighted Products',
  type: 'document',
  fields: [
    {
      name: 'productItems',
      title: 'Product',
      type: 'array',
      of: [
        {
          type: "object",
          fields: [
            {
              name: "url",
              title: "Image URL",
              type: "url",
              description: "URL of the product image"
            },
            {
              name: "name",
              title: "Name",
              type: "string",
              description: "Name of the product"
            },
            {
              name: "image",
              title: "Image",
              type: "image",
              description: "Image of the intended product highlight"
            }
          ]
        }
      ],
    },
  ],
  preview: {
    select: {
      title: "title" // Only the title field will display in the list view
    }
  }
};
