//Convert all the string to title Caps in string array using Arrow function
var newArray = (arr) => {
    for(var i=0; i<arr.length; i++){
        
        var name = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)

console.log(name);

}
}

newArray(["sumathi", "edwin", "galwin", "gafna", "faith"]);