export default{
  title: 'Comment',
  name: 'comment',
  type: 'document',
  fields: [
    {
      title: 'Owner',
      name: 'owner',
      type: 'string',
    },
    {
      title: 'Content',
      name: 'content',
      type: 'string',
    },
    {
      title: 'Publication date',
      name: 'pub_date',
      type: 'date'
    }
  ]
}