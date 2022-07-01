import axios from 'axios'
import express from 'express'
import asyncHandler from 'express-async-handler'
import Product from '../models/product.js'
import FeaturedAds from '../models/FeaturedAds.js'
const router = express.Router()

//get all products
const getProducts = asyncHandler(async(req,res) => {
   
    let min = ''
    let max = ''
    let state = ''
    let category = ''
    let asc = ''
    let desc = ''
   
    if(req.query.min)
    {
         min =  req.query.min
         
    }
    if(req.query.asc)
    {
         asc =  req.query.asc
        
    }
    if(req.query.desc)
    {
         desc =  req.query.desc
        
    }
    if(req.query.max)
    {
         max =  req.query.max
    
    }
    if(req.query.category)
    {
         category =  req.query.category
        
    }
    if(req.query.state)
    {
         state =  req.query.state
        
    }
    if(asc == 1){
    if(min && max && category && state){
        let data = await Product.find({
            "$and":[
                {price: {$gte: min, $lte: max}},
                {category: {$eq : category}},
                {state: {$eq : state}}

            ]
        }).sort({featured:-1,price:1})
        
        res.json(data)  
    }
    
    else if(min && max && state)
    {
        let data = await Product.find({
            "$and":[
                {price: {$gte: min, $lte: max}},
                {state: {$eq : state}}

            ]
        }).sort({featured:-1,price:1})
       
        res.json(data)
    }
   
    else if(min && max && category){
        let data = await Product.find({
            "$and":[
                {price: {$gte: min, $lte: max}},
                {category: {$eq : category}}

            ]
        }).sort({featured:-1,price:1})
        
        res.json(data)  
    }
    else if(max && min){
        
        
        let data = await Product.find({
    
                price: {$gte: min, $lte: max},
               
        }).sort({featured:-1,price:1})
       
        res.json(data)
    }
    else if(category){
        const product = await Product.find({
            category:{$eq : category}
        }).sort({featured:-1,price:1})
        if(product){
            res.json(product)
        } 
    }
    else{
    const products =await Product.find().sort({featured:-1,price:1})
   
    products.map(async(value) => {
       
        var date1 = new Date(value.expireDate); 
        var date2 = new Date(Date.now());
        var difference = date1 - date2;
        var daysDifference = Math.floor(difference/1000/60/60/24);
        
        if(daysDifference < 1 && value.featured == true){
           
            const createdProduct = await Product.updateOne(
                { "_id": `${value._id}` }, 
                { $set: { "featured": false }})

          //await axios.put(`/api/products/featured?id=${value._id}`)
         

        }
    })
    res.json(products)
    }
    return
   }
   else if(desc == 1){
    if(min && max && category && state){
        let data = await Product.find({
            "$and":[
                {price: {$gte: min, $lte: max}},
                {category: {$eq : category}},
                {state: {$eq : state}}

            ]
        }).sort({featured:-1,price:-1})
        
        res.json(data)  
    }
    
    else if(min && max && state)
    {
        let data = await Product.find({
            "$and":[
                {price: {$gte: min, $lte: max}},
                {state: {$eq : state}}

            ]
        }).sort({featured:-1,price:-1})
       
        res.json(data)
    }
   
    else if(min && max && category){
        let data = await Product.find({
            "$and":[
                {price: {$gte: min, $lte: max}},
                {category: {$eq : category}}

            ]
        }).sort({featured:-1,price:-1})
        
        res.json(data)  
    }
    else if(max && min){
        
        
        let data = await Product.find({
    
                price: {$gte: min, $lte: max},
               
        }).sort({featured:-1,price:-1})
       
        res.json(data)
    }
    else if(category){
        const product = await Product.find({
            category:{$eq : category}
        }).sort({featured:-1,price:-1})
        if(product){
            res.json(product)
        } 
    }
    else{
    const products =await Product.find().sort({featured:-1,price:-1})
   
    products.map(async(value) => {
       
        var date1 = new Date(value.expireDate); 
        var date2 = new Date(Date.now());
        var difference = date1 - date2;
        var daysDifference = Math.floor(difference/1000/60/60/24);
        
        if(daysDifference < 1 && value.featured == true){
          
            const createdProduct = await Product.updateOne(
                { "_id": `${value._id}` }, 
                { $set: { "featured": false }})
         

        }
    })
    res.json(products)
    } 
    return
   } 
   if(min && max && category && state){
    let data = await Product.find({
        "$and":[
            {price: {$gte: min, $lte: max}},
            {category: {$eq : category}},
            {state: {$eq : state}}

        ]
    }).sort({featured:-1})
    
    res.json(data)  
}

else if(min && max && state)
{
    let data = await Product.find({
        "$and":[
            {price: {$gte: min, $lte: max}},
            {state: {$eq : state}}

        ]
    }).sort({featured:-1})
   
    res.json(data)
}

else if(min && max && category){
    let data = await Product.find({
        "$and":[
            {price: {$gte: min, $lte: max}},
            {category: {$eq : category}}

        ]
    }).sort({featured:-1})
    
    res.json(data)  
}
else if(max && min){
    
    
    let data = await Product.find({

            price: {$gte: min, $lte: max},
           
    }).sort({featured:-1})
   
    res.json(data)
}
else if(category){
    const product = await Product.find({
        category:{$eq : category}
    }).sort({featured:-1})
    if(product){
        res.json(product)
    } 
}
else{
const products =await Product.find().sort({featured:-1})

products.map(async(value) => {
   
    var date1 = new Date(value.expireDate); 
    var date2 = new Date(Date.now());
    var difference = date1 - date2;
    var daysDifference = Math.floor(difference/1000/60/60/24);
    
    if(daysDifference < 1 && value.featured == true){
       
        const createdProduct = await Product.updateOne(
            { "_id": `${value._id}` }, 
            { $set: { "featured": false }})

      //await axios.put(`/api/products/featured?id=${value._id}`)
     

    }
})
res.json(products)
return
}  
    
})

