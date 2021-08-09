const jwt = require('jsonwebtoken')

//some key to open the token. should be in ".env" file
const secret = '34534h5jhj65' //process.env.SECRET

exports.createToken = (id) => {
    const token = jwt.sign({ id }, secret, { expiresIn: '10d' })

    return token
}

exports.verifyToken = (id, token) => {

    const tokenData = jwt.verify(token, secret) || {}

    if (id != tokenData.id || Date.now() > tokenData.exp * 1000)
        throw { error: 'token unouthorized' }

    return true
}