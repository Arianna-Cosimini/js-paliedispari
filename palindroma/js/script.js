let userChoice;
let result = document.querySelector("p");
function palindrome(word) {
    let reversedWord = "";
    let i = word.length - 1;
    
    while (i >= 0) {
        reversedWord += word[i];
        i--;
    }
    
    return reversedWord === word;
}


let myButton = document.querySelector("button").addEventListener("click",
    function () {


        userChoice = document.getElementById("userChoice").value;


        if (palindrome(userChoice)) {
            result.innerHTML = "La parola inserita è Palindroma.";
        } else {
            result.innerHTML = "La parola inserita non è Palindroma.";
        }
       

       
        document.getElementById("userChoice").value = "";

    }
)




