'use strict';
let elems = document.getElementsByTagName('input');

for(let i = 0; i <elems.length; i++){
    elems[i].addEventListener('blur', func);
}
function func(){
 let correctLength = this.dataset.length;
 let inputDataLength = this.value.length;

 if (correctLength == inputDataLength){
    this.style.borderColor = 'purple';
 } else {
    this.style.borderColor = 'pink';
 };
};

// Даны инпуты. Сделайте так, чтобы все инпуты по потери фокуса проверяли 
//свое содержимое на правильное количество символов. Сколько символов 
//должно быть в инпуте, указывается в атрибуте data-length. Если вбито 
//правильное количество, то граница инпута становится фиолетовой, если 
//неправильное - розовой.
