// Components
import Header from './Header'
import Image from 'next/image'
import Gallery from './Gallery'
import Card from './Card'


// Css
import Text from '../styles/Header.module.css'
import Photo from '../styles/Profile.module.css'
import Styles from '../styles/Myinfo.module.css'


// Import our interfaces
import {project} from '../interfaces'


// Doc
interface props {
  projects: project[]
}



//*----------------------------------------------------------------------------------------------------------
const Projects = ({projects}:props) => {
  return (
    <>

      <Header>
        <h1 className={Text.title}>
          <span className={Text.purple}>print</span>
          <span className={Text.purple2}>(</span>
          `El limite esta en tu imaginación`
          <span className={Text.purple2}>)</span>
        </h1>
      </Header>

      <div className={Photo.containerPhoto}>
        <Image 
          src='/favicon.ico'
          width={700}
          height={700}
          alt='Page icon'
          className={Photo.profilePhoto}/>
      </div>

      <div className={Styles.container}>
        <h3>
          A medida que he ido adquiriendo más experiencia en la programación, he desarrollado una serie de proyectos que me han permitido mejorar mis habilidades y ampliar mis conocimientos en diferentes frameworks y bibliotecas. Algunos de estos proyectos se pueden ver a continuación. Si deseas profundizar en el código fuente, puedes visitar mis repositorios de GitHub, donde podrás encontrar todos los detalles del desarrollo de cada proyecto. Para ver el resultado final de algunos de estos proyectos, puedes visitar el dominio donde se hizo el despliegue (disponible solo para algunos proyectos).
        </h3>
      </div>

      <Gallery>
        {projects.map((project:project)=>{return <Card key={project._id} project={project}/>})}
      </Gallery>

    </>
  )
}
export default Projects
//*----------------------------------------------------------------------------------------------------------
