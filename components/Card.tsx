import Image from 'next/image'
import Styles from '../styles/Card.module.css'
import useLikes from '../hooks/useLike'


// Images
import Like from '../public/fblike.png'
import Nolike from '../public/nonfblike.png'
import github from '../public/githubLink.png'
import see from '../public/vision.png'


// Import our interfaces
import {project} from '../interfaces'
interface props{
  project:project
}

//*----------------------------------------------------------------------------------------------------------
const Card = ({project}:props) => {

  // This hook will handle the likes and to the serverles function to update the document with certain id
  const {like,likes,pushLike} = useLikes(project._id,project.likes)


  return (
    <article className={Styles.card}>

      <Image 
        src={project.project_image.asset.url}
        alt='Product image'
        width={1260}
        height={750}
        className={Styles.img}
      />

      <div className={Styles.cardBody}>

        <h3 className={Styles.cardTitle}>{project.project_name}</h3>
        <span className={Styles.cardPrice}>{likes} likes</span>

        <div>

          <a href={project.gh_link} rel="noreferrer" target="_blank">
            <Image 
              src={github}
              alt='Git hub repository'
              className={Styles.github}
            />
          </a>

          {
            project.deploy_link && 

            <a href={project.deploy_link} rel="noreferrer" target="_blank">
            <Image 
              src={see}
              alt='Git hub repository'
              className={Styles.github}
            />
            </a>
          }
          
        </div>
        <span className={Styles.like} onClick={pushLike}>
          <Image 
            src={like?Like:Nolike}
            alt='Like icon'
            className={like?Styles.like:Styles.Nonlike}
          />
        </span>

      </div>

    </article>
  )
}
export default Card
//*----------------------------------------------------------------------------------------------------------