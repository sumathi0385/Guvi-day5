//Print prime numbers using Anonymous function
let primeNumberCheck = function (arr){

    let result = [];

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
                //console.log(`${arr[k]} is a prime number`);

                result.push(arr[k]);
            } //else {
            //    console.log(`${number} is a not prime number`);
            //}
        }     
    
    }

    return `Prime numbers are ${result}`
    }
    
    console.log(primeNumberCheck([2, 3, 4, 5, 6, 7, 8, 9, 10, 11]));