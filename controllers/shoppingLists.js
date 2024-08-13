import { ShoppingList } from "../models/shoppingList.js"
import { User } from "../models/user.js"
async function index(req, res) {
    try {
        res.render('shoppingLists/sample')
    } catch (error) {
        console.log(error)
        res.redirect('/')
    }
}

async function show(req,res) {
    try {
        const shoppingList = await ShoppingList.findById(req.params.shoppingListId).populate(["items","owner"])
        const isOwner = shoppingList.owner._id.equals(req.session.user._id)
        res.render('shoppingLists/show',{
            shoppingList,
            isOwner
    })
    } catch (error) {
        console.log(error)
        res.redirect('/')
    }
}

async function newItems(req, res) {
    try {
        const shoppingList = await ShoppingList.findById(req.params.shoppingListId).populate('items')
        res.render('shoppingLists/new', {
            shoppingList,
        })
    } catch (error) {
        console.log(error)
        res.redirect('/shoppingLists')
    }
}

async function create(req, res){
    try {
        req.body.owner = req.session.user._id
        const shoppingList = await ShoppingList.create(req.body)
        const userOwner = await User.findById(req.body.owner)
        userOwner.shoppingLists.push(shoppingList)
        await userOwner.save()
        res.redirect(`/shoppingLists/${shoppingList._id}/new`)
    } catch (error) {
        console.log(error)
        res.redirect('/shoppingLists/show')
    }
}

async function createItems(req, res){
    try {
        const shoppingList = await ShoppingList.findById(req.params.shoppingListId)
        shoppingList.items.push(req.body)
        await shoppingList.save()
        res.redirect(`/shoppingLists/${shoppingList._id}/new`)
    } catch (error) {
        console.log(error)
        res.redirect('/shoppingLists/show')
    }
}


async function edit(req, res) {
    try {
        const shoppingList = await ShoppingList.findById(req.params.shoppingListId).populate(['owner','items'])
        const item = shoppingList.items.id(req.params.itemId)
        res.render("shoppingLists/edit", {
        shoppingList,
        item,
    });
    } catch (error) {
        console.log(error);
        res.redirect("/shoppingLists");
    }
}

async function update(req, res) {
    try {
        const shoppingList = await ShoppingList.findById(req.params.shoppingListId)
        const item = shoppingList.items.id(req.params.itemId)
        item.set(req.body)
        await shoppingList.save()
        res.redirect(`/shoppingLists/${shoppingList._id}`);
    } catch (error) {
        console.log(error);
        res.redirect('/shoppingLists/show');
    }
}

async function deleteItem(req, res) {
    try {
        const shoppingList = await ShoppingList.findById(req.params.shoppingListId)
        shoppingList.items.remove({_id: req.params.itemId})
        await shoppingList.save()
        res.redirect(`/shoppingLists/${shoppingList._id}`); 
    } catch (error) {
        console.log(error)
        res.redirect('/shoppingLists/new')
    }
}

export {
    index,
    newItems as new,
    show,
    createItems,
    edit,
    create,
    update,
    deleteItem as delete,
}