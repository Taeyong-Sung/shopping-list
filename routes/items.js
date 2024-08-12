import { Router } from 'express'
import { isSignedIn } from '../middleware/is-signed-in.js'
import * as itemsCtrl from '../controllers/items.js'

const router = Router()

router.get('/', itemsCtrl.index)



export { router }