function converter (sum, currency, targetCurrency) {
   switch (currency === 'RUB') {
    case (targetCurrency === 'USD'):
        sum = sum * 90;
        break;
    case (targetCurrency === 'EUR'):
        sum = sum * 100;
        break;
    default:
        sum = null        
   }
   return sum;
}

console.log(converter(12654654, 'RUB', 'YEN'));