import express from 'express'
const router = express.Router()
import { authUser,getAgentProfile,getAllAgentProfile , AgentProfileforAdmin} from '../controller/agentController.js'
import { protect, agent, admin } from '../middleware/authMiddelware.js'

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

  export default router