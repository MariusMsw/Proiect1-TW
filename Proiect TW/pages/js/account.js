function generateFormInputs() {
    let logoutButton = document.querySelector('#logoutButton');
    let logoutInput = document.createElement("input");

    logoutInput.setAttribute('type', 'button');
    logoutInput.setAttribute('class', 'account-button');
    logoutInput.setAttribute('value', 'Log out');
    logoutInput.setAttribute('onclick', 'logout()');
    logoutButton.appendChild(logoutInput);

    let loginEmail = document.querySelector('#login_email');
    let emailInput = document.createElement("input");

    emailInput.setAttribute('type', 'email');
    emailInput.setAttribute('name', 'emailLogin');
    emailInput.setAttribute('placeholder', 'example@host.com');
    loginEmail.appendChild(emailInput);

    let loginPass = document.querySelector('#login_password');
    let passInput = document.createElement("input");

    passInput.setAttribute('type', 'password');
    passInput.setAttribute('name', 'passwordLogin');
    loginPass.appendChild(passInput);

    let loginButton = document.querySelector('#loginButton');
    let loginInput = document.createElement("input");

    loginInput.setAttribute('type', 'button');
    loginInput.setAttribute('class', 'account-button');
    loginInput.setAttribute('value', 'Log in');
    loginInput.setAttribute('onclick', 'login()');
    loginButton.appendChild(loginInput);

    let registerName = document.querySelector('#register_name');
    let nameInput = document.createElement("input");

    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('name', 'name');
    registerName.appendChild(nameInput);

    let registerEmail = document.querySelector('#register_email');
    let registerEmailInput = document.createElement("input");

    registerEmailInput.setAttribute('type', 'email');
    registerEmailInput.setAttribute('name', 'email');
    registerEmailInput.setAttribute('placeholder', 'example@host.com');
    registerEmailInput.setAttribute('oninput', 'validateEmail()');
    registerEmail.appendChild(registerEmailInput);

    let registerAge = document.querySelector('#register_age');
    let registerAgeInput = document.createElement("input");

    registerAgeInput.setAttribute('type', 'range');
    registerAgeInput.setAttribute('id', 'start');
    registerAgeInput.setAttribute('name', 'age');
    registerAgeInput.setAttribute('min', '18');
    registerAgeInput.setAttribute('max', '100');
    registerAgeInput.setAttribute('value', '18');
    registerAgeInput.setAttribute('onchange', 'getRange(this.value)');
    registerAge.appendChild(registerAgeInput);

    let registerGender = document.querySelector('#register_gender');
    let registerGendersInputs = [];
    let registerGendersLabels = [];

    registerGendersLabels[0] = document.createElement("label");
    registerGendersLabels[0].setAttribute('for', 'male');
    registerGendersLabels[0].innerHTML = ' Male ';

    registerGendersLabels[1] = document.createElement("label");
    registerGendersLabels[1].setAttribute('for', 'female');
    registerGendersLabels[1].innerHTML = ' Female ';

    registerGendersLabels[2] = document.createElement("label");
    registerGendersLabels[2].setAttribute('for', 'other');
    registerGendersLabels[2].innerHTML = ' Other ';

    registerGendersInputs[0] = document.createElement("input");
    registerGendersInputs[1] = document.createElement("input");
    registerGendersInputs[2] = document.createElement("input");

    registerGendersInputs[0].setAttribute('type', 'radio');
    registerGendersInputs[0].setAttribute('name', 'gender');
    registerGendersInputs[0].setAttribute('id', 'male');
    registerGendersInputs[0].setAttribute('value', 'male');
    registerGendersInputs[0].checked = true;

    registerGendersInputs[1].setAttribute('type', 'radio');
    registerGendersInputs[1].setAttribute('name', 'gender');
    registerGendersInputs[1].setAttribute('id', 'female');
    registerGendersInputs[1].checked = false;
    registerGendersInputs[0].setAttribute('value', 'female');

    registerGendersInputs[2].setAttribute('type', 'radio');
    registerGendersInputs[2].setAttribute('name', 'gender');
    registerGendersInputs[2].setAttribute('id', 'other');
    registerGendersInputs[2].checked = false;
    registerGendersInputs[0].setAttribute('value', 'other');

    registerGender.appendChild(registerGendersInputs[0]);
    registerGender.appendChild(registerGendersLabels[0]);

    registerGender.appendChild(registerGendersInputs[1]);
    registerGender.appendChild(registerGendersLabels[1]);

    registerGender.appendChild(registerGendersInputs[2]);
    registerGender.appendChild(registerGendersLabels[2]);

    let registerPass = document.querySelector('#register_password');
    let registerPassInput = document.createElement("input");

    registerPassInput.setAttribute('type', 'password');
    registerPassInput.setAttribute('name', 'password');
    registerPass.appendChild(registerPassInput);

    let registerConfirmPass = document.querySelector('#register_confirmPassword');
    let registerConfirmPassInput = document.createElement("input");

    registerConfirmPassInput.setAttribute('type', 'password');
    registerConfirmPassInput.setAttribute('name', 'confirm-password');
    registerConfirmPass.appendChild(registerConfirmPassInput);

    let registerTerms = document.querySelector('#register_terms');
    let registerTermsInput = document.createElement("input");
    let registerTermsLabel = document.createElement("label");

    registerTermsLabel.setAttribute('for', 'agree');
    registerTermsLabel.innerHTML = ' I agree to the terms and conditions';

    registerTermsInput.setAttribute('type', 'checkbox');
    registerTermsInput.setAttribute('name', 'agree');
    registerTermsInput.setAttribute('id', 'agree');
    registerTerms.appendChild(registerTermsInput);
    registerTerms.appendChild(registerTermsLabel);

    let registerButton = document.querySelector('#registerButton');
    let registerInput = document.createElement("input");

    registerInput.setAttribute('type', 'button');
    registerInput.setAttribute('class', 'account-button');
    registerInput.setAttribute('value', 'Register');
    registerInput.setAttribute('onclick', 'register()');
    registerButton.appendChild(registerInput);
}

