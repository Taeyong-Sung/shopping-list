import { Item } from "../models/item.js"

async function index(req, res) {
    try {
      res.render('items/index')
    } catch (error) {
      console.log(error)
      res.redirect('/')
    }
  }

export {
    index
  }