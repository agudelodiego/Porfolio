import Projects from '../../components/Projects'


// Import our interfaces
import {project} from '../../interfaces'


// We need to pull our utilities for sanity cms
import { client } from '../../lib/sanity'


// Doc
interface props{
  data: project[]
}


//*---------------------------------------------------------------------
const PageProjects = ({data}:props) => {
  return <Projects projects={data} />
}
export default PageProjects
//*---------------------------------------------------------------------



// Query to fetch data
export const query = `*[_type=="project"]{
  deploy_link,
  gh_link,
  likes,
  project_image{
    asset->{
      url
    }
  },
  _id,
  project_name
}`



// Server side rendering
export const getServerSideProps = async() => {
  let data:project[] = await client.fetch(query);

  return{
    props:{data}
  }
}