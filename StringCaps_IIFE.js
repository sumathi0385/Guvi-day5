//Convert all the string to title Caps in string array using IIFE function
(function (arr){
    for(var i=0; i<arr.length; i++){
        
        var name = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)

console.log(name);

}
})

(["sumathi", "edwin", "galwin", "gafna", "faith"]);