import { SyntheticEvent, useState } from 'react'
import Styles from '../styles/NewComment.module.css'
import Image from 'next/image'


// Doc
interface props {
  _id: string,
  pushComment:Function
}


//*---------------------------------------------------------------------
const NewComment = ({_id,pushComment}:props) => {

  //We need to add some states for manage the inputs
  const [name,setName] = useState('Anonimo') //Store the name that appears in the comment 
  const [message,setMessage] = useState('') //Store the conenten of message  
  const [error,setError] = useState(false) //If a field are empty this will true 
  const [feedback,setFeedback] = useState('') //If a field are empty this will displa a error message
  const [loading,setLoading] = useState(false)  //Display a spinner
  const [success,setSuccess] = useState(false) //Display a sucess message


  // This fuction will fetch the new comment to the serveles fuction wich will update the backend(sanity cms). This function also check if the information are correct (This check if the user is sending a empty field)
  const sendComment = async (event:SyntheticEvent)=>{

    event.preventDefault()

    // Check if the message field is empty
    if(message){

      // Display a spinner
      setError(false)
      setLoading(true)
      setFeedback('Publicando comentario')

      // Send the fetch to the serveles function
      let res = await fetch('/api/createComment',{
        method: 'POST',
        body: JSON.stringify({
          name: name?name:'Anonimo',
          comment: message,
          _id:_id
        })
      })

      // Format the res
      let jsonres = await res.json()

      // Update the feed
      pushComment(jsonres.result)

      // Display a success message
      setLoading(false)
      setSuccess(true)
      setFeedback('Comentario publicado')

      // Reset the form
      setTimeout(()=>{
        setName('Anonimo')
        setMessage('')
        setSuccess(false)
        setFeedback('')
      },4000)

    }

    // If the message is empty will display the error message
    else{
      setSuccess(false)
      setError(true)
      setLoading(false)
      setFeedback('Por favor colocar tu comentario en la seccion designada para ello')
    }

  }

  return (
    <form className={Styles.form} onSubmit={sendComment}>

      <label htmlFor='name' className={Styles.label}>Ingrese su nombre</label>
      <input 
        name='name'
        id='name'
        type='text' 
        className={Styles.name} 
        value={name}
        onChange={(e:any)=>setName(e.target.value)}
      />

      <label htmlFor='content' className={Styles.label}>Agrega tu comentario.</label>
      <textarea 
        name='content' 
        id='content' 
        className={Styles.area} 
        value={message}
        onChange={(e:any)=>setMessage(e.target.value)}
      />


      {
        // We need to add a conditional rendering
        feedback &&
        <div className={error?Styles.error:Styles.success}>
          {feedback}
        </div>
      }

      {
        // Conditional rendering for display loading spinner
        loading &&
        <Image 
          src='/rec.png'
          alt='Loading spinner'
          width={50}
          height={50}
          className={Styles.loading}
        />
      }

      {
        // Conditional rendering for display loading a success image and say to user something like: 'hey the comment was publised'
        success &&
        <Image 
          src='/correct.png'
          alt='Loading spinner'
          width={50}
          height={50}
          className={Styles.publised}
        />
      }
      
      <button className={Styles.button}>Publicar comentario</button>

    </form>
  )
}
export default NewComment
//*---------------------------------------------------------------------