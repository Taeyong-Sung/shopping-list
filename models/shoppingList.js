import mongoose from "mongoose"

const Schema = mongoose.Schema

const itemSchema = new Schema({
name: {
    type: String,
    required: true,
},
store: {
        type: String,
        required: true,
    },
category: {
        type: String,
        required: true,
    },
quantity: {
        type: Number,
        required: true,
    },
}, {
timestamps: true
})


const shoppingListSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    items: [itemSchema],

    owner: {
        type: Schema.Types.ObjectId, ref: 'User'
    },
})


const ShoppingList = mongoose.model("ShoppingList", shoppingListSchema)

export {
    ShoppingList
}

