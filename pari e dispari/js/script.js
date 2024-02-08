let userChoice;
let userNumber;
let computerChoice;
let sum;
let result;
let winner;
let odd = "dispari";
console.log(odd)
let even = "pari";
console.log(even)

function randomComputer5() {
    return Math.floor(Math.random() * 5) + 1;
}




function pariODispari() {
    if(!isNaN(userNumber) && userNumber <= 5){
        if (sum % 2 == 0) {
            return "Pari";
        } else {
            return "Dispari";
        }
    }else{
        alert("inserisci un numero da 1 a 5")
    }
   
}





let myButton = document.querySelector("button").addEventListener("click",
    function () {

        computerChoice = randomComputer5();
        console.log(computerChoice)
        userNumber = Number(document.getElementById("userNumber").value);
        sum = computerChoice + userNumber;
        console.log("La somma è " + sum)
        result = pariODispari();
        console.log("il risultato é " + result);

        userChoice = document.getElementById("userChoice").value;



        if (userChoice !== even && userChoice !== odd){

            alert("inserisci o Pari o Dispari")
        }else{
            if (userChoice.toUpperCase() !== result.toUpperCase()) {
                winner = document.querySelector("p").innerHTML = `${result}! <br> Hai perso perché hai scelto ${userChoice}! <br> Il computer ha scelto ${computerChoice} e tu hai scelto ${userNumber}! <br> Ritenta!`
            } else {
                winner = document.querySelector("p").innerHTML = `${result}! <br> Hai vinto perché hai scelto ${userChoice}! <br> Il computer ha scelto ${computerChoice} e tu hai scelto ${userNumber}! <br> Complimenti!`
    
            }
        }
           
        
        

        document.getElementById("userNumber").value = "";
        document.getElementById("userChoice").value = "";

    }
)









