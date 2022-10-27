//Return all the palindromes in an array using Anonymous function
let palindrome = function (arr){

    let result = [];
        
    for(var i=0; i<arr.length; i++){

        let newString = "";

    for (let k = arr[i].length - 1; k >= 0; k--) {
        
        newString += arr[i][k];
    }  



    if(arr[i] == newString){

    result.push(arr[i]);
    
    }

    }
    return `The palindrome text are ${result}`;

    }

    console.log(palindrome(["sumathi", "edwin", "madam", "gafna", "liril"]));