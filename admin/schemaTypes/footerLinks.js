// schemas/footerLinks.js
export default {
    name: 'footerLinks',
    title: 'Footer Links',
    type: 'document',
    fields: [
              { name: 'title', title: 'Title', type: 'string', validation: Rule => Rule.required() },
              { name: 'links', title: 'Links', type: 'array', of: 
                [{ type: 'object', fields: [{ name: 'name', title: 'Name', type: 'string', validation: Rule => Rule.required() },
                   { name: 'link', title: 'Link', type: 'string' }] }] },
              {name:'type', title: 'Is this the contact/ get in touch section', type: 'boolean',
                description:"Answer True if the section contains links for people to contact you, and false otherwise"},
              {name: 'order', title:"Placement", type: "number", description: "Give the rank of where you want this to be placed" }
            ],
    
  };
  