alert(" Hello World"); 
window.alert(" Hello World!");
document.write(' Hello, World'); 
var A = "\" This is a string"; 
document.write(A); 
document.write(" Hello World" + " goodbye world") 
var P = (" Here we are typing stuff" + " and more stuff") 
document.write(P)


var a = " one", b = " two", c = " three"; 
var a = a.fontcolor("blue"); 
document.write(a); 

var five = 5 
var six = 6 
document.write(five + six); 


function My_First_Function() {//defining the name of the function 
    var str = " This text is green!";//text var
    var result = str.fontcolor("green");//what we are going to print var
    document.getElementById("Green_Text").innerHTML = result; //calling the var we want to sho
}
