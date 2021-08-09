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
    const res = await axios.post('/login', { email, password })

    console.log(res)
}