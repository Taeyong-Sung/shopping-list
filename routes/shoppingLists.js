import { Router } from 'express'
import { isSignedIn } from '../middleware/is-signed-in.js'
import * as shoppingListsCtrl from '../controllers/shoppingLists.js'

const router = Router()


// public routes
//items/index
router.get('/sample', shoppingListsCtrl.index)


// protected routes //
// router.get('/users/:userId', isSignedIn, shoppingListsCtrl.show)
router.post('/', isSignedIn, shoppingListsCtrl.create)
router.get('/:shoppingListId/new', isSignedIn, shoppingListsCtrl.new)
router.post('/:shoppingListId/items', isSignedIn, shoppingListsCtrl.createItems)
router.get('/:shoppingListId', isSignedIn, shoppingListsCtrl.show)
router.get('/:shoppingListId/items/:itemId/edit', isSignedIn, shoppingListsCtrl.edit)
router.put('/:shoppingListId/items/:itemId', isSignedIn, shoppingListsCtrl.update)
router.delete('/:shoppingListId/items/:itemId', isSignedIn, shoppingListsCtrl.delete)
router.delete('/:shoppingListId', isSignedIn, shoppingListsCtrl.deleteList)


export { router }

