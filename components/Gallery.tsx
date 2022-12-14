import Styles from '../styles/Gallery.module.css'



//*----------------------------------------------------------------------------------------------------------
const Gallery = (props:any) => {
  return (
    <main className={Styles.gallery}>
      {props.children}
    </main>
  )
}
export default Gallery
//*----------------------------------------------------------------------------------------------------------
