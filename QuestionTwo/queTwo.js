 // //    2- Write a JavaScript program to check from two given integers,
        // // whether one is positive and another one is negative.

    function integers(a,b){
        
        if (a < 0){
            document.write(a +" "+ "is negative <br> ");
        }
        else
            document.write(a +" "+ "is positive <br>");

        if (b > 0 )    
            document.write(b + " is positive <br>");
        else 
            document.write(b + "is negative <br>");
        
        }

    let a = Number(prompt("enter value"))
    let b = Number(prompt("enter value"))
    integers(a, b);

            
    