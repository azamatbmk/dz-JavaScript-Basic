'use strict';


function clickInput(e) {
    let secondNum = document.querySelector('.secondNum').value;
    let firstNum = document.querySelector('.firstNum').value;
    if(secondNum === '' || firstNum === '') {
        document.querySelector('.solution').innerText = `Введите оба значения`
        return
    }
    switch(e.target.id) {
        case ('mult'):
            document.querySelector('.solution').innerText = firstNum * secondNum;
            break;
        case ('divide'):
            document.querySelector('.solution').innerText = firstNum / secondNum;
            break
        case ('plus'):
            document.querySelector('.solution').innerText = Number(firstNum) + Number(secondNum);
            break;
        case ('minus'):
            document.querySelector('.solution').innerText = firstNum - secondNum;
            break;
    }
    document.querySelector('.firstNum').value = '';
    document.querySelector('.secondNum').value = '';
    setTimeout(() =>{
        document.querySelector('.solution').innerText = ''
    }, 5000)
}