import Image from 'next/image'
import Styles from '../styles/Footer.module.css'



//*----------------------------------------------------------------------------------------------------------
const Footer = () => {

  return (
    <div className={Styles.footer}>

      <a href='https://wa.link/ozpoua' rel='noreferrer' target='_blank' title='Escribeme al whatsapp'>
        <Image 
          src='/whatsappLink.png'
          width={200}
          height={200}
          alt='Whatsapp link'
          className={Styles.link}/>
      </a> 

      <a href='https://www.instagram.com/dg.garcia_/' rel='noreferrer' target='_blank'  title='Buscame en instagram'>
        <Image 
          src='/instagramLink.png'
          width={200}
          height={200}
          alt='Instagram link'
          className={Styles.link}/>
      </a> 

      <a href='https://www.facebook.com/diegoalexander.agudelogarcia/' target='_blank' rel='noreferrer' title='Buscame en facebook'>
        <Image 
          src='/facebookLink.png'
          width={200}
          height={200}
          alt='Facebok link'
          className={Styles.link}/>
      </a> 

      <a href='https://www.tiktok.com/@agudelo2231' target='_blank' rel='noreferrer' title='Sigueme en tiktok'>
        <Image 
          src='/tiktok.png'
          width={200}
          height={200}
          alt='Tiktok link'
          className={Styles.link}/>
      </a> 

      <a href='https://github.com/agudelodiego' target='_blank' rel='noreferrer' title='Mira mi trabajo en github'>
        <Image 
          src='/githubLink.png'
          alt='Github link'
          width={200}
          height={200}
          className={Styles.link}/>
      </a>

      <a href='mailto:agudelodiego22@gmail.com' title='Contactame por correo'>
        <Image 
          src='/gmail.png'
          width={200}
          height={200}
          alt='Gmail link'
          className={Styles.link}/>
      </a> 

      <a href='https://www.linkedin.com/in/diego-agudelo-675896225/' target='_blank' rel='noreferrer' title='Mira mi perfil de linkedin'>
        <Image 
          src='/linkedin.png'
          width={200}
          height={200}
          alt='Linkedin link'
          className={Styles.link}/>
      </a> 

    </div>
  )
}
export default Footer
//*----------------------------------------------------------------------------------------------------------