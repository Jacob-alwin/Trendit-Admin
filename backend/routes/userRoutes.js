import express from 'express'
const router = express.Router()
import {getProducts,
  getProductbyId,
  search,
  approvedProduct,
  notApprovedProduct,
  payment
 } from '../controller/productController.js'
 import {getAllAgentProfile,agentApprovedProduct,agentPendingProduct,CreateAgent } from '../controller/agentController.js'
import {
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

router.route('/agent').get(protect, admin , getAgents)
router.route('/agent/:id').get(protect, admin , getAgent)
router.route('/agent/:name/:id/:slug').put(protect, admin, assignAdsToAgent)
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
  
  router.route('/approved/:name')
  .get(protect,agentApprovedProduct)
  router.route('/pending/:name')
  .get(protect,agentPendingProduct)
  router.route('/CreateNewAgent').post(CreateAgent)
  router.route('/admin/reported').get(ReportedUser)
export default router