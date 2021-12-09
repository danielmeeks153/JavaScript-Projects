function My_First_Function() {//defining the name of the function 
    var str = " This text is green!";//text var
    var result = str.fontcolor("green");//what we are going to print var
    document.getElementById("Green_Text").innerHTML = result; //calling the var we want to sho
} 

function myFunction() { //name of the function
    var sentence = "I am learning"; //defining what we want to call
    sentence += " a lot from this book"; //concatenating the second part of the line 
    document.getElementById("Concatenate").innerHTML = sentence; //how we will affect the html file 
} 
 
 
function toCelsius(f) {
    return (5/9) * (f-32);
    document.getElementById("demo").innerHTML = toCelsius(77); 
  }
  

function addition_Function() {
    var addition = 2 + 2; 
    document.getElementById("Math").innerHTML = "2 + 2 =" + addition; 
}