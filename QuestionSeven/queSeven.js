// 7 - Write a JavaScript program to compute the sum of the two given
// integers. If the two values are same, then returns triple their sum.

function sumOfInteger(int1, int2){
    addNum = int1 + int2;
    if(int1 == int2){
        return 3 * addNum;
        
    }
    else
        return addNum;


}

console.log(sumOfInteger(3,3));
console.log(sumOfInteger(34,65));

