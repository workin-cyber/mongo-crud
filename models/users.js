const mongoose = require('mongoose')
const { Schema, model } = mongoose

const userSchema = new Schema({
    id: String,
    name: {
        required: true,
        type: String,
        unique: true,
        trim: true,
        minLength: 2,
    }, //String
    email: {
        type: String,
        lowercase: true
    },
    age: {
        type: Number,
        default: 20
    },
    isMarried: Boolean,
    bday: Date,
    messages: [String],
    address: {
        city: String,
        street: String
    },
    status: {
        type: String,
        enum: ['on', 'off', 'out'],
        default: 'off'
    }
})

const UserModel = model('user', userSchema)

module.exports = UserModel // == export default