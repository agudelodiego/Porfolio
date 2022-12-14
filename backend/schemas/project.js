export default {
  title: 'Project',
  name: 'project',
  type: 'document',
  fields: [
    {
      title: 'Project name',
      name: 'project_name',
      type: 'string'
    },
    {
      title: 'Likes',
      name: 'likes',
      type: 'number'
    },
    {
      title: 'Git hub link',
      name: 'gh_link',
      type: 'url'
    },
    {
      title: 'Deploy link',
      name: 'deploy_link',
      type: 'url'
    },
    {
      title: 'Project image',
      name: 'project_image',
      type: 'image',
      options: {
        hotspot: true
      },
    }
  ],
  initialValue:{
    likes: 0
  }
}