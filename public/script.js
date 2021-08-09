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

let user
async function login(email, password) {
    const res = await axios.post('/login', { email, password })

    user = res.data
    console.log(user)

    document.querySelector('main')
        .innerHTML = `<h1>Hello ${user.name}</h1>`
}
