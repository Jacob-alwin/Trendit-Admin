import mongoose from 'mongoose'

const messageSchema = mongoose.Schema(
  {ConversationId:{
   type:String
  },
    Sendername: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
      unique: true,
    },
},
{timestamps: true}
)


const Message = mongoose.model('Message', messageSchema)

export default Message