const Calculator = {//Creates an object to keep track of values
    Display_Value: '0',//this is displays 0 on the screen 
    First_Operand: null,//this will hold the first operand for any7 expresssionsm,  we set it to null for now 
    Wait_Second_Operand: false, //this checks wether or not the second operrand has tbeen input 
    operator: null//this will hold the opeator, we set it to null for now 
}; 

function Input_Digit(digit) {//this modifies values each time a button is clicked
    const { Display_Value, Wait_Second_Operand } = Calculator; //we are cheching to see if wait second operand is ture and set 
    if (Wait_Second_Operand === true) {
        Calculator.Display_Value = digit; 
        Calculator.Wait_Second_Operand = false; 
    } else {
        Calculator.Display_Value = Display_Value === '0' ? digit : Display_Value + digit;
    }
} 

function Handle_Operator(Next_Operator) {
    const { First_Operand, Display_Value, operator } = Calculator
    const Value_of_Input = parseFloat(Display_Value);
    if (operator && Calculator.Wait_Second_Operand) {
        Calculator.operator = Next_Operator;
        return;
    }
    if(First_Operand == null) {
        Calculator.First_Operand = Value_of_Input;
    } else if (operator) {//checks if an operator already exists 
        const Value_Now = First_Operand || 0; 
        let result = Perform_Calculation[operator] (Value_Now, Value_of_Input);
        result = Number(result).toFixed(9)
        result = (result * 1).toString()
        Calculator.Display_Value = parseFloat(result); 
        Calculator.First_Operand = parseFloat(result);
    }
    Calculator.Wait_Second_Operand = true;
    Calculator.operator = Next_Operator; 
} 

const Perform_Calculation = {
    '/': (First_Operand, Second_Operand) => First_Operand / Second_Operand, 
    '*': (First_Operand, Second_Operand) => First_Operand * Second_Operand, 
    '+': (First_Operand, Second_Operand) => First_Operand + Second_Operand, 
    '-': (First_Operand, Second_Operand) => First_Operand - Second_Operand, 
    '=': (First_Operand, Second_Operand) => Second_Operand, 
}; 

function Calculator_Reset() {
    Calculator.Display_Value = '0';
    Calculator.First_Operand = null;
    Calculator.Wait_Second_Operand = false; 
    Calculator.operator = null;
}
// this function updates the screen wit hthe contnts of Dispaly_)Value 
function Update_Display() {
    const display = document.querySelector('.calculator-screen');
    display.value = Calculator.Display_Value;
}

Update_Display();
const keys = document.querySelector('.calculator-keys'); //this function monitors button clicks 
keys.addEventListener('click', (event) => {
    const { target } = event; //the target variable is an object taht represents the element that was clicked 
    if (!target.matches('button')) {//if the element that was clciked on is that a button, exit the function
        return; 
    }

    if (target.classList.contains('operator')) {
        Handle_Operator(target.value);
        Update_Display();
        return;
    }

    if (target.classList.contains('decial')) {
        Input_Decimal(target.value);
        Update_Display(); 
        return;
    }

    if (target.classList.contains('all-clear')) {
        Calculator_Reset();
        Update_Display();
        return;
    }

    Input_Digit(target.value);
    Update_Display();
})