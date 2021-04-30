var target = Math.floor(Math.random() * 500) + 555, wallet = 0, trys = 0, max_trys = Math.floor(Math.random() * 4) + 5;

function checkButton() { 
        var random = Math.floor(Math.random() * 1000) + 1;
        var money = Math.floor(Math.random() * 500) + 1;
        ++trys;
        
        if(random % 5 == 0) {
            wallet += money;
            
            if(wallet >= target || trys >= max_trys) {
                 document.querySelector("#display").innerHTML = "&#129297;WINNER! Refresh the page!&#129297;";    
                 trys = 0; wallet = 0;
                 max_trys = Math.floor(Math.random() * 4) + 5
                } else {
                   document.querySelector("#display").innerHTML = "&#128176;You have " + wallet + " / " + target + "$" + " and " + trys + " / " + max_trys + " attempts&#128176;";  
                    document.getElementById(alert('YOU WON ' + money + '$')).click();
                }

        } else {  
            
            if(trys < max_trys) {
                    document.querySelector("#display").innerHTML = "&#128176;You have " + wallet + " / " + target + "$" + " and " + trys + " / " + max_trys + " attempts&#128176;";  
                    document.getElementById(alert('Try Again :)')).click();         
                } else {
                    document.querySelector("#display").innerHTML = "&#129327;YOU LOST! Refresh the page! &#129312;";   
                    trys = 0; wallet = 0;
                    max_trys = Math.floor(Math.random() * 4) + 5
                }
                
        }

}               
