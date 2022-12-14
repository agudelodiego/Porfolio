import Styles from '../styles/Comment.module.css'
import {months} from '../dates'


//! Interfaces
import {comment} from '../interfaces'


// Doc
interface props { 
  comment: comment
}


//*---------------------------------------------------------------------
const Comment = ({comment}:props) => {

  // This code just will format the date in something like this: May 12 2022
  const pubDateArray = comment.pub_date.split('-')
  pubDateArray[1] = months[Number(pubDateArray[1])-1]
  let [year,month,day] = pubDateArray

  return (
    <article className={Styles.containerComment}>

      <div className={Styles.header}>
        <div className={Styles.owner}>{comment.owner}</div>
        <div className={Styles.date}>{`${month} ${day} ${year}`}</div>
      </div>

      <div className={Styles.content}>
        {comment.content}
      </div>
      
    </article>
  )
}
export default Comment
//*---------------------------------------------------------------------