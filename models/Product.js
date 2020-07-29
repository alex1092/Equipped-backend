const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    user : {
        type: String
        
    },
    product: { 
        type: String,
        required: true
    }
  
})

module.exports = mongoose.model('Product', ProductSchema)