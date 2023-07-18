export default {
  name: 'blogpost',
  type: 'document',
  title: 'Blog Post',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      title: 'Author',
      name: 'author',
      type: 'reference',
      to: [{type: 'author'}],
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
    },
    {
      name: 'headerImage',
      type: 'image',
      title: 'Header Image',
    },
    {
      name: 'content',
      type: 'array',
      of: [{type: 'image'}, {type: 'block'}],
      title: 'Content',
    },
  ],
}
