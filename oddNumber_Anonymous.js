//Print odd numbers using anonymous function
var odd = function (arr){

    var result = [];
    for(var i=0; i<arr.length; i++){

        if((arr[i]%
            2) != 0){

                result.push(arr[i])           

        }
        
    } 
    return result;
};

console.log(odd([21, 22, 23, 24, 25, 26]));







