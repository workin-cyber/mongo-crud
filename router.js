const user = require('./controllers/users')

module.exports = function Router(app) {

    app.get('/users', async function (req, res) {
        try {
            const list = await user.read()
            res.send(list)
        } catch (error) {
            res.status(400).send({
                error: error.message || error
            })
        }
    })

    app.post('/login', async function (req, res) {
        try {
            const { email, password } = req.body
            const loginRes = await user.login(email, password)
            res.send(loginRes)
        } catch (error) {
            res.status(400).send({
                error: error.message || error
            })
        }
    })

}