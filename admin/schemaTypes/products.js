// schemas/products.js
export default {
  name: 'products',
  title: 'Products',
  type: 'document',
  fields: [
    {
      name: 'productItems',
      title: 'Products',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'imgURL', title: 'Image URL', type: 'image', options: { hotspot: true }, validation: Rule => Rule.required() },
            { name: 'name', title: 'Product Name', type: 'string', validation: Rule => Rule.required() },
            { name: 'price', title: 'Price', type: 'string', validation: Rule => Rule.required() },
          ],
        },
      ],
    },
  ],
};
