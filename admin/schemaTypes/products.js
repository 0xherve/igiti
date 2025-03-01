// schemas/products.js
export default {
  name: 'products',
  title: 'Highlighted Products',
  type: 'document',
  fields: [
    {
              name: "url",
              title: "Product URL",
              type: "url",
              description: "URL of the product image",
            },
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
              name: 'price',
              title: 'Price',
              type: "string",
              description: 'The price in your currency of choice for the highlighted product'
            },
            {
              name: 'rating',
              title: 'Product Rating',
              type: 'number',
              description: 'Rating of the product in the range of 1 to 5'
            },
            {
              name: 'description',
              title: 'Product Description',
              type: 'text',
            }
      ],
  preview: {
    select: {
      title: "name",
      media: "image"
    }
  }
};
