//Rotate an array by k times using Anonymous function
let rotateArray = function (arr, k){

    console.log(`Original array is ${arr}`);

    for(let i=1; i<=k; i++){
        
        var removedItem = arr.shift();
        arr.push(removedItem);
    } 

    //console.log(arr.join(" "))
    return `Array after rotating by ${k} time: ${arr.join(" ")}`;

}

console.log(rotateArray([1, 2, 3, 4, 5], 3));