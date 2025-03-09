let dates = ['10-02-2022', 'тест', '11/12/2023', '00/13/2022', '41/12/2023', '3453.34', '']



function parseDate(arrayItem) {

    const isMinus = arrayItem.includes('-');
    const isSlash = arrayItem.includes('/');

    if(!isMinus && !isSlash) {
        return false;
    };

    const parts = isMinus ? arrayItem.split('-') : arrayItem.split('/');

    if(parts.length > 4) {
        return false;
    }

    const [first, second] = parts;

    let day;
    let month;

    if(isMinus) {
        day = first;
        month = second;
    } else if(isSlash) {
        day = second;
        month = first;
    };

    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if(month < 1 || month > 12) {
        return false
    }

    if (day < 1 || day > daysInMonth[month - 1]) {
        return false;
    };
    return true
}

const validDates = dates.filter(item => parseDate(item))

console.log(validDates);