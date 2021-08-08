const mongoose = require('mongoose')
const { Schema, model } = mongoose

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    phone: String,
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    token: {
        type: String,
        select: false
    },
    lastSeen: {
        type: Date,
        default: Date.now
    }
})

const UserModel = model('user', userSchema)

module.exports = UserModel