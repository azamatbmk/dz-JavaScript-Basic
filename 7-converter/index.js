function converter (sum, currency, targetCurrency) {
   switch (true) {
        case (currency === 'RUB' && targetCurrency === 'USD'):
            sum = sum / 90;
            break;
        case (currency === 'RUB' && targetCurrency === 'EUR'):
            sum = sum * 100;
            break;
        case (currency === 'USD' && targetCurrency === 'RUB'):
            sum = sum * 90;
            break;
        case (currency === 'USD' && targetCurrency === 'EUR'):
            sum = sum * 0.92;
            break;
        case (currency === 'EUR' && targetCurrency === 'USD'):
            sum = sum * 1.08;
            break;
        case (currency === 'EUR' && targetCurrency === 'RUB'):
            sum = sum * 96;
            break;
        case (currency === targetCurrency):
            sum = sum;
            break;
        default:
            sum = null;    
   }
   return sum;
}

console.log(converter(100, 'EUR', 'USD'));