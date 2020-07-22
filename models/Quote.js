const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    user : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'username'
    },
    product: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'product'
    },
    length: {
        type: String,
        required: true,
    }
})