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

async function newItems(req, res) {
    try {
        const items = await Item.find({})
        res.render('items/new', {
        items,
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

async function edit(req, res) {
    try {
        const item = await Item.findById(req.params.itemId);
        res.render("items/edit", {
        item,
    });
    } catch (error) {
        console.log(error);
        res.redirect("/items");
    }
}

async function update(req, res) {
    try {
        await Item.findByIdAndUpdate(req.params.itemId, req.body);
        res.redirect('/items/show');
    } catch (error) {
        console.log(error);
        res.redirect('/items/show');
    }
}

export {
    index,
    newItems as new,
    show,
    edit,
    create,
    update,
}