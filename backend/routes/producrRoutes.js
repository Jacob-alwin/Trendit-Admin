import express from 'express'
import {getProducts,
    getProductByCategory,
    getProductbyId,
    filter,
    getFavouriteProducts,
    updateToFavourites,
    search,
    getProductByState,
    approved,
    notApproved ,
   } from '../controller/productController.js'
import Product from '../models/product.js'
import axios from 'axios'
const router = express.Router()

//get all products /api/products
//filter products /api/products?max=100&&min=10&&state=Assam
//api/products?max=100&&min=10&&state=Assam&&category=Mobile
//api/products?max=100&&min=10&&state=Assam&&category=Mobile&&asc=1
//api/products?max=100&&min=10&&state=Assam&&category=Mobile&&desc=1
router.route('/').get(getProducts)

-
// find specific product /products/6255a4771e05d3b8be016d24
router.route('/:id').get(getProductbyId)
//get all favourites products /api/products/fav/favourites/
router.route('/fav/favourites').get(getFavouriteProducts)
// add to favourites /products/fav/favourites/6259221ad7cddf13dfb25f4b
router.route('/fav/favourites/:id').put(updateToFavourites)
//find product by category /api/products/category/Mobiles
router.route('/category/:slug').get(getProductByCategory)

router.put('/featured:id', async(req,res) => {
    const id = req.params.id;
    const product = await Product.findById(id)

    const updatedProduct = new Product({
      name: product.name,
      price: product.price,
      subCategory: product.subCategory,
      category: product.category,
      description: product.description,
      image:product.image,
      state:product.state,
      city:product.city,
      timestamps:product.timestamps,
      featured:false
    })
    const createdProduct = await updatedProduct.save()
    res.status(201).json(createdProduct)
})
//Search product by category and title
router.route('/search/:key').get(search)
router.route('/admin/approved').get(approved)
router.route('/admin/pending').get(notApproved)
//router.route('/min/:slug/max/:id').get(filter)
router.get('/product/co/:id',async(req,res)=>{
  console.log("hii222222")
  let data = await Product.find({userid:req.params.id})
  //console.log(data)
res.json(data)
})
// router.get('/count/:id',async(req,res)=>{
//   console.log("hii222222")
//   let data = await Product.find({userid:req.params.id})
//   console.log(data)
// res.json(data)
// })

export default router