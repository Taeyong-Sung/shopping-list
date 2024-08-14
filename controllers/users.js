import { User } from "../models/user.js"
import { ShoppingList } from "../models/shoppingList.js"

async function index(req, res) {
  try {
    const users = await User.find({})
    res.render('users/index', {
      users
    })
  } catch (error) {
    console.log(error)
    res.redirect('/')
  }
}

async function show(req, res) {
  try {
    const selectedUser = await User.findById(req.params.userId).populate('shoppingLists')
    console.log(selectedUser);
    res.render('users/show', {
      selectedUser
    })
  } catch (error) {
    console.log(error)
    res.redirect('/')
  }
}

export {
  index,
  show,
}