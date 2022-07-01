import mongoose from "mongoose";
const comment = mongoose.Schema({
  name:{type:String},
  comment:{type:String},
},
{
  timestamps: true,
})
const productSchema = mongoose.Schema({
    // user: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     required: true,
    //     ref: 'User',
    //   },

      name: {
        type: String,
      },
      state: {
        type: String,
      },
      image: [{
        type: String,
      }],
      city: {
        type: String,
        required: true,
      },
      date: {
        type: Date,
        default:''
      },
      time: {
        type: String,
        default:''
      },
      notes: {
        type: String,
        default:''
      },
      address: {
        type: String,
        default:''
        
        
      },
      category: {
        type: String,
        required: true,
      },
      subCategory: {
        type: String,
      },
      description: {
        type: String,
        required: true,
      },
      featured: {
        type: Boolean,
        default: false,

      },
      price: {
        type: Number,
        required: true,
        default: 0,
      },
      favourites: {
        type: Boolean,
        default: false,
 
      },
      verified: {
        type: Boolean,
        default: false,
  
      },
      agentName: {
        type: String,
        default: '',   
      },
      expireDate: {
        type: Date,
        default: Date.now()
      },
      userid: {
        type:String,
      },
      Comment:[comment]

    },
    {
      timestamps: true,
    }
  )
  productSchema.index({createdAt: 1},{expireAfterSeconds: 60*60*24*30});
  const Product = mongoose.model('product', productSchema)
  
  export default Product
