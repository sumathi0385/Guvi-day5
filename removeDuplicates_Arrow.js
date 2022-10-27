let uniqueArray = (arr) => {

    let newArray = [];

    for(let i of arr){        

        if(newArray.indexOf(i)===-1){
            newArray.push(i);
        }
    }
    return newArray;

}

console.log(uniqueArray([2, 3, 6, 4, 2, 5, 3, 6]));