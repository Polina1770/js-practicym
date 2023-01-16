'use strict';
let elems = document.getElementsByTagName('input');
let elems2 = document.getElementById('test');
for(let i = 0; i <elems.length; i++){
    elems[i].addEventListener('blur', func);
}
function func(){
    elems2.innerHTML = this.value;
}
//Привяжите всем инпутам следующее событие - по потери фокуса каждый 
//инпут выводит свое value в абзац с id="test"