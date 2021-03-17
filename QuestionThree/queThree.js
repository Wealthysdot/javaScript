// 3 - Write a JavaScript program to find the area of a scalene triangle
// where lengths of the three of its sides are 5, 6, 7.
function scaleneTriangle(a,b,c){
    var a = 5;
    var b = 6;
    var c = 7;

   s = ((a + b + c) / 2);

   Area = (s*(s-a)*(s-b)*(s-c))**2;

   return Area;
   
}


console.log(scaleneTriangle(5,6,7));