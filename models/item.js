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
    owner: {type: Schema.Types.ObjectId, ref: 'User'},
}, {
timestamps: true
})

const Item = mongoose.model("Item", itemSchema)

export {
    Item
}