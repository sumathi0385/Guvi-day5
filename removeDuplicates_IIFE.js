(function (arr){

    let newArray = [];

    for(let i of arr){        

        if(newArray.indexOf(i)===-1){
            newArray.push(i);
        }
    }
    console.log(newArray) ;

})

([2, 3, 6, 4, 2, 5, 3, 6]);