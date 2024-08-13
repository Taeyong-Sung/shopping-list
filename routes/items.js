import { Router } from 'express'
import { isSignedIn } from '../middleware/is-signed-in.js'
import * as itemsCtrl from '../controllers/items.js'

const router = Router()


// public routes
//items/index
router.get('/', itemsCtrl.index)


// protected routes //
//items/show
router.get('/show', isSignedIn, itemsCtrl.show)
//items/new
router.get('/new', isSignedIn, itemsCtrl.new)
//items/create
router.post('/', isSignedIn, itemsCtrl.create)
//items/edit
router.get('/:itemId/edit', isSignedIn, itemsCtrl.edit)

export { router }

