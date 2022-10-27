//Convert all the string to title Caps in string array using Anonymous function
let stringCapsCheck = function (arr){

    let result = [];
    for(var i=0; i<arr.length; i++){
        
        var name = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        result.push(name);

//console.log(name);

}
return result;
}

console.log(stringCapsCheck(["sumathi", "edwin", "galwin", "gafna", "faith"]));