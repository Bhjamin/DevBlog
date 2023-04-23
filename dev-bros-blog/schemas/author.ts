export default {
  name: 'author',
  type: 'document',
  title: 'Author',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'profilePic',
      type: 'image',
      title: 'Profile Pic',
    },
    {
      name: 'portfolio',
      type: 'url',
      title: 'Portfolio',
    },
    {
      name: 'github',
      type: 'url',
      title: 'Github',
    },
  ],
}
