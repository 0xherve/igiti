// schemas/puzzles.js
export default {
    name: 'puzzles',
    title: 'Puzzles',
    type: 'document',
    fields: [
      {
        name: 'puzzleItems',
        title: 'Puzzles',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              { name: 'thumbnail', title: 'Thumbnail', type: 'image', options: { hotspot: true }, validation: Rule => Rule.required() },
              { name: 'image', title: 'Puzzle Image', type: 'image', options: { hotspot: true }, validation: Rule => Rule.required() },
            ],
          },
        ],
      },
    ],
  };
  