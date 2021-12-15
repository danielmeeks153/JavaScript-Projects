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
    var A = 10; 
    document.write(X + 20 + "<br>"); 
}
function Add_numbers_2() {
    document.write(X + 100);
} 
Add_numbers_1(); 
Add_numbers_2(); 

function Add_numbers_1() {//incorrect statement 
    var X = 10;
    console.log(15 + X);
}

function Add_numbers_2() {
    console.log(X + 100); 
}

Add_numbers_1();
Add_numbers_2(); 

if (1 < 2) {
    document.write("The left number is smaller than the number on the right.")
}

function get_date() {//using if statements 
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
} 

if (5 < 6) {
    document.write("Both numbers are not the same");
} 

//using else statements 
function Age_Function() {
    Age = document.getElementById("Age").value; 
    if (Age >= 18) {
        Vote = "You are old enough to vote!"; 
    }
    else {
        Vote = "You are not old enough to vote!"
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote; 
} 

function Time_Function() { //name of function
    var Time = new Date().getHours(); //declaring the var of Time
    var Reply; //what we are going to show the user
    if (Time < 12 == Time > 0) { 
        Reply = "It is morning time!"; 
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon."; 
    } 
    else {
        Reply = "It is evening time."; 
    }
    document.getElementById("Time_of_day").innerHTML = Reply; 
}