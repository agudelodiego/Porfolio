import Profile from '../../components/Profile'
import { client } from '../../lib/sanity' 
import {user} from '../../interfaces'


//* Our interface
interface props{
  data: user
}


//* Main function
//*------------------------------------------------------------------------------------------------
const About = ({data}:props) => {
  return <Profile user={data} />
}
export default About
//*------------------------------------------------------------------------------------------------


// Query to perform the fech to our api
export const query = `*[_type=="user" && user_name=="Diego Agudelo"][0]
{
  likes,
  _id,
  comments[]->{
    content,
    owner,
    pub_date,
    _id
  },
  user_image{
    asset->{url}
  }
}`

// Server side rendering
export const getServerSideProps = async() => {

  // I'm using next-sanity client
  const data:user = await client.fetch(query)

  return {
    props: {
      data
    },
  };
}