window.onload = () => {
    localStorage.setItem('current_page', 'register');
    let token = localStorage.getItem('piccolo_token');
    if (token) {
        document.querySelector('[href="account.html"]').innerHTML = 'salut ' + token.substring(token.indexOf('_') + 1, token.lastIndexOf('_'));
    }

    generateFormInputs();
    takeCareOfReactivity();
};

function getRange(value) {
    document.querySelector('#ageValue').innerHTML = value;
}

function validateField(value) {
    if (!value.length) {
        return false;
    }
    return true;
}

function takeCareOfReactivity() {
    if (localStorage.getItem('piccolo_token')) {
        document.querySelector('#register').setAttribute('style','display: none')
        document.querySelector('#login').setAttribute('style','display: none')
        document.querySelector('#logout').setAttribute('style','display: block')
    } else {
        document.querySelector('#logout').setAttribute('style','display: none')
        if (localStorage.getItem('current_page') === 'login') {
            document.querySelector('#register').setAttribute('style','display: none')
            document.querySelector('#login').setAttribute('style','display: block')
        }
        if (localStorage.getItem('current_page') === 'register') {
            document.querySelector('#register').setAttribute('style','display: block')
            document.querySelector('#login').setAttribute('style','display: none')
        }
    }
}

function goToLogin() {
    localStorage.setItem('current_page', 'login');
    takeCareOfReactivity();
    setMessage('');
}

function goToRegister() {
    localStorage.setItem('current_page', 'register');
    takeCareOfReactivity();
    setMessage('');
}

