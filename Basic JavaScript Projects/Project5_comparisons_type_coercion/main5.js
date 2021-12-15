
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
document.write(C === D); 

document.write(5 > 2 && 10 > 4);

document.write(5 > 10 && 10 > 4);

document.write(5 > 10 || 10 > 4);

document.write(5 > 10 || 10 > 20);

function not_Function() {
    document.getElementById("Not").innerHTML = !(20 > 10);
}

function notnot_Function() {
    document.getElementById("Not").innerHTML = !(5 > 10);
}

