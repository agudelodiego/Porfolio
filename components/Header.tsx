import Styles from '../styles/Header.module.css'



//*----------------------------------------------------------------------------------------------------------
const Header = (props:any) => {
  return (
    <>
      <header className={Styles.header}>  
        <div className={Styles.circle1}></div>
        <div className={Styles.circle2}></div>
        <div className={Styles.circle3}></div>
        <div className={Styles.circle4}></div>
        {props.children}
      </header>
    </>
  )
}
export default Header
//*----------------------------------------------------------------------------------------------------------