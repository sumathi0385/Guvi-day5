//Print prime numbers numbers using IIFE function
var newArray = (arr) => {

    for(var k=0; k<arr.length; k++){
    
        if (arr[k] > 1) {
    
            var isPrime = true;
    
            // looping through 2 to number-1
            for (var i = 2; i < arr[k]; i++) {
                if (arr[k] % i == 0) {
                    isPrime = false;
                    break;
                }
            }
        
            if (isPrime) {
                console.log(`${arr[k]} is a prime number`);
            } //else {
            //    console.log(`${number} is a not prime number`);
            //}
        }    
    
    
    }
    }
    
    newArray([2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);