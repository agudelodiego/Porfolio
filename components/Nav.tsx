import Link from 'next/link'
import Image from 'next/image'
import {useState} from 'react'
import Styles from '../styles/Nav.module.css'


// Imports our images
import User from '../public/User.png'
import More from '../public/More.png'
import Close from '../public/Close.png'
import Home from '../public/Home.png'
import Build from '../public/Build.png'



//*----------------------------------------------------------------------------------------------------------
const Nav = () => {

  const [open,setOpen] = useState(false)
  const [active,setActive] = useState('')

  const navigate = (route:string) => {
    setActive(route)
    console.log(route)
  }


  const toggleMenu = ()=>{
    setOpen(!open)
  }

  return (
    <nav className={Styles.nav}>

      <div className={Styles.mobile}>

        <button className={Styles.toggle} onClick={toggleMenu}>
          <Image 
            src={open?Close:More} 
            alt='Menu botton'
            className={Styles.img}/>
        </button>

        <ul title='Acerca' className={`${open?Styles.show:Styles.hidde} ${Styles.ul}`}>

          <li title='Proyectos' className={`${Styles.link} ${active=='sells'?Styles.active:''}`}>
            <Link href='/projects' onClick={()=>navigate('sells')} className={Styles.content}>              
              <Image 
                src={Build}
                alt='Go to user account'
                className={Styles.img}
              />              
            </Link>
          </li>

          <li className={`${Styles.link} ${active=='profile'?Styles.active:''}`}>
            <Link href='/about' onClick={()=>navigate('profile')} className={Styles.content}>
              <Image 
                src={User}
                alt='More about me'
                className={Styles.img} 
              />
            </Link>
          </li>

          <li title='Home' className={`${Styles.link} ${active=='root'?Styles.active:''}`}>
            <Link href='/' onClick={()=>navigate('root')} className={Styles.content}>
              <Image 
                src={Home}
                alt='Go to user account'
                className={Styles.img}
              />            
            </Link>
          </li>

        </ul>

      </div>

    </nav>
  )
}
export default Nav
//*----------------------------------------------------------------------------------------------------------
