// 9 - Write a simple JavaScript program to join all elements of the
// following array into a string.
// Sample array : myColor = ["Red", "Green", "White", "Black"];
//  *** Expected Output:
//  "Red,Green,White,Black"
//  "Red,Green,White,Black"
//  "Red+Green+White+Black"


function arrayToString(arrayOfElements){
    const result = arrayOfElements.join("+");
    return result;
}



myColor = ["Red", "Green", "White", "Black"];


console.log (arrayToString(myColor));
