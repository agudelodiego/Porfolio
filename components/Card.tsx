import Image from 'next/image'
import Styles from '../styles/Card.module.css'
import useLikes from '../hooks/useLike'



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

          <a href={project.gh_link} rel='noreferrer' target='_blank'>
            <Image 
              src='/githubLink.png'
              width={200}
              height={200}
              alt='Git hub repository'
              className={Styles.link}
            />
          </a>

          {
            project.deploy_link && 

            <a href={project.deploy_link} rel='noreferrer' target='_blank'>
            <Image 
              src='/vision.png'
              width={200}
              height={200}
              alt='See project deployed'
              className={Styles.link}
            />
            </a>
          }
          
        </div>
        <span className={Styles.like} onClick={pushLike}>
          <Image 
            src={like?'/fblike.png':'/nonfblike.png'}
            width={200}
            height={200}
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