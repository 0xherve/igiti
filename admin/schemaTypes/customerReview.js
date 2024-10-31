// schemas/customerReviews.js
export default {
  name: 'reviews',
  title: 'Customer Reviews',
  type: 'document',
  fields: [
            { name: 'imgURL', title: 'Image URL', type: 'image', options: { hotspot: true } },
            { name: 'customerName', title: 'Customer Name', type: 'string', validation: Rule => Rule.required() },
            { name: 'rating', title: 'Rating', type: 'number', validation: Rule => Rule.required().min(0).max(5) },
            { name: 'feedback', title: 'Feedback', type: 'text', validation: Rule => Rule.required() },
          ],
};
