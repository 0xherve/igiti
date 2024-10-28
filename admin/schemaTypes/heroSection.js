const heroSection = {
    name: 'heroSection',            // Internal name for this schema
    title: 'Hero Section',          // Displayed title in Sanity Studio
    type: 'document',               // Specifies this is a document type
    fields: [                       // Fields for the hero section content
      {
        name: 'headline',
        title: 'Headline',
        type: 'string',             // Main headline for the hero section
        validation: Rule => Rule.required().min(5).max(100),
      },
      {
        name: 'subheadline',
        title: 'Subheadline',
        type: 'string',             // Optional subheadline for additional context
        validation: Rule => Rule.max(150),
      },
      {
        name: 'backgroundImage',
        title: 'Background Image',
        type: 'image',              // Image field for the background of the hero section
        options: {
          hotspot: true,            // Enable image cropping
        },
        validation: Rule => Rule.required(),
      },
      {
        name: 'ctaButtons',
        title: 'Call-to-Action Buttons',
        type: 'array',              // Array of call-to-action buttons
        of: [
          {
            type: 'object',         // CTA buttons as objects
            fields: [
              {
                name: 'text',
                title: 'Button Text',
                type: 'string',     // Text displayed on the button
                validation: Rule => Rule.required().max(30),
              },
              {
                name: 'url',
                title: 'Button URL',
                type: 'url',        // URL the button links to
                validation: Rule => Rule.required().uri({
                  scheme: ['http', 'https', 'mailto'],
                }),
              },
            ],
          },
        ],
      },
    ],
  };