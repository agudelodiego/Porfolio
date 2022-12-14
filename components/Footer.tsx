import Image from 'next/image'
import Styles from '../styles/Footer.module.css'


// Images
import wsp from '../public/whatsappLink.png'
import instagram from '../public/InstagramLink.png'
import facebook from '../public/facebookLink.png'
import tiktok from '../public/Tiktok.png'
import github from '../public/githubLink.png'
import gmail from '../public/Gmail.png'
import linkedin from '../public/linkedin.png'


//*----------------------------------------------------------------------------------------------------------
const Footer = () => {

  return (
    <div className={Styles.footer}>

      <a href='https://wa.link/ozpoua' rel='noreferrer' target='_blank' title='Escribeme al whatsapp'>
        <Image 
          src={wsp}
          alt='Whats app link'
          className={Styles.link}/>
      </a> 

      <a href='https://www.instagram.com/dg.garcia_/' rel='noreferrer' target='_blank'  title='Buscame en instagram'>
        <Image 
          src={instagram}
          alt='Whats app link'
          className={Styles.link}/>
      </a> 

      <a href='https://www.facebook.com/diegoalexander.agudelogarcia/' target='_blank' rel='noreferrer' title='Buscame en facebook'>
        <Image 
          src={facebook}
          alt='Whats app link'
          className={Styles.link}/>
      </a> 

      <a href='https://www.tiktok.com/@agudelo2231' target='_blank' rel='noreferrer' title='Sigueme en tiktok'>
        <Image 
          src={tiktok}
          alt='Whats app link'
          className={Styles.link}/>
      </a> 

      <a href='https://github.com/agudelodiego' target='_blank' rel='noreferrer' title='Mira mi trabajo en github'>
        <Image 
          src={github}
          alt='Whats app link'
          className={Styles.link}/>
      </a>

      <a href='mailto:agudelodiego22@gmail.com' title='Contactame por correo'>
        <Image 
          src={gmail}
          alt='Whats app link'
          className={Styles.link}/>
      </a> 

      <a href='https://www.linkedin.com/in/diego-agudelo-675896225/' target='_blank' rel='noreferrer' title='Mira mi perfil de linkedin'>
        <Image 
          src={linkedin}
          alt='Whats app link'
          className={Styles.link}/>
      </a> 

    </div>
  )
}
export default Footer
//*----------------------------------------------------------------------------------------------------------