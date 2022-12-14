import { useState } from "react";


const useLikes = (id:string,initial:number) =>{
  
  // State to handle likes
  const [like,setLike] = useState(false)
  const [likes,setLikes] = useState(initial)

  // This fuction will send a fetch to the serverles fuction wich update the backend
  const pushLike = async() => {

    if(like){
      setLike(false)
    }

    else{
      setLike(true)
      const servelesResponse = await fetch('/api/handleLikes',{
        method: 'POST',
        body: JSON.stringify({_id:id})
      })
      let response = await servelesResponse.json()
      setLikes(response.likes)
    }

  }
  
  return {like,likes,pushLike}
}
export default useLikes