function setMessage(message) {
    let messageElement = document.querySelector('#message');

    if (messageElement.innerHTML !== message
        && message != null) {
        messageElement.innerHTML = '';
        if (message === 'Your account was created') {
            messageElement.setAttribute('style', 'color: green');
        } else {
            messageElement.setAttribute('style', 'color: red');
        }
        messageElement.append(message);
    }
}

function logout() {
    localStorage.removeItem('piccolo_token');
    location.replace("file:///C:/Users/Marius/Desktop/Proiect%20TW/pages/html/account.html");
}

function login() {
    let message = null;
    let loggedIn = false;

    let users = JSON.parse(localStorage.getItem('users'));
    let email = document.querySelector('input[name="emailLogin"]').value;
    let password = document.querySelector('input[name="passwordLogin"]').value;

    if (validateField(email)
        && validateField(password)) {

        Object.values(users).forEach((user) => {
           if (user.email === email && user.password === password) {
                loggedIn = true;
                localStorage.setItem('piccolo_token', 'piccolo_' + user.name + '_' + user.email);
                location.replace("file:///C:/Users/Marius/Desktop/Proiect%20TW/pages/html/welcome.html");
           }
        });
        if (!loggedIn) {
            message = 'Bad credentials!';
        }
    } else {
        message = 'You need to fill all the fields!';
    }
    setMessage(message);
}

function validateEmail() {
    let email = document.querySelector('#register_email input').value;
    let emailRegex = /^[a-zA-Z0-9!#$&_*?^{}~-]+(\.[a-zA-Z0-9!#$&_*?^{}~-]+)*@([a-z0-9]+([a-z0-9-]*)\.)+[a-zA-Z]+$/g;
    if (!emailRegex.test(email)) {
        setMessage('Write a valid email address!');
    } else {
        setMessage('');
    }
}

function register() {
    let validators = true;
    let message = null;

    let name = document.querySelector('input[name="name"]').value;
    let email = document.querySelector('input[name="email"]').value;
    let age = document.querySelector('input[name="age"]').value;
    let action = document.querySelector('select[name="action"]').value;
    let genders = document.querySelectorAll('input[name="gender"]');
    let gender = null;
    let password = document.querySelector('input[name="password"]').value;
    let confirmPassword = document.querySelector('input[name="confirm-password"]').value;
    let agree = document.querySelector('input[name="agree"]');

    genders.forEach((item) => {
        if (item.checked) {
            gender = item.value;
        }
    });

    if (validateField(name)
        && validateField(email)
        && validateField(password)
        && validateField(confirmPassword)) {
        if (!agree.checked) {
            validators = false;
            message = 'You need to accept the terms and conditions!';
        }
        let passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!passRegex.test(password)) {
            validators = false;
            message = 'Password should have minimum 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character!';
        }
        if (password !== confirmPassword) {
            validators = false;
            message = 'Passwords doesn\'t fit!';
        }
        validateEmail();

        if (validators) {
            let newUser = `{"name": "${name}", "email": "${email}", "age": "${age}", "action": "${action}", "gender": "${gender}", "password": "${password}"}`;
            let locaUsers;

            if (localStorage.getItem('users')) {
                locaUsers = localStorage.getItem('users');
                localStorage.setItem('users', locaUsers.substr(0, locaUsers.length - 1).concat(',' + newUser + ']'));
            } else {
                localStorage.setItem('users', '[' + newUser + ']');
            }

            message = 'Your account was created';

            // clear the fields
            document.querySelector('input[name="name"]').value = '';
            document.querySelector('input[name="email"]').value = '';
            genders[0].checked = true;
            document.querySelector('input[name="password"]').value = '';
            document.querySelector('input[name="confirm-password"]').value = '';
            agree.checked = false;

            localStorage.setItem('piccolo_token', 'piccolo_' + name + '_' + email);
            location.replace("file:///C:/Users/Marius/Desktop/Proiect%20TW/pages/html/welcome.html");
        }
    } else {
        message = 'You need to fill all the fields!';
    }
    setMessage(message);
}
