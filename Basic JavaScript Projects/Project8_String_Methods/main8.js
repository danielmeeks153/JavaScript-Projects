function full_Sentence() { // using the concat method to put a whole sentence together using vars 
    var part_1 = "I have "; 
    var part_2 = "made this "; 
    var part_3 = "into a complete "; 
    var part_4 = "sentence."; 
    var whole_sentence = part_1.concat(part_2, part_3, part_4); 
    document.getElementById("Concatenate").innerHTML = whole_sentence; 
} 

function slice_Method() {//slicing our string so that it only displays the word "Johnny"
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section; 
    
} 

function string_Method() {//turing our integer into a string 
    var X = 182; 
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

function precision_method() {//making a long number only show how many places we pick
    var X = 1231.46456465; 
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}

var Dan = "Daniel"; //turn a string uppercase 
document.write(Dan.toUpperCase());  

function fixed_method() {//how many decimal places we want 
    var X = 1231.46456465; 
    document.getElementById("fixed").innerHTML = X.toFixed(4);
} 

function value_method() {//returns primitive value of string 
    var X = 1231.46456465; 
    document.getElementById("value").innerHTML = X.valueOf(); 
}