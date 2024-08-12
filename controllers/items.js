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
        const items = await Item.find({})
        res.render('items/show',{
            items,
    })
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

async function create(req, res){
    try {
        await Item.create(req.body)
        res.redirect('/items/edit')
    } catch (error) {
        console.log(error)
        res.redirect('/items/show')
    }
}

export {
    index,
    show,
    edit,
    create,
}