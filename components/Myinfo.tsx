import Styles from '../styles/Myinfo.module.css'
import Image from 'next/image'



//*----------------------------------------------------------------------------------------------------------
const Myinfo = () => {
  return (
    <div className={Styles.container} >

      <h1 className={Styles.title}>Información de Diego</h1>

      <article className={Styles.article}>
        <Image 
          src='/diploma.png'
          width={200}
          height={200}
          className={Styles.icons}
          alt='Senior icon'/>
        <h3>Estudió en un un bootcamp enfocado en fullstack ofrecido por <a className={Styles.link} rel='noreferrer' target='_blank' href='https://peaku.co/'>peaku.com</a>, donde adicionalmente adquirió experiencia practica.</h3>
      </article>

      <article className={Styles.article}>
        <Image 
          src='/diploma.png'
          width={200}
          height={200}
          className={Styles.icons}
          alt='Senior icon'/>
        <h3>Estudió en el Instituto Tecnológico Metropolitano (ITM) tecnología en electrónica.</h3>
      </article>

      <article className={Styles.article}>
        <Image 
          src='/Platzi.png'
          width={200}
          height={200}
          className={Styles.icons}
          alt='Senior icon'/>
        <h3>Es un fiel estudiante de plataformas de educación online como <a href='https://platzi.com/' rel='noreferrer' target='_blank' className={Styles.link}>platzi.com</a>, acumulando varios certificados.</h3>
      </article>

      <article className={Styles.article}>
        <Image 
          src='/Location.png'
          width={200}
          height={200}
          className={Styles.icons}
          alt='Senior icon'/>
        <h3>Vive en Marinilla, Antioquia, Colombia.</h3>
      </article>

      <article className={Styles.article}>
        <Image 
          src='/Exercise.png'
          width={200}
          height={200}
          className={Styles.icons}
          alt='Senior icon'/>
        <h3>Le gusta ejercitarse.</h3>
      </article>
      
    </div>
  )
}
export default Myinfo
//*----------------------------------------------------------------------------------------------------------