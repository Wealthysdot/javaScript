// 11 A Sandwich Calculator
// 1. Write a function called sandwich calculator. This should accept one value:
// slicesOfBread
// 2. The function should return the total number of possible sandwiches based
// on the amount of slices available, so if there are 10 slices, it should return
// 5. Test your function with an alert box.
// 3. Extend your function so it accepts two values, slicesOfBread and
// slicesOfCheese.
// 4. It takes two slices of bread and one of cheese to make a sandwich. The
// function should return the total number of possible sandwiches, so if there
// are 10 slices of bread, but only 1 of cheese, it should return 1. You'll need
// an if statement to make this work.

function sandwichCalculator(slicesOfBread){
    return parseInt(slicesOfBread/2)
}
// let slice = Number(prompt("enter number of bread slices"))
// document.write(sandwichCalculator(slice))

function cheeseSandwich(slicesOfBread,slicesOfCheese){
    slicesOfBread = (sandwichCalculator(slicesOfBread))
    if(slicesOfBread > slicesOfCheese){
        return slicesOfCheese
    }
    if(slicesOfBread < slicesOfCheese){
        return slicesOfBread
    }

    if(slicesOfBread == slicesOfCheese){
        return slicesOfBread
    }
}
let slicesOfBread = parseInt(prompt("enter number of bread slices"))
let slicesOfCheese = parseInt(prompt("enter number of cheese"))
document.write(cheeseSandwich(slicesOfBread,slicesOfCheese))


