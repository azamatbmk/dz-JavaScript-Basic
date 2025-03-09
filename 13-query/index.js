let queryObject = {
    search: 'Вася',
    take: 10,
}

function queryStr(obj) {
    let str = '';
    for(let key in obj) {
        str += key + '=' + obj[key] + '&';
    }
    return str.slice(0, -1)
}

console.log(queryStr(queryObject))