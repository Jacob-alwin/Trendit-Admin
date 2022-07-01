import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'


const userSchema = mongoose.Schema(
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
    favourites: [{
      type: String,
    }],
    isAdmin: {
      type: Boolean,
      //required: true,
      default: false,
    },
    isAgent: {
      type: Boolean,
      //required: true,
      default: false,
    },
    phone: {
      type: String,
    },
    address: {
      type: String,
      
    },
    city: {
      type: String,
     
    },
    state: {
      type: String,
      
    },
    pincode: {
      type: String,
     
    },
    image: {
      type:String
    },
    Reportedby:[{
      type:String,
      default:null
    }],
    ReprotedFor:[{
      type:String,
      default:null
    }]
   
  },
  {
    timestamps: true,
  }
)

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password)
}

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next()
  }

  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
})

const User = mongoose.model('User', userSchema)

export default User