var submit = document.getElementById("submit-button");
var selectDiv = document.getElementById("selectDiv");
var weekdaySelector = document.getElementById("weekdays");
var numInput = document.getElementById("numInput");
var messageDisplay = document.getElementById("messageDisplay");


weekdaySelector.addEventListener("change", changeColor);
submit.addEventListener("click", checkNumber, false);

function changeColor(){
    var selectedDay = weekdaySelector.value;

    switch(selectedDay) {
        case "monday":
            color = "red";
            break;
        case "tuesday":
            color = "orange";
            break;
        case "wednesday":
            color = "yellow";
            break;
        case "thursday":
            color = "green";
            break;
        case "friday":
            color = "cyan";
            break;
        case "saturday":
            color = "blue";
            break;
        case "sunday":
            color = "purple";
            break;
    }

    selectDiv.style.backgroundColor = color;
}

function checkNumber(){
    var number = numInput.value;
    var message = "The number is ";

    if(number % 2 == 0){
        message += "Even, ";
    } else {
        message += "Odd, ";
    }

    if(isPrime(number)){
        message += "Prime, ";
    } else {
        message += "Composite, ";
    }

    switch(true) {
        case (number <= 50):
            message += "and less than or equal to 50";
            break;
        case (50 < number && number <= 75):
            message += "and between 50 and 75";
            break;
        case (75 < number && number <= 100):
            message += "and between 75 and 100";
            break;
        case (number > 100):
            message += "and over 100";
            break;
    }
    messageDisplay.innerHTML = message;
}

// https://medium.com/@stheodorejohn/determining-prime-numbers-in-javascript-logic-and-code-optimization-14e02e1d9cad#:~:text=Simple%20Code%20Snippet%3A&text=console.,must%20be%20greater%20than%201.
function isPrime(number){
    if (number < 2) {
        return false;
      }
    
      for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
          return false;
        }
      }
    
      return true;
}