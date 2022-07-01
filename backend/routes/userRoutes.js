import express from 'express'
const router = express.Router()
import Agent from '../models/agent.js'
import {getProducts,
  getProductbyId,
  search,
  approvedProduct,
  notApprovedProduct,
  payment
 } from '../controller/productController.js'
 import {getAllAgentProfile,agentApprovedProduct,agentPendingProduct,CreateAgent, agentAssigned12Product, } from '../controller/agentController.js'
import {
  authUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  
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
  deleteUser,
 
 
} from '../controller/userController.js'
import { protect, admin , agent } from '../middleware/authMiddelware.js'
// POST /api/users
//signup
router.route('/').post(registerUser).get(protect, admin, getUsers)
router.route('/approved/:id').get(protect, admin,approvedProduct)
router.route('/payment/:name').get(protect, admin,payment)
router.route('/notapproved/:id').get(protect, admin, notApprovedProduct)
router.route('/searchProducts/:key').get(protect, admin,search)
router.route('/products').get(protect,admin,getProducts)
router.route('/product/:id').get(protect,admin,getProductbyId)
router
  .route('/user/:id')
  .delete( deleteUser)
router
  .route('/product/:id')
  .delete( deleteProduct)
  router
  .route('/agent/:id')
  .delete(deleteAgent )
  router
  .route('/unassign/:id')
  .put(UnAssignAgent )
router.route('/agent').get(protect, admin , getAgents)
router.route('/agent/:id').get(protect, admin , getAgent)
// //agent name product id 
// router.route('/assign').post(assignAdsToAgent)
// @route   POST /api/users/login
router.post('/login', authUser)
router.route('/searchCustomer/:key').get(protect, admin, searchCustomer)
router.route('/searchAgent/:key').get(protect, admin, searchAgent)
router.route('/createAgent').post(protect, admin, createAgent)
router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile)
router
  .route('/:id')
  .delete(protect, admin, deleteUser)
  .get(protect, admin, getUserById)
  .put(protect, admin, updateUser)
  router
  .route('/AllAgentprofile')
  .get(protect,admin, getAllAgentProfile) 
  
  router.route('/approve/:name')
  .get(agentApprovedProduct)
  router.route('/pending/:name')
  .get(agentPendingProduct)
  router.route('/assigned/:name')
  .get(agentAssigned12Product)
  router.route('/CreateNewAgent').post(CreateAgent)
  router.route('/admin/reported').get(ReportedUser)
  router.get('/agentname/:name',async(req,res)=>{
    let data = await Agent.find({name:req.params.name})
  res.json(data)
  })
export default router