const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username: { 
        type: String,
        required: true,
        min: 6,
        max: 15
    },
    name: {
        type: string,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    passwords: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = User = mongoose.model('user', UserSchema)