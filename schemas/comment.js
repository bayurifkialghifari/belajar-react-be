export default {
  name: 'comment',
  title: 'Comment', // Model
  type: 'document',
  fields: [
    {
      name: 'postedBy',
      title: 'postedBy',
      type: 'postedBy',
    },
    {
      name: 'comment',
      title: 'Comment',
      type: 'string',
    },
  ],
}
