import Image from 'next/image'
import Styles from '../styles/Header.module.css'


//*----------------------------------------------------------------------------------------------------------
const Greeting = () => {
  return (
    <>
      <Image 
        src='/js.png'
        width={800}
        height={800} 
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