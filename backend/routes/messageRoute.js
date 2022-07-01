import express from 'express'
import Message from '../models/message.js'
const router = express.Router()

router.post("/", async(req,res) => {
    const newMessage = new Message(req.body)
    try {
       const savedMessage = await newMessage.save();
       res.json(savedMessage); 
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get("/:ConversationId", async(req,res) =>{
    try {
       const Messages = await Message.find({
        ConversationId:req.params.ConversationId,
       });
       res.json(Messages) 
    } catch (error) {
        res.status(500).json(err)
    }
})
export default router