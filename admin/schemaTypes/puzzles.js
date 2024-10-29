// schemas/puzzles.js
export default {
    name: 'puzzles',
    title: 'Puzzles',
    type: 'document',
    fields: [
      {
        name: 'puzzleItems',
        title: 'Puzzle',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              { name: 'imgName', title: 'Puzzle Name', type: 'string', options: { hotspot: true }, validation: Rule => Rule.required() },
              { name: 'image', title: 'Puzzle Image', type: 'image', options: { hotspot: true }, validation: Rule => Rule.required() },
            ],
          },
        ],
      },
    ],
  };
  