const approvedProduct = asyncHandler(async(req,res) => {
    const products =await Product.find({
        "$and":[
            {verified: {$eq: true}},
            {userid: {$eq : req.params.id}},
           

        ]
    })
    res.json(products)
})

const notApprovedProduct = asyncHandler(async(req,res) => {
    const products =await Product.find({
        "$and":[
            {verified: {$eq: false}},
            {userid: {$eq : req.params.id}},
           

        ]
    })
    res.json(products)
})

const payment = asyncHandler(async(req,res) => {
    const products =await FeaturedAds.find({name: req.params.name})
    res.json(products)
})


//get product by id
const getProductbyId = asyncHandler(async(req,res) => {
    const product = await Product.findById(req.params.id)
    if(product){
        res.json(product)
    }
    else{
        res.status(404)
        throw new Error('Product not Found')
    } 
})

//get products category
const getProductByCategory = asyncHandler(async(req,res)=>{
    const product = await Product.find({category:req.params.slug})
    if(product){
        res.json(product)
       
    }
    else{
        res.status(404)
        throw new Error('Product not Found')
    } 
}) 
const getProductByState = asyncHandler(async(req,res)=>{
    const product = await Product.find({state:req.params.slug})
    
    if(product){
        res.json(product)
      
    }
    else{
        res.status(404)
        throw new Error('Product not Found')
    } 
}) 

//filter by min and max price
const filter = asyncHandler(async(req,res)=>{
    var min = ''
    var max = ''
   
    if(req.query.min)
    {
         min =  req.params.slug
         max =  req.params.id
         
    }
    
    
     const product = await Product.find({price: {$gte: min, $lte: max}})

    if(product){
        res.json(product)
    }
    else{
        res.status(404)
        throw new Error('Product not Found')
    }    
})

const getFavouriteProducts = asyncHandler(async(req,res) => {
    const fav = { favourites: {$eq: true} }; 
    const product =await Product.find(fav)
    if(product){
        res.json(product)
    }
    else{
        res.status(404)
        throw new Error('Product not Found')
    } 
})

const updateToFavourites =asyncHandler(async(req,res) => {
    const product = await Product.findById(req.params.id)
    if (product) {
        product.favourites = true
        const updatedToFavourites = await product.save()
        res.json({
            _id: updatedToFavourites._id,
            favourites:updatedToFavourites.favourites,
          })
        } else {
          res.status(404)
          throw new Error('User not found')
        }
      })


      const search = asyncHandler(async(req,res) => {
          let data = await Product.find({
              "$or":[
                  {name:{$regex:req.params.key}},
                  {category:{$regex:req.params.key}},
              ]
          })
          res.json(data)
      })
      const approved = asyncHandler(async(req,res) => {
        const products =await Product.find(
            
                {verified: {$eq: true}},
                
        )
        res.json(products)
    })
    
    const notApproved = asyncHandler(async(req,res) => {
        let New = ''
        let Assigned = ''
        let Pending = ''
        if(req.query.new){
            New = req.query.new
        }
        if(req.query.pending){
            
            Pending = req.query.pending
        }
        if(req.query.assigned){
            Assigned = req.query.assigned
        }
        let products
        if(New != ''){
         
         products =await Product.find({
            
            "$and":[
                {verified: {$eq: false}},
                {agentName: {$eq : ''}},
                {time:{$eq : ''}}
            ]}
                
        )
        }
        if(Assigned != ''){
            products =await Product.find({
               
               "$and":[
                   {verified: {$eq: false}},
                   {agentName: {$ne : ''}},
                   {time:{$eq : ''}}
               ]}
                   
           )
           }
           if(Pending != ''){
           
            products =await Product.find({
               
               "$and":[
                   {verified: {$eq: false}},
                   {agentName: {$ne : ''}},
                   {time:{$ne : ''}}
               ]}
                   
           )
           }   
        res.json(products)
    })
     

export {
    getProducts,
    getProductByCategory,
    getProductbyId,
    filter,
    getFavouriteProducts,
    updateToFavourites,
    search,
    getProductByState,
    approvedProduct,
    notApprovedProduct,
    payment,
    approved,
    notApproved ,
}