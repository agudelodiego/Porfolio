import { NextApiRequest, NextApiResponse } from 'next'
import {client} from '../../lib/sanity'

// Doc
client.config({
  //! If we want to perfom updates in the sanity we need being authenticated
  token: process.env.SANITY_STUDIO_TOKEN
})



//*---------------------------------------------------------------------
const createComment = async(req:NextApiRequest,res:NextApiResponse) => {
  try{

    // First we need get the name and the comment
    const {name, comment, _id} = JSON.parse(req.body)

    // Get the current date, and then format the date object
    let date: Date | string | string[] = new Date()
    date = date.toISOString()
    date = date.split('T')
    date = date[0]
    console.log(comment.length)

    // Then create the document
    const newDoc = {
      _type:'comment',
      content: comment,
      owner: name,
      pub_date: date
    }

    // Now let's create the document in the backend
    let newComment = await client.create(newDoc)

    // Then we need to reference the comment with the user
    let commentReferenced = {
      _type:'reference',
      _ref: newComment._id
    }
    let updateUser = await client.patch(_id)
    .append('comments',[commentReferenced])
    .commit({autoGenerateArrayKeys: true})
    console.log(updateUser)
    console.log(newComment)
    res.status(200).json({result:{_id: newComment._id,owner: newComment.owner,pub_date: newComment.pub_date,content: newComment.content}})

  }
  catch(error){
    res.status(500).json({result:'error',more: error})
  }
  
}
export default createComment
//*---------------------------------------------------------------------