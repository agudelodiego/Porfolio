import Header from './Header'
import ResponsiveContent from './ResponsiveContent'
import Image from 'next/image'
import Styles from '../styles/Main.module.css'
import Color from '../styles/Color.module.css'
import Greeting from './Greeting'




//*----------------------------------------------------------------------------------------------------------
const Main = () => {
  return (
    <>
      <Header>
        <Greeting />
      </Header>
      <div className={Color.gray}>
        <ResponsiveContent>
          <h2 className={Styles.text}>
            Esta aventura comenzó en 2018, cuando cursaba el segundo semestre de mi carrera. Una nueva materia, Fundamentos de Programación, cambió mi rumbo y supe que esto era lo que quería hacer el resto de mi vida. Aprendí las bases de la programación en C++ y comencé una intensa investigación sobre el desarrollo de software, que aún continúa hasta el día de hoy. Estoy comprometido a seguir aprendiendo y creciendo en esta fascinante área.
          </h2>
          <Image 
            src='/global.png'
            width={800}
            height={800}
            alt='Programing'
            className={Styles.electronic}/>
        </ResponsiveContent>
      </div>
    </>
  )
}
export default Main
//*----------------------------------------------------------------------------------------------------------