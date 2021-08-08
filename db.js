const mongoose = require('mongoose')

const
    userName = 'admin',
    password = 'AhHYVPm8fRslt7fU',
    connectionString = `mongodb+srv://${userName}:${password}@cluster0.ovr7q.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

exports.connect = async function connect() {
    try {
        console.log('connecting ..')
        await mongoose.connect(connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        },
            // err => { if (err){ throw err} }
        )

        //success
        console.log('Mongo connected!')
    } catch (error) {
        console.error('Not Connected', error.message)
    }
}