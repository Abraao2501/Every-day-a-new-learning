const btnLogin = document.querySelector('.btn-login')
const form = document.querySelector('form')

btnLogin.addEventListener('click', (event)=>{
    event.preventDefault() //don't make the submit
    form.classList.add("form-hide")
})