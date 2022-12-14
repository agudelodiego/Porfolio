export interface comment {
  content: string,
  pub_date: string,
  _id: string,
  owner: string
};

export interface project {
  deploy_link: string,
  gh_link: string,
  likes: number,
  project_image: {asset:{url:string}},
  _id:string,
  project_name:string,
};


export interface user {
  comments: comment[],
  user_image: {asset:{url:string}},
  likes: number,
  _id:string
}
