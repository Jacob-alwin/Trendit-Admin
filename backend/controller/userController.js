import asyncHandler from 'express-async-handler'
import generateToken from '../utils/generateToken.js'
import User from '../models/user.js'
import Product from '../models/product.js'
import Agent from '../models/agent.js'

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body
 
  const user = await User.findOne({ email })

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    })
  } else {
    res.status(401)
    throw new Error('Invalid email or password')
  }
})

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body

  const userExists = await User.findOne({ email })

  if (userExists) {
    res.status(400)
    throw new Error('User already exists')
  }

  const user = await User.create({
    name,
    email,
    password,
  })

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
})

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id)

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private
const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id)

  if (user) {
    user.name = req.body.name || user.name
    user.email = req.body.email || user.email
    if (req.body.password) {
      user.password = req.body.password
    }

    const updatedUser = await user.save()

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
      token: generateToken(updatedUser._id),
    })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})

// @desc    Get all customers
// @route   GET /api/users
// @access  Private/Admin
const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({
    $and:
    [
      {isAgent: {$eq: 'false'}}
      ,{isAdmin: {$eq:'false'}}
    ]
  })
  //[{isAgent: {$eq: 'false'},  {isAdmin: {$eq:'false'}}}
  res.json(users)
})

// @desc    Get all agents
// @route   GET /api/users/agent
// @access  Private/Admin
const getAgents = asyncHandler(async (req, res) => {
  const users = await User.find({
      isAgent: {$eq: 'true'}
  })
  //[{isAgent: {$eq: 'false'},  {isAdmin: {$eq:'false'}}}
  res.json(users)
})

// @desc    Delete user
// @route   DELETE /api/users/:id
// @access  Private/Admin
const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id)

  if (user) {
    await user.remove()
    res.json({ message: 'User removed' })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})

const deleteProduct = asyncHandler(async (req, res) => {
  const user = await Product.findById(req.params.id)

  if (user) {
    await user.remove()
    res.json({ message: 'Ad removed' })
  } else {
    res.status(404)
    throw new Error('Ad not found')
  }
})

const deleteAgent = asyncHandler(async (req, res) => {
  const user = await Agent.findById(req.params.id)

  if (user) {
    await user.remove()
    res.json({ message: 'Agent removed' })
  } else {
    res.status(404)
    throw new Error('Agent not found')
  }
})


const UnAssignAgent = asyncHandler(async (req, res) => {
  const product = await Product.updateOne(
    { "_id": `${req.params.id}` }, 
    { $set: { 
               "agentName": '',
               }})

  if (user) {
    await user.remove()
    res.json({ message: 'Agent Unassign' })
  } else {
    res.status(404)
    throw new Error('Agent not found')
  }
})

// @desc    Get user by ID
// @route   GET /api/users/:id
// @access  Private/Admin
const getUserById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id).select('-password')

  if (user) {
    res.json(user)
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})

const  getAgent = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id).select('-password')

  if (user) {
    res.json(user)
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})

// @desc    Update user
// @route   PUT /api/users/:id
// @access  Private/Admin
const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id)

  if (user) {
    user.name = req.body.name || user.name
    user.email = req.body.email || user.email
    user.isAdmin = req.body.isAdmin

    const updatedUser = await user.save()

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
    })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})
// @desc    search customer
// @route   PUT /api/users/searchCustomer/:id
// @access  Private/Admin
const searchCustomer = asyncHandler(async(req,res) => {
  let data = await Product.find({
      "$and":[
          {name:{$regex:req.params.key}},
          {isAgent: {$eq: 'false'}}
          ,{isAdmin: {$eq:'false'}}
      ]
  })
  res.json(data)
})
// @desc    search agent
// @route   PUT /api/users/searchCustomer/:id
// @access  Private/Admin
const searchAgent = asyncHandler(async(req,res) => {
  let data = await Product.find({
      "$and":[
          {name:{$regex:req.params.key}},
          {isAgent: {$eq: 'true'}}
          
      ]
  })
  res.json(data)
})


const createAgent = asyncHandler(async(req,res) => {
  const { name, email, password ,id , phonenumber ,address } = req.body

  const userExists = await Agent.findOne({ email })

  if (userExists) {
    res.status(400)
    throw new Error('Agent already exists')
  }

  const agent = await Agent.create({
    name,
    email,
    password,
    phonenumber,
    address,
    id,
    isAgent:true
  })

  if (agent) {
    res.status(201).json(agent)
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
})

const assignAdsToAgent = asyncHandler(async(req,res) => {
  //productid agentid name
  const id = req.params.id;
  const agentid =req.params.slug;
  console.log(id)
  const product = await Product.updateOne(
    { "_id": `${id}` }, 
    { $set: { 
               "agentName": req.params.name,
               }})
  // const product = await Product.findById(id)
  console.log(product,"hii")
  const name = req.params.name;
 console.log(agentid);
  // const updatedProduct = new Product({
  //   agentName:name,
  //   name: product.name,
  //   price: product.price,
  //   subCategory: product.subCategory,
  //   category: product.category,
  //   description: product.description,
  //   image:product.image,
  //   state:product.state,
  //   city:product.city,
  //   timestamps:product.timestamps,
    
  // })
  const agent = await Agent.findById(agentid)
  const names =agent.assigned
  console.log(agent.pending)
  const assignAgent = await Agent.updateOne(
    { "_id": `${req.params.slug}` }, 
    { $set: { 
               "assigned":[...names,product.name],
               "pending": agent.pending+1 }})

  // const createdProduct = await updatedProduct.save()
  res.status(201).json(assignAgent)
})

const ReportedUser = asyncHandler(async(req,res) => {
  const data = await User.find(
        {Reportedby: {$ne: null}}
        
    )
    console.log(data)
res.json(data)
})

export {
  authUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
  getAgents, 
  searchCustomer,
  searchAgent,
  assignAdsToAgent,
  createAgent,
  getAgent,
  ReportedUser,
  deleteProduct,
  deleteAgent,
  UnAssignAgent, 
}