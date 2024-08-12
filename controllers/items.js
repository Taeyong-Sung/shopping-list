import { Item } from "../models/item.js"

async function index(req, res) {
    try {
        res.render('items/index')
    } catch (error) {
        console.log(error)
        res.redirect('/')
    }
  }

async function show(req,res) {
    try {
        res.render('items/show')
    } catch (error) {
        console.log(error)
        res.redirect('/')
    }
}

async function edit(req, res) {
    try {
      res.render('items/edit', {
      })
    } catch (error) {
      console.log(error)
      res.redirect('/items')
    }
  }


export {
    index,
    show,
    edit
  }