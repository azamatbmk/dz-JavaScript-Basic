let card = '4561-2612-1234-5464'
let card2 = '4276-6000-5250-7189'

function validateCard(cardNumber) {
    let number = cardNumber.split('-').join('');
    
    let sum = 0;
    let mustMultiplied = false;

    for (let i = number.length - 1; i >= 0; i-- ) {
        let digit = Number(number[i]);

        if (mustMultiplied) {
            digit *= 2;
            if (digit > 9) {
                digit = digit - 9;
            }
        }
        sum += digit;
        mustMultiplied = !mustMultiplied;
    }
    return sum % 10 === 0;
}

console.log(validateCard(card2));