import Styles from '../styles/Chat.module.css'
import Comment from './Comment'
import NewComment from './NewComment'
import { useState } from 'react'


//! Interfaces
import {comment} from '../interfaces'


// Doc
interface props { 
  comments: comment[],
  _id: string
}


//*---------------------------------------------------------------------
const Chat = ({comments,_id}:props) => {

  // This state store all the comments in my portfolio
  const [feed,setFeed] = useState(comments);


  // This function update the feed(array of comments)
  const pushComment = (newcomment:comment)=>{
    let swap = feed
    swap.push(newcomment)
    setFeed([...swap])
    console.log('Ejecucion de push')
    console.log(feed)
  }


  return (
    <section className={Styles.chatContainer}>

      <h2 className={Styles.cgreen}>Hazme un comentario</h2>

      {
        feed &&
        <div className={Styles.chat}>
          {feed.map((comment:comment)=>{return <Comment comment={comment} key={comment._id}/>})}
        </div>
      }
      

      <NewComment _id={_id} pushComment={pushComment}/>

    </section>
  )
}
export default Chat
//*---------------------------------------------------------------------