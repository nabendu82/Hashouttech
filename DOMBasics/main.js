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
const nodeItems = document.querySelectorAll('.item');
const classItems = document.getElementsByClassName('item');
// nodeItems.forEach(item => console.log(item));
// classItems.forEach(item => console.log(item));
for(itm of classItems){
    console.log(itm);
}