// schemas/puzzles.js
export default {
  name: 'puzzles',
  title: 'Hero Display Puzzles',
  type: 'document',
  fields: [
            {
              name: 'imgName', 
              title: 'Puzzle Name', 
              type: 'string', 
              validation: Rule => Rule.required() 
            },
            { 
              name: 'thumbnail', 
              title: 'Puzzle Image', 
              type: 'image', 
              options: { hotspot: true }, 
              validation: Rule => Rule.required() 
            },
  ],
};
