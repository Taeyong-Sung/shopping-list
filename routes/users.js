import { Router } from 'express'
import { isSignedIn } from '../middleware/is-signed-in.js'
import * as usersCtrl from '../controllers/users.js'

const router = Router()

// public routes

// protected routes
router.get('/:userId', isSignedIn, usersCtrl.show)
router.get('/', isSignedIn, usersCtrl.index)

export { router }
