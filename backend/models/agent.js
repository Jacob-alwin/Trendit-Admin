import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

// const agentSchema = mongoose.Schema(
//   {
//     name: {
//       type: String,
//       required: true,
//       unique: false,
//     },
//     email: {
//       type: String,
//       required: true,
//       unique: false,
//     },
//     password: {
//       type: String,
//       required: true,
//       unique: false,
//     },
//        date: {
//       type: Date,
//       unique: false,
//     },
//     time: {
//       type: String,
//       unique: false,
//     },
//     notes: {
//       type: String,
//       unique: false,
//     },
   
//     address: {
//       type: String,
//       required: true,
//       unique: false,
//     },
//     isAgent: {
//       type: Boolean,
//       //required: true,
//       default: false,
//       unique: false,
//     },
//     phonenumber: {
//       type: String,
//       unique: false,
//     },
//     assigned: [{
//       type: String,
//       unique: false,
//     }],
//   pending: {
//       type: Number,
//       default:0,
//       unique: false,
//     },
//     completed: {
//       type: Number,
//       default:0,
//       unique: false,
//     },
    
    
//   },
//   {
//     timestamps: true,
//   }
// )

const agentSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    
    },
    password: {
      type: String,
      required: true,
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
   
    address: {
      type: String,
      required: true,
    },
    phonenumber: {
      type: Number,
      required: true,
     
    },
    isAgent: {
      type: Boolean,
      required: true,
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