//Return all the palindromes in an array using Arrow function
let palindromeText = (arr) => {
    let result = [];
    
    for(var i=0; i<arr.length; i++){

        let newString = "";

    for (let k = arr[i].length - 1; k >= 0; k--) {
        newString += arr[i][k];
    }        

//console.log(newString);

if(arr[i] === newString){

    //return `The String "${arr[i]} is palindrom`;

    result.push(arr[i]);
}

}

return result;
}

console.log(palindromeText(["sumathi", "edwin", "madam", "gafna", "liril"]));