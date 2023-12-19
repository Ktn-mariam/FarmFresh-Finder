import express from 'express'
const router = express.Router()
import authMiddleware from '../middleware/authentication'
import authorizeConsumer from '../middleware/authorizationConsumer'
import authorizeFarmer from '../middleware/authorizationFarmer'
import {
  getMyDetails,
  getConsumer,
  updateConsumer,
  followFarmer,
  unFollowFarmer,
} from '../controllers/consumers'

router.route('/:consumerID').get(authMiddleware, authorizeFarmer, getConsumer)
router
  .route('/')
  .patch(authMiddleware, authorizeConsumer, updateConsumer)
  .get(authMiddleware, authorizeConsumer, getMyDetails)
router
  .route('/followFarmer')
  .patch(authMiddleware, authorizeConsumer, followFarmer)
router
  .route('/unFollowFarmer')
  .patch(authMiddleware, authorizeConsumer, unFollowFarmer)

export default router
