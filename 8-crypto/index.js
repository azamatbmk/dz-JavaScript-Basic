
function crypto(res) {
    let wordLength = res.length;
    if(wordLength % 2 == 0) {
        wordLength /= 2
    } else {
        wordLength = (wordLength - 1) / 2
    }
    let arrFirst = res.split('').slice(0,wordLength).reverse().join('');
    let arrSecond = res.split('').reverse().slice(0, wordLength).join('');
    let result = arrFirst.concat(arrSecond);
    return result
}

console.log(crypto('password'));

function check(cryptoPass, chekPass) {
    let checked = crypto(chekPass);
    return checked == cryptoPass ? true : false;
}

console.log(check('ssapdrow', 'password'));