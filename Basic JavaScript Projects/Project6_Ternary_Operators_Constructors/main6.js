// Project6 start 
document.write(Bigger = (5 > 1) ? "Left Number is bigger":"Right number is bigger"); //using ternary operator to see which number is bigger 

function Vote_Function() { //Voting function that allows you to enter your age and see if you are old enough to vote 
    var Height, Can_ride; 
    Height = document.getElementById("Height").value; 
    Can_ride = (Height < 18) ? "You are too young":"You are old enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to vote.";
}

function Vehicle(Make, Model, Year, Color) { // start to our function that shows who drives what kind of car. This part is making keys and values. 
    this.Vehicle_make = Make; 
    this.Vehicle_Model = Model; 
    this.Vehicle_Year = Year; 
    this.Vehicle_Color = Color; 
}
 
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red"); //making our var's 
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erick = new Vehicle("Ford", "Pinto", 1971, "Mustard"); 

function myFunction() { //the function that will show the information of the people and what kind of car 
    document.getElementById("New_and_This").innerHTML = 
    "Erik drives a " + Erick.Vehicle_Color + "-colored " + Erick.Vehicle_Model + " manufactured in " + Erick.Vehicle_Year; 
} 

function Nested_Function() { //nested function that allows us to add one to a number 
    document.getElementById("Counting").innerHTML = Count()
    function Count() {
        var Starting_point = 9; 
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point; 
    }
} 

//scope 

var X = 10; //global variable
function Add_numbers_1() {
    document.write(20 + X + "<br>"); 
} 
function Add_numbers_2() {
    document.write(X + 100); 
}
Add_numbers_1(); 
Add_numbers_2();  

function Add_numbers_1() {//local var
    var X = 10; 
    document.write(X + 20 + "<br>"); 
}
function Add_numbers_2() {
    document.write(X + 100);
} 
Add_numbers_1(); 
Add_numbers_2(); 

