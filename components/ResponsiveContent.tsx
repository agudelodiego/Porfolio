import Styles from '../styles/ResponsiveContent.module.css'

export default function ResponsiveContent(props:any) {
  return (
    <div className={Styles.resposive}>
      {props.children}
    </div>
  )
}
