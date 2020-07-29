const mongoose = require('mongoose')

const QuoteSchema = new mongoose.Schema({
    // user : {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'user'
    // },
    // product: { 
    //     type: String,
    //     required: true
    // }
    
    
    user : {
        // type: String
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    product: { 
        // type: mongoose.Schema.Types.ObjectId,
        // ref: 'product'
        type: String
        // required: true
    },
    length: {
        type: String
        // required: true
    },
    location: {
        type: String
        // required: true
    },
    price: {
        type: String
        // required: true
    },
    accpeted: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('Quote', QuoteSchema)