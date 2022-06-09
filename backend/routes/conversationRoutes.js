import Conversation from '../models/conversation.js'



import express from 'express'
const router = express.Router()
router.post("/",async (req,res)=> {
    const newConversation = new Conversation({
        members:[req.body.senderId,req.body.receiverId],
    });
    try{
      const savedConversation = await newConversation.save();
      res.status(200).json(savedConversation);
    }catch(err){
        res.status(500).json(err)
    }
})

router.get("/:id" , async (req,res) => {
  try{
   const conversation = await Conversation.find({
       members:{$in:[req.params.id]},
   });
   res.json(conversation);
  }catch(err){
    res.status(500).json(err)
  }
})



export default router