const User = require('../models/users')
const bcryptjs = require('bcryptjs')

async function create(data) {
    return User.create(data)
}
exports.create = create


async function read(filter) {
    return User.find(filter)
}
exports.read = read

async function readOne(filter, projection) {
    return User.findOne(filter, projection)
}
exports.readOne = readOne


async function update(_id, newData) {
    return User.findByIdAndUpdate(_id, newData, { new: true })
}
exports.update = update


exports.register = async function register(data) {

    if (!data.firstName)
        throw `'firstName' is required`

    if (!data.lastName)
        throw `'lastName' is required`


    data.name = `${data.firstName} ${data.lastName}`

    data.password = bcryptjs.hashSync(data.password)

    return await create(data)

    //return readOne({ name: data.name })
}


exports.login = async function login(email, password) {
    const user = await readOne({ email }, '+password')

    if (!user) throw 'Faild to login'

    if (!bcryptjs.compareSync(password, user.password))
        throw 'Faild to login'

    user.lastSeen = Date.now()

    return await update(user._id, user)
}