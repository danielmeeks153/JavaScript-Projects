function addition_Function() {//Here is the basic function we will use several times here to demonstrate our practice 
    var addition = 2 + 2; 
    document.getElementById("Math").innerHTML = "2 + 2 =" + addition; 
} 

function subtraction_Function() {//name of function
    var Subtraction = 5 - 2; //what our var is
    document.getElementById("Math").innerHTML= "5 - 2 = " + Subtraction // this is how our code shows up in our HTML file 
} 

function multiplication_Function() { // all the functions here are the same except for the name and operator 
    var Subtraction = 6 * 8; 
    document.getElementById("Math").innerHTML= "6 * 8 = " + Subtraction
}

function division_Function() {
    var Subtraction = 48 / 6; 
    document.getElementById("Math").innerHTML= "48 / 6 = " + Subtraction
} 

function more_Math() {
    var simple_Math = (1 + 2) * 10 / 2 -5; 
    document.getElementById("Math").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_Math; 
} 

function modulus_Operator() {
    var simple_math = 25 % 6 
    document.getElementById("Math").innerHTML = "When you divided 25 by 6 you have a remainder of: " + simple_math; 
} 

function negation_Operator() { 
    var x = 10; 
    document.getElementById("Math").innerHTML = -x; 
} 

var X = 5; //incrementing up 
X++; 
document.write(X);  

var Y = 5.25; //going down by one 
X--; 
document.write(Y) 

window.alert(Math.random()); //using the math.random function 
window.alert(Math.random() * 100);  
window.alert(Math.PI); 
