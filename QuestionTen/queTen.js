// 10 - Write a JavaScript program to compute the sum and product of
// an array of integers.

var sum = 0;
var product = 1;
function arrayOfInteger(array){
    // let array = [];
    for(let i = array.length -1; i >= 0; i--){
        sum += array[i];
        product *= array[i]; 

    }
    return array;
    // document.write("Sum of integers are" +" "+ sum +" "+ "and the products are" + " "+ product);
}

var array = [2,3,4];
console.log(arrayOfInteger(array));