const User = require('../models/users')

exports.create = async function create(data) {
    return await User.create(data)
}

exports.read = async function read(filter) {
    //return await User.findOne(filter)
    return await User.find(filter)
}

exports.update = async function update(_id, newData) {
    //return await User.findOneAndUpdate(filter, newData, {new:true})
    // return await User.updateOne(filter, newData, {new:true})
    return await User.findByIdAndUpdate(_id, newData, { new: true })
}

exports.del = async function del(_id) {
    return await User.findByIdAndDelete(_id)
}