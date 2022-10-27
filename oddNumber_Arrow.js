//Print odd numbers using Arrow function
 let number = (arr) => {
    for(let i=0; i<arr.length; i++){

        if((arr[i]%
            2) != 0){

            console.log(arr[i]);

        }
    } 

}

number([21, 22, 23, 24, 25, 26]);