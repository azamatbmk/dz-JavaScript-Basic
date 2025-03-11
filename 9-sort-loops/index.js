let arr = [1, 40, -5, 10, 0]

function sortItems (array) {

    for (let i = 0; i < array.length; i++) {
        for(let j = 0; j < array.length; j++){
            if(array[i] < array[j]){
                [array[i],array[j]] = [array[j], array[i]]
            }
        }
    }
    return array
}


console.log(sortItems(arr));