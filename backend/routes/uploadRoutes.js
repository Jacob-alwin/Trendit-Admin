import path from 'path'
import express from 'express'
import multer from 'multer'
import shortid from 'shortid'
import crypto from 'crypto'
import cron from 'node-cron'

const router = express.Router()

import asyncHandler from 'express-async-handler'
import Product from '../models/product.js'
import Razorpay from 'Razorpay'
import FeaturedAds from '../models/FeaturedAds.js'


var amt;

const razorpay = new Razorpay({
  key_id: 'rzp_test_T3QAMrksjiMwIa',
  key_secret: '954304tisDkclor8Z5w5jWsI',
});

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'upload')
  },
  filename(req, file, cb) {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    )
  },
})

function checkFileType(file, cb) {
  const filetypes = /jpg|jpeg|png/
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase())
  const mimetype = filetypes.test(file.mimetype)

  if (extname && mimetype) {
    return cb(null, true)
  } else {
    cb('Images only!')
  }
}

const upload = multer({
  storage,
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb)
  },
})
let response1;
router.post('/razorpay',async (req,res) => {
  var amt = req.query.amount;
  
  const payment_capture = 1;
  const amount = amt * 100;
  const currency = 'INR';

  const options = {
    amount: amount , 
    currency ,
     receipt:shortid.generate(), 
    payment_capture}
  
response1 = await razorpay.orders.create(options)
 console.log(response1)
 res.json({
   id:response1.id,
   currency:'INR',
   amount:response1.amount
 })
})

let featuredAds = '';
let date1;
router.post('/verification',async (req,res) => {
  const SECRET = 'trentit'

  const shasum = crypto.createHmac('sha256',SECRET)
  shasum.update(JSON.stringify(req.body))
  const digest = shasum.digest('hex')
  if(digest === req.headers['x-razorpay-signature']){
    console.log('request is legit')
    //save it to database
    featuredAds = new FeaturedAds({
        paymentid: response1.id,
        paymentstatus:response1.status,
        paymentupdate_time:req.body.created_at,
        totalPrice:response1.amount,
        paidAt:Date.now(), 
    })  
    if(response1.amount === 24900){
      date1=Date.now() + 7*24*60*60*1000
    }
    else if(response1.amount === 49900){
      date1=Date.now() + 15*24*60*60*1000
    }
    else{
      date1=Date.now() + 30*24*60*60*1000
    }

  }else{
    
    res.status(502)
    return
  }
  res.json({status:'ok'})
})
//upload products
router.post('/', upload.single('image'),async (req, res) => {
  let product = new Product({
    name: req.body.name,
    price: req.body.price,
    subCategory: req.body.subCategory,
    category: req.body.category,
    description: req.body.description,
    advertisementFor:req.body.for,
    image:req.file.path,
    state:req.body.state,
    city:req.body.city,
    timestamps:Date.now(),
  })
  if(featuredAds != ''){
    featuredAds.name= req.body.name
    const featured = await featuredAds.save()
    console.log(featured)
    //res.status(201).json(featured)
    product.featured = true;
    console.log(date1)
    product.expireDate =date1
  }

  const createdProduct = await product.save()
  res.status(201).json(createdProduct)
},)




export default router