let newArr = [ 3, 6, 12, 45, 5, 21, 34, 56, 97, 4, 11, 9, 15, 1]

function deleteOrNot(num) {
    if(num > 10) {
        return false
    }
    return true
};

function deleteItem(arr, fn) {
    let emptyArr = [];
    for(let el of arr) {
        if(fn(el)) {
            emptyArr.push(el)
        }
    }
    return emptyArr;
}

console.log(deleteItem(newArr, deleteOrNot));