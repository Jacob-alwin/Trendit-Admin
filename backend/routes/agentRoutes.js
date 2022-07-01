import express from 'express'
const router = express.Router()
import { authUser,getAgentProfile,getAllAgentProfile , AgentProfileforAdmin} from '../controller/agentController.js'
import { protect, agent, admin } from '../middleware/authMiddelware.js'
import {assignAdsToAgent} from '../controller/userController.js'
router.post('/login', authUser)
router
  .route('/profile')
  .get(protect,agent, getAgentProfile)
  router
  .route('/AllAgentprofile')
  .get(protect,admin, getAllAgentProfile)    
  router
  .route('/AgentprofileforAdmin/:id')
  .get(protect,admin, AgentProfileforAdmin)
 router.route('/assign/:id/:slug/:name').post(assignAdsToAgent)

  export default router