const { connect } = require('./db')
//const { create, read, update } = require('./controllers/users')
const user = require('./controllers/users')

connect()
    .then(async () => {
        /* const u = {
            id: '143',
            name: 'michael',
            age: 23,
            isMarried: false
        } */
        // const res = await user.create(u)
        //const res = await user.read()

        //const res = await user.update('610ba00c1ff1f726a8d3230e', { age: 28 })
        const res = await user.update('610ba00c1ff1f726a8d3230e', { 'address.city': 'jerusalem' })
        console.log(res)
    })