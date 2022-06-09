import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const agentSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      unique: true,
    },
    date: {
      type: Date,
    },
    time: {
      type: String,
    },
    notes: {
      type: String,
    },
    productid: {
        type: String,
        unique: true,
        default:''
      },
    address: {
      type: String,
      
      unique: true,
    },
    phonenumber: {
      type: Number,
      required: true,
      unique: true,
    },
    isAgent: {
      type: Boolean,
      //required: true,
      default: false,
    },
    assigned: [{
        type: String,
      }],
    pending: {
        type: Number,
        default:0,
      },
      completed: {
        type: Number,
        default:0,
      },
  },
  {
    timestamps: true,
  }
)

agentSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password)
}

agentSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next()
  }

  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
})

const Agent = mongoose.model('Agent', agentSchema)

export default Agent