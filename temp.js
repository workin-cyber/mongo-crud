const bcryptjs = require('bcryptjs')

const password = '23543r3r3'

const hash = bcryptjs.hashSync(password, 8)

const isCorrect = bcryptjs.compareSync('safgsf', hash)


console.log(isCorrect)