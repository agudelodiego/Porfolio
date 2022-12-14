export default {
  title: 'User',
  name: 'user',
  type: 'document',
  fields: [
    {
      title: 'User name',
      name: 'user_name',
      type: 'string'
    },
    {
      title: 'User image',
      name: 'user_image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      title: 'Comments',
      name: 'comments',
      type: 'array',
      of: [
        {
          type: 'reference',
          to:[{type: 'comment'}]
        }
      ]
    },
    {
      title: 'Likes',
      name: 'likes',
      type: 'number'
    },
    {
      title: 'Projects',
      name: 'projects',
      type: 'array',
      of: [
        {
          type: 'reference',
          to:[{type: 'project'}]
        }
      ]
    }
  ],
  initialValue:{
    likes: 0
  }
}