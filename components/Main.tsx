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
            Esta aventura dio inicio en el año 2018, me encontraba cursando el segundo semestre de la carrera, y una nueva materia llegaba: Fundamentos de programación, misma que seria el punto de inflexión, el momento donde supe a que me queria dedicar el resto de mi vida. Conocí las bases de la programación en C++, apartir de esto comencé una ardua investigación sobre el desarrollo de software, misma que a dia de hoy no ha parado.
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