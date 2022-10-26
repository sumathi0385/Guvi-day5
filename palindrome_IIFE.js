//Return all the palindromes in an array using IIFE function
(function (arr){
        
    for(var i=0; i<arr.length; i++){

        let newString = "";

    for (let k = arr[i].length - 1; k >= 0; k--) {
        
        newString += arr[i][k];
    }        

//console.log(newString);

if(arr[i] === newString){

    console.log(`The String "${arr[i]} is palindrom`)
}

}
})

(["sumathi", "edwin", "madam", "gafna", "liril"]);