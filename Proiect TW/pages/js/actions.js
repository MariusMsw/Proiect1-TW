window.onload = () => {
    let token = localStorage.getItem('piccolo_token');
    if (token) {
        document.querySelector('[href="account.html"]').innerHTML = 'salut ' + token.substring(token.indexOf('_') + 1, token.lastIndexOf('_'));
    }
};
