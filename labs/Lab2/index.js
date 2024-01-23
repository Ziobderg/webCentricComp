//The const variable has a Block Scope
// let and const keywords were added to js in 2015
const PI = 3.14159;

var chosenRadius = 6

var chosenLength = 20;
var chosenWidth = 15;

function circleArea(radius){
    return PI * (radius^2);
}

function add(v1, v2){
    return v1 + v2;
}

function subtract(v1, v2){
    return v1 - v2;
}

function multiply(v1, v2){
    return v1 * v2;
}

function divide(v1, v2){
    return v1 / v2;
}

//functionally the same as the multiply function
function rectArea(length, width){
    return length * width;
}