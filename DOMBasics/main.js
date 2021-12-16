//console.log(window)
//Grab Single Element
// const form = document.getElementById('my-form');
// console.log(form);

// console.log(document.querySelector('h1'));
// console.log(document.querySelector('.container'));

//Select Multiple Elements
// console.log(document.querySelectorAll('.item'));
// console.log(document.getElementsByClassName('item'));
// console.log(document.getElementsByTagName('li'));
// const nodeItems = document.querySelectorAll('.item');
// const classItems = document.getElementsByClassName('item');
// nodeItems.forEach(item => console.log(item));
// classItems.forEach(item => console.log(item));
// for(itm of classItems){
//     console.log(itm);
// }

//DOM Manipulation
// const ul = document.querySelector('.items');

//ul.remove();


//Event Listener
// const btn = document.querySelector('.btn');

// btn.addEventListener('click', e => {
//     e.preventDefault();
//     document.querySelector('#my-form').style.backgroundColor = '#ccc';
//     ul.firstElementChild.textContent = 'HTML';
//     ul.children[1].innerText = 'CSS';
//     ul.lastElementChild.innerHTML = '<h4>JavaScript</h4>';
// })

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();
    if(nameInput.value === "" || emailInput.value === "") {
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';
        setTimeout(() => msg.remove(), 3000);
    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(nameInput.value + ': ' + emailInput.value));
        userList.appendChild(li);
        nameInput.value = '';
        emailInput.value = '';
    }
}