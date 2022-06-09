import mongoose from 'mongoose'

const featuredAdsSchema = mongoose.Schema(
  {
    // user: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   required: true,
    //   ref: 'User',
    // },
    // featuredItem: [
    //   {
    //     product: {
    //       type: mongoose.Schema.Types.ObjectId,
    //       required: true,
    //       ref: 'Product',
    //       default:'',
    //     },
    //   },
    // ],

      name: { type: String },
      paymentid: { type: String },
      paymentstatus: { type: String },
      paymentupdate_time: { type: String },
    
    totalPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    isPaid: {
      type: Boolean,
      default: true,
    },
    paidAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
)

const FeaturedAds = mongoose.model('FeaturedAds', featuredAdsSchema)

export default FeaturedAds