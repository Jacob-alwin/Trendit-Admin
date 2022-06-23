import asyncHandler from 'express-async-handler'
import generateToken from '../utils/generateToken.js'
import User from '../models/user.js'
import Product from '../models/product.js'
import Agent from '../models/agent.js'

const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body
  
    const user = await Agent.findOne({ email })
  
    if (user && (await user.matchPassword(password))) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAgent: user.isAgent,
        token: generateToken(user._id),
      })
    } else {
      res.status(401)
      throw new Error('Invalid email or password')
    }
  })

  const getAgentProfile = asyncHandler(async (req, res) => {
    const user = await Agent.findById(req.user._id)
  
    if (user) {
      res.json()
    } else {
      res.status(404)
      throw new Error('User not found')
    }
  })
  const getAllAgentProfile = asyncHandler(async (req, res) => {
    const user = await Agent.find()
  
    if (user) {
      console.log(user)
      res.json(user)
    } else {
      res.status(404)
      throw new Error('User not found')
    }
  })
  const AgentProfileforAdmin = asyncHandler(async (req, res) => {
    const user = await Agent.findById(req.params.id)
  
    if (user) {
      res.json(user)
    } else {
      res.status(404)
      throw new Error('User not found')
    }
  })

  const agentApprovedProduct = asyncHandler(async(req,res) => {
    console.log(req.params.name)
    const products =await Product.find({
        "$and":[
            {agentName:req.params.name},
            {verified: {$eq: true}},
        ]
    })
    console.log(products)
    res.json(products)
})
const agentPendingProduct = asyncHandler(async(req,res) => {
  console.log(req.params.name)
  const products =await Product.find({
      "$and":[
          {agentName:req.params.name},
          {verified: {$eq: false}},
      ]
  })
  res.json(products)
})

const CreateAgent = asyncHandler(async (req, res) => {
  const { name, email, password , phonenumber ,address } = req.body

  // const userExists = await Agent.findOne({ email })

  // if (userExists) {
  //   res.status(400)
  //   throw new Error('Agent already exists')
  // }

  const user = await Agent.create({
    name,
    email,
    password,phonenumber ,address
  })
  console.log(user)

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      phonenumber: user.phonenumber,
      address:user.address,
      token: generateToken(user._id),
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
})

  export {
    authUser,
    getAgentProfile,
    getAllAgentProfile,
    AgentProfileforAdmin,
    agentApprovedProduct,
    agentPendingProduct,
    CreateAgent,
  }