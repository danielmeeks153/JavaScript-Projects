function count_To_Ten() { //Step 1 while loop 
    var Digit = "";
    var X = 1; 
    while (X < 11) {
        Digit += "<br>" + X;
        X++; 
    }
    document.getElementById("Counting_To_Ten").innerHTML = Digit; 
} 

var text = "Hello World"; 
var length = text.length; 

// Step 2 for loops 
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet",, "Flute"];
var Content = "";
var Y; 
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
} 

function cat_pics() { //step 3 utilize an array 
    var Cat_Pictures = [];
    Cat_Pictures[0] = "sleeping";
    Cat_Pictures[1] = "playing";
    Cat_Pictures[2] = "eating";
    Cat_Pictures[3] = "purring";
    document.getElementById("Cat").innerHTML = "In this picture, the cat is " + Cat_Pictures[2] + ".";
}  

//scope 
function myFunction() {
    var carName = "Corvette";
    document.getElementById("Example").innerHTML = carName; 
}

function constant_function() {
    const Musical_Instrument = {type:"guitar", brand:"Fender", color: "black"};
    Musical_Instrument.color = "blue"; 
    Musical_Instrument.price = "$900"; 
    document.getElementById("Constant").innerHTML = "The cost of the " + Musical_Instrument.type + " was " + Musical_Instrument.price; 
} 

var A = 82; 
document.write(A);
{
    let A = 33; 
    document.write("<br>" + A)
}
document.write("<br>" + A) 

//Return Function 

let car = {
    make: "Dodge ",
    model: "Viper ", 
    year: "2021 ", 
    color: "red ", 
    description: function() {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
}; 
document.getElementById("Car_Object").innerHTML = car.description(); 

//break statement
let texty = "";
for (let i = 0; i < 10; i++) {
  if (i === 3) { break; }
  texty += "The number is " + i + "<br>";
}

document.getElementById("demo").innerHTML = texty; 

//Continue statement 
let texts = "";
for (let i = 0; i < 10; i++) {
  if (i === 3) { continue; }
  texts += "The number is " + i + "<br>";
}
document.getElementById("demos").innerHTML = texts;