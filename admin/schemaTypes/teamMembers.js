// schemas/teamMembers.js
export default {
  name: 'team',
  title: 'Team Members',
  type: 'document',
  fields: [
    { name: 'image', title: 'Image URL', type: 'image', options: { hotspot: true }, validation: Rule => Rule.required() },
    { name: 'name', title: 'Name', type: 'string', validation: Rule => Rule.required() },
    { name: 'role', title: 'Role', type: 'string', validation: Rule => Rule.required() },
    { name: 'rank', title: 'Placement number', type: 'number' }
  ],
};
