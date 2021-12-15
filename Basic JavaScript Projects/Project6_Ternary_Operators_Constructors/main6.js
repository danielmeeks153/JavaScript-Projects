document.write("10" + 5); //project5 started 

function my_Function() {
    document.getElementById("Test").innerHTML = 0/0; 
} 

function my_Function2() {
    document.getElementById("Test").innerHTML = isNaN('007')
}

function my_Function3() {
    document.getElementsByID("Test").innerHTML = isNaN('This is a string');
}
 
document.write(2E310);
document.write(-2E310); 

document.write(10 > 2); 
document.write(10 < 2); 

console.log(2 + 2) 

document.write(10 == 10); 
document.write(3 ==11);  

X = 10; 
Y = 10; 
document.write(X === Y);  

A = 82; 
B = "82";
document.write(A === B);  

C = "Magnus"; 
D = "Magnus"; 
document.write(C === D); //using the operator that if you want a true output need to be the same kind of information as well. 

document.write(5 > 2 && 10 > 4); // using different operators to get a true or false statement 

document.write(5 > 10 && 10 > 4);// using different operators to get a true or false statement 

document.write(5 > 10 || 10 > 4);// using different operators to get a true or false statement 

document.write(5 > 10 || 10 > 20);// using different operators to get a true or false statement 

function not_Function() {
    document.getElementById("Not").innerHTML = !(20 > 10);
}

function notnot_Function() {
    document.getElementById("Not").innerHTML = !(5 > 10);
}

// Project6 start 
document.write(Bigger = (5 > 1) ? "Left Number is bigger":"Right number is bigger"); 

function Vote_Function() {
    var Height, Can_ride; 
    Height = document.getElementById("Height").value; 
    Can_ride = (Height < 18) ? "You are too young":"You are old enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to vote.";
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_make = Make; 
    this.Vehicle_Model = Model; 
    this.Vehicle_Year = Year; 
    this.Vehicle_Color = Color; 
}
 
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erick = new Vehicle("Ford", "Pinto", 1971, "Mustard"); 

function myFunction() {
    document.getElementById("New_and_This").innerHTML = 
    "Erik drives a " + Erick.Vehicle_Color + "-colored " + Erick.Vehicle_Model + " manufactured in " + Erick.Vehicle_Year; 
}