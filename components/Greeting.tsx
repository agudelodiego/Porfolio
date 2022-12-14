import Image from 'next/image'
import js from '../public/js.png'
import Styles from '../styles/Header.module.css'


//*----------------------------------------------------------------------------------------------------------
const Greeting = () => {
  return (
    <>
      <Image 
        src={js} 
        alt='Header image'
        className={Styles.headerImg}
        priority={true}/>
      <h1 className={Styles.title}>
        <span className={Styles.purple}>console</span><span className={Styles.purple2}>.log</span><span className={Styles.purple}>(</span> {`'Hola Mundo y bienvenido. Soy Diego, desarrollador full stack'`}<span className={Styles.purple}>)</span>;
      </h1>
    </>
  )
}
export default Greeting
//*----------------------------------------------------------------------------------------------------------