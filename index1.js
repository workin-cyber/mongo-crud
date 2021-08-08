const { connect } = require('./db')
const user = require('./controllers/users')

connect()
    .then(async () => {
        try {
            const res = await user.register({
                firstName: 'israel',
                lastName: 'inberg',
                phone: 0501111111,
                email: 'd@s2.com',
                password: '3456'
            })
        } catch (error) {
            console.log(error.message)
        }
    })