//Sum of numbers in an array using Arrow function
let total = (arr) => {
    let sum=0;
    for(let i=0; i<arr.length; i++){

        sum = sum + arr[i];
    } 

    console.log(`Sum of all array number is: ${sum}`)

}

total([2, 4, 6, 8, 10]);