async function getData(url = '') {
    const response = await fetch(url, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
    });
    return await response.json();
}

let response = null;
let body = document.querySelector('body');

let bar5 = document.querySelector('.bar-5');
let bar4 = document.querySelector('.bar-4');
let bar3 = document.querySelector('.bar-3');
let bar2 = document.querySelector('.bar-2');
let bar1 = document.querySelector('.bar-1');

fillProgressBar(bar5, 60);
fillProgressBar(bar4, 30);
fillProgressBar(bar3, 10);
fillProgressBar(bar2, 4);
fillProgressBar(bar1, 15);

function fillProgressBar(element, maxWidth) {
    let width = 0;
    let id = setInterval(frame, 20);
    function frame() {
        if (width == maxWidth) {
            clearInterval(id);
        } else {
            width++;
            element.style.width = width + '%';
        }
    }
}

window.onload = () => {
    let token = localStorage.getItem('piccolo_token');
    if (token) {
        document.querySelector('[href="account.html"]').innerHTML = 'salut ' + token.substring(token.indexOf('_') + 1, token.lastIndexOf('_'));
    }

    let datas = [];
    getData('https://jsonplaceholder.typicode.com/comments')
        .then((data) => {
            response = data;

            for (let i = 0; i < 9; i++) {
                datas.push(response[Math.floor((Math.random() * 500) + 1)]);
            }

            let commentsH5 = document.querySelectorAll('.comment h5');
            let listElements = document.querySelectorAll('#list-reviews li');
            for (let i = 0; i < datas.length; i++) {
                if (i < 4) {
                    commentsH5[i].innerHTML = datas[i].body;
                } else {
                    listElements[i - 4].innerHTML = datas[i].body;
                }
            }
        });
}

