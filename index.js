const firstNameInputEl = document.getElementById('first-name-in')
const lastNameInputEl = document.getElementById('last-name-in')
const emailInputEl = document.getElementById('email-in')
const passwordInputEl = document.getElementById('password-in')

const firstNameEl = document.getElementById('first-name-el')
const lastNameEl = document.getElementById('last-name-el')
const emailEl = document.getElementById('email-el')
const passwordEl = document.getElementById('password-el')

const inputEl = document.querySelector('.input')

const submitEl = document.getElementById('submit-btn')

function isEmpty(inputElement, element, message) {
    if(!inputElement.value) {
        inputElement.style.borderColor = 'hsl(0, 100%, 74%)';
        element.textContent = `${message} cannot be empty`
    }
}

submitEl.addEventListener('click', () => {

    isEmpty(firstNameInputEl, firstNameEl, "First Name")
    isEmpty(lastNameInputEl, lastNameEl, "Last Name")
    isEmpty(passwordInputEl, passwordEl, "Password")


})

