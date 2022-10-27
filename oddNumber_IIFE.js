//Print odd numbers using IIFE function
(function (arr){
    for(let i=0; i<arr.length; i++){

        if((arr[i]%
            2) != 0){

            console.log(arr[i]);

        }
    } 

})

([21, 22, 23, 24, 25, 26]);

