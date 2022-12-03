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







function ValidateEmail(input, el) {

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    
    if (input.value.match(validRegex)) {
        input.value =""
        el.textContent=""

    } else {  
        el.textContent = `Looks like this is not an email`
        styling("email-label")
        input.style.borderColor = 'hsl(0, 100%, 74%)'
        input.placeholder = 'email@example/com' 
        const stylish = document.createElement('style');
        stylish.innerHTML = `
        #email-in::placeholder {
            color: hsl(0, 100%, 74%);
        }
        `
        document.head.appendChild(stylish);

}
}



function isEmpty(inputElement, element, message, label) {
    if(!inputElement.value) {
        inputElement.style.borderColor = 'hsl(0, 100%, 74%)';
        element.textContent = `${message} cannot be empty`
        inputElement.placeholder = ''
        styling(label)
    }
    else {
        inputElement.value = ""
        element.textContent = ""
        inputElement.style.borderColor = 'hsl(246, 25%, 77%)'
        unStyling(label) 
    }
}







function styling(label) {
    const style = document.createElement('style');
    style.innerHTML = `
    label {
        position: relative;
      }
      
      #${label}:before {
        content: "";
        position: absolute;
        right: 10px;
        top: 0;
        bottom: 2.6rem;
        width: 20px;
        background: url(images/icon-error.svg) center / contain no-repeat;
      }
    `;
    document.head.appendChild(style);
}


function unStyling(label) {
    const style = document.createElement('style');
    style.innerHTML = `
      
      #${label}:before {
        background: none;
      }
    `;
    document.head.appendChild(style);
}




submitEl.addEventListener('click', () => {

    isEmpty(firstNameInputEl, firstNameEl, "First Name", "first-name-label")
    isEmpty(lastNameInputEl, lastNameEl, "Last Name", "last-name-label")
    isEmpty(passwordInputEl, passwordEl, "Password", "password-label")
    ValidateEmail(emailInputEl, emailEl)

})
