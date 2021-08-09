document.querySelector('form').onsubmit = event => {
    event.preventDefault()
    const values = Object.values(event.target)
        .reduce((acc, input) => !input.name ? acc : ({
            ...acc,
            [input.name]: input.type == 'checkbox' ? input.checked : input.value
        }), {})

    console.log(values)

    login(values.email, values.password)
}

async function login(email, password) {
    let user
    const res = await axios.post('/login', { email, password })

    user = res.data
    console.log(user)

    localStorage.token = user.token

    document.querySelector('main')
        .innerHTML = `<h1>Hello ${user.name}</h1>`
}

if (localStorage.token) {
    document.querySelector('main')
        .innerHTML = `
        <h1>connected</h1>
        <button onclick='logout()'>logout</button>
        `
}

async function getUsers() {
    try {
        const res = await axios.get('/users', {
            headers: { authorization: localStorage.token }
        })

        console.log(res)

    } catch (error) {
        console.log('לא מורשה')
    }
}
getUsers()


function logout() {
    delete localStorage.token
    location.reload()
}