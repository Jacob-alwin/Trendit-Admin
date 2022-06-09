import mongoose from 'mongoose'

const conversationSchema = mongoose.Schema(
  {
    members: {
      type: Array,
      required: true,
    },

},
{timestamps: true}
)


const Conversation = mongoose.model('Conversation', conversationSchema)

export default Conversation