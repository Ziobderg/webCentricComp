let submit = document.getElementById("submit-button");
let selectDiv = document.getElementById("selectDiv");
let numInput = document.getElementById("numInput");
let primeMessage = document.getElementById("primeMessage");
let compMessage = document.getElementById("compMessage");
let neitherMessage = document.getElementById("neitherMessage");


submit.addEventListener("click", checkNumbers, false);

function checkNumbers(){
    let numbers = numInput.value;

    // Using built-in split function to turn user string input into an array
    let numbersArray = numbers.split(',');
    let primeCount = 0;
    let compCount = 0;
    let neitherCount = 0;

    //Separated each check in order to use all different loop types
    //Could have also been done in one loop
    
    //Prime check
    numbersArray.forEach((num) => {
        if(isPrime(num) == "prime"){
            primeCount++;
        }
    });

    //Composite check
    for(let num of numbersArray){
        if(isPrime(num) == "composite"){
            compCount++;
        }
    }

    //Neither check
    numbersArray.map((num => {
        if(isPrime(num) == "neither"){
            neitherCount++;
        }
    }));
    
    //Display messages on DOM
    primeMessage.innerHTML = "Prime: " + primeCount;
    compMessage.innerHTML = "Composite: " + compCount;
    neitherMessage.innerHTML = "Neither: " + neitherCount;
}

// https://medium.com/@stheodorejohn/determining-prime-numbers-in-javascript-logic-and-code-optimization-14e02e1d9cad#:~:text=Simple%20Code%20Snippet%3A&text=console.,must%20be%20greater%20than%201.
function isPrime(number){
    if (number < 2) {
        return "neither";
      }
    
      for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
          return "composite";
        }
      }
    
      return "prime";
}