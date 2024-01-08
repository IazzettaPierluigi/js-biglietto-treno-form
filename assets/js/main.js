var btnGenerate = document.getElementById("generate");
btnGenerate.addEventListener("click",
    
    function () {
        var passengerName = document.getElementById("name").value;
     

        var km = document.getElementById("km").value;
       

        var age = document.getElementById("age").value;
       

        var ticketPrice = Math.floor(km * 0.21);
        var discount;
        var discountType;
        

        // calcolo sconto per età
        if (age == "minorenne") {
            discount = ticketPrice * 0.2; 
            discountType = "Sconto Bronze";
        } else if (age =="over65") {
            discount = ticketPrice * 0.4;
            discountType = "Sconto Silver";
        } else {
            discount = 0;
            discountType = "Biglietto standard";
        }

        // calcolo prezzo finale
        var finalPrice = ticketPrice - discount;
      
        // creazione dati biglietto in pagina
        document.getElementById("passenger").innerHTML = passengerName;
        document.getElementById("discount").innerHTML = discountType;
        document.getElementById("ticket-price").innerHTML = finalPrice + "€";

        var wagonNumber = Math.floor(Math.random() * 9) + 1;
        
        document.getElementById("wagon").innerHTML = wagonNumber;

        var cpCode = Math.floor(Math.random() * 10000) + 90000;
     
        document.getElementById("cp-code").innerHTML = cpCode;
        
        // apparizione sezione ticket
        document.getElementById("ticket-section").className = "bottom dblock";
    }   
 
)