// schemas/customerReviews.js
export default {
  name: 'customerReviews',
  title: 'Customer Reviews',
  type: 'document',
  fields: [
    {
      name: 'reviewItems',
      title: 'Reviews',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'imgURL', title: 'Image URL', type: 'image', options: { hotspot: true }, validation: Rule => Rule.required() },
            { name: 'customerName', title: 'Customer Name', type: 'string', validation: Rule => Rule.required() },
            { name: 'rating', title: 'Rating', type: 'number', validation: Rule => Rule.required().min(0).max(5) },
            { name: 'feedback', title: 'Feedback', type: 'text', validation: Rule => Rule.required() },
          ],
        },
      ],
    },
  ],
};
