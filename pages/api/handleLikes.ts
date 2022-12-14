import {client} from '../../lib/sanity'
import { NextApiRequest, NextApiResponse } from 'next'


// Doc
client.config({
  //! If we want to perfom updates in the sanity we need being authenticated
  token: process.env.SANITY_STUDIO_TOKEN
})


//*---------------------------------------------------------------------
const handleLikes = async (req:NextApiRequest, res:NextApiResponse) => {

  if(req.method=='POST'){

    // Update the likes of the document with certain id
    const {_id} = JSON.parse(req.body)

    const data:any = await client
      .patch(_id)
      .setIfMissing({likes: 0})
      .inc({likes:1})
      .commit()
      .catch((error)=>{
        console.log(error);
        res.status(500).json({message:error})
      })

    res.status(200).json({likes:data.likes})
  }

}
export default handleLikes
//*---------------------------------------------------------------------