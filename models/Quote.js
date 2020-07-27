const mongoose = require('mongoose')

const QuoteSchema = new mongoose.Schema({
    user : {
        type: String
    },
    product: { 
        // type: mongoose.Schema.Types.ObjectId,
        // ref: 'product'
        type: String
    },
    length: {
        type: String
    },
    location: {
        type: String
    }
})

module.exports = mongoose.model('Quote', QuoteSchema)