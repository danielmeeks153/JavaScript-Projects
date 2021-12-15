function addition_Function() {//Here is the basic function we will use several times here to demonstrate our practice 
    var addition = 2 + 2; 
    document.getElementById("Math").innerHTML = "2 + 2 =" + addition; 
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
 
function my_Dictionary() { //project4 start 
    var Animal = {
        Species:"Dog", 
        Color:"Black", 
        Breed:"Labrador", 
        Age:5, 
        Sound:"Bark!"
    }; 
    delete Animal.Sound; 
    document.getElementById("Dictionary").innerHTML = Animal.Species; 
} 

document.write(typeof "Word");

document.write(typeof 3); 

document.write("10" + 5); 
