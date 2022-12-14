// Components
import Header from './Header'
import Image from 'next/image'
import Gallery from './Gallery'
import Footer from './Footer'
import ResponsiveContent from './ResponsiveContent'
import Card from './Card'


// Css
import Text from '../styles/Header.module.css'
import Photo from '../styles/Profile.module.css'
import Styles from '../styles/Myinfo.module.css'


// Images
import Brand from '../public/Favicon.ico'


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
          src={Brand}
          alt='Page icon'
          className={Photo.profilePhoto}/>
      </div>

      <div className={Styles.container}>
        <h3>
          Con el pasar del tiempo y con el fin de mejorar mis habilidades y expandir mis conocimientos en distiintos frameworks y librerias, he desarrollado varios proyectos, algunos de los cuales pueden ser vistos a continuación. Puedes revisar a profunfidad el codigo fuente al ir a mis repositorios de github o pudes ver el producto final llendo al dominio donde se hizo el deploy(disponible solo para algunos proyectos).
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
