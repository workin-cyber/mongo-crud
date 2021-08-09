const User = require('../models/users')
const bcryptjs = require('bcryptjs')
const { createToken, verifyToken } = require('../jwt')

async function create(data) {
    return User.create(data)
}
exports.create = create


async function read(filter, token) {
    const user = await readOne({ token })

    if (user && verifyToken(user._id, token))
        return User.find(filter)
    else
        throw 'not conected'
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

    const token = createToken(user._id)
    user.token = token

    user.lastSeen = Date.now()

    const updatedUser = await update(user._id, user)
    updatedUser.token = token

    return updatedUser
}