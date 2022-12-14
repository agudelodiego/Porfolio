// Component
import Header from './Header'
import Image from 'next/image'
import Myinfo from './Myinfo'
import Chat from './Chat'



// Images
import Like from '../public/fblike.png'
import Nonlike from '../public/nonfblike.png'


// Css modules
import Styles from '../styles/Profile.module.css'
import StyleHeader from '../styles/Header.module.css'


// Custom hooks
import useLike from '../hooks/useLike'


//! Import our interfaces
import {user} from '../interfaces'
interface props { 
  user:user
}


// JSX element 
const Profile = ({user}:props) => {

  // Custom hook wich manage the like. Update the backen when the user press like button
  const {like,likes,pushLike} = useLike(user._id,user.likes)

  return (
    <>
      <Header>

        <h1 className={StyleHeader.title}>
          <span className={StyleHeader.purple2}>System</span>
          <span className={StyleHeader.purple}>.out</span>
          <span className={StyleHeader.purple2}>.println</span>
          <span className={StyleHeader.purple}>(</span> 
          {`'Si puedes imaginarlo, puedes programarlo'`}
          <span className={StyleHeader.purple}>)</span>
        </h1>

      </Header>

      <div className={Styles.containerPhoto}>

        <Image 
          src={user.user_image.asset.url}
          priority={true}
          width={1260}
          height={750}
          className={Styles.profilePhoto}
          alt='Profile photo'
        />

      </div>

      <div className={Styles.containerLikes}>

        <span className={Styles.mg}>{likes}</span>

        <Image 
          src={like?Like:Nonlike}
          alt='Dale like a mi perfil'
          className={like?Styles.like:Styles.nolike}
          onClick={pushLike}
        />

      </div>
      
      <Myinfo />

      <Chat comments={user.comments} _id={user._id}/>

    </>
  )
}
export default Profile