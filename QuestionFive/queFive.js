 // 5 - Write a function addWithSubcharge that adds two amounts with
        // subcharge. For each amount less than or equal to 10, the subcharge
        // is 1. For each amount greater than 10, the subcharge is 2.

        function addWithSubcharge (int1, int2){
        
            addAmount = int1 + int2;
               if(addAmount <= 10){
                document.write("1");
               }
               if (addAmount > 10){
                document.write("2");
           }
           }

           let int1 = Number(prompt("enter value"));
            let int2 = Number(prompt("enter value"));
            addWithSubcharge(int1, int2);
       