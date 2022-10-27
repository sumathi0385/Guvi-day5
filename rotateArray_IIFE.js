//Rotate an array by k times using IIFE function
(function (arr, k){
    for(let i=1; i<=k; i++){
        
        var removedItem = arr.shift();
        arr.push(removedItem);
    } 

    console.log(arr.join(" "))

})

([1, 2, 3, 4, 5], 3);