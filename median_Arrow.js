let median = (arr1, arr2) =>{

    let arr3 = [...arr1, ...arr2];

    console.log(arr3.sort(function(a, b){return a-b}));

    var length = arr3.length;

    console.log(length);

    if(length % 2 == 0){        

        let result = (arr3[(length/2)-1] + arr3[(length/2)])/2 
        return result;       

    } else {

        let result1 = arr3[(length-1)/2];
        return result1;
        
    }
};

console.log(median([10, 5, 11], [43, 7, 13, 48]));