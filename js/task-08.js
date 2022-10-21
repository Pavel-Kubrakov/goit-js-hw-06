const formRef = document.querySelector('.login-form')

formRef.addEventListener('submit', login)

function login (event){
    event.preventDefault()
    const {
        elements:
        {email, password}
    } = event.currentTarget;

    if(email.value === '' || password.value === ''){
        alert('Все поля должны быть заполнены')
    }

    const data = {
        email: email.value,
        password: password.value
    }
    console.log(data)
    formRef.reset()
}