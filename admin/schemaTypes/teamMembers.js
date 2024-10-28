// schemas/teamMembers.js
export default {
  name: 'teamMembers',
  title: 'Team Members',
  type: 'document',
  fields: [
    {
      name: 'members',
      title: 'Team Members',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'imgURL', title: 'Image URL', type: 'image', options: { hotspot: true }, validation: Rule => Rule.required() },
            { name: 'name', title: 'Name', type: 'string', validation: Rule => Rule.required() },
            { name: 'role', title: 'Role', type: 'string', validation: Rule => Rule.required() },
          ],
        },
      ],
    },
  ],
};
