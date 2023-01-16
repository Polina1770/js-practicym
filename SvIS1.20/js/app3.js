'use strict';
let elems = document.getElementsByTagName('h1');
for(let i = 0; i <elems.length; i++){
    elems[i].addEventListener('click', func);
}
function func(){
    this.innerHTML =  this.innerHTML *  this.innerHTML;
};

// Даны абзацы с числами. По нажатию на абзац в нем должен появится 
//квадрат числа, которое он содержит.