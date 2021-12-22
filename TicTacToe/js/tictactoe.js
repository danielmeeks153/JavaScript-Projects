//This variable keeps track of whose turn it is.
let activePlayer = 'X';
let selectedSquares = [];//This array stores an array of moves. We use this to determine win conditions.


//This function is for placing an x or o in a square.
function placeXOrO (squareNumber) {//This condition ensures a square hasn't been selected already.//The .some () method is used to check each element of selectedSquare array//to see if it contains the square number clicked on.
    if (!selectedSquares.some(element => element.includes (squareNumber))) {//This variable retrieves the html element is that was clicked.
        let select = document.getElementById(squareNumber);//This condition checks who's turn it is.
        if (activePlayer === 'X') { //If activePlayer is equal to 'X', the x.png is placed in HTML.
            select.style.backgroundImage = 'url("images/TicX.jpg")';//Active player may only be 'X' or 'o' so, if not 'X' it must be 'o'
        } else {//If activePlayer is equal to 'o', the o.png is placed in HTML.
            select.style.backgroundImage = 'url("images/TicO.jpg")';
        }

        selectedSquares.push(squareNumber + activePlayer);//This calls a function to check for any win conditions.
        checkWinConditions(); //This condition is for changing the active player.
        if (activePlayer === 'X') {//If active player is 'X' change it to 'o'.
            activePlayer = '0'; //If active player is anything other than 'X'.
        } else { //Change the activePlayer to 'X'
        activePlayer = 'X'; //This function plays placement sound. 
        
        audio('./media/Sound1.wav'); 
        if(activePlayer === 'O') {
            disableClick();
            setTimeout(function () { computersTurn();}, 1000)
        }
        return true;
    } 

    function computersTurn() {
        let success = false; 
        let pickASquare; 
        while(!success) {
            pickASquare = String(Math.floor(Math.random() * 9));
            if (placeXOrO(pickASquare)) {
                placeXOrO(pickASquare);
                success = true;
            }
        }
    } 
    }
} 


function checkWinConditions() {
 
   if      (arrayIncludes('0X', 'lX', '2X')) { drawWinLine (50, 100, 558, 100) }
   else if (arrayIncludes('3X', '4X', '5X')) { drawWinLine (50, 304, 558, 304) }
   else if (arrayIncludes('6X', '7X', '8X')) { drawWinLine (50, 508, 558, 508) }
   else if (arrayIncludes('OX', '32', '6X')) { drawWinLine (100, 50, 100, 558) }
   else if (arrayIncludes('1X', '4X', '7X')) { drawWinLine (304, 50, 304, 558) }
   else if (arrayIncludes('2X', '5X', '8X')) { drawWinLine (508, 50, 508, 558) }
   else if (arrayIncludes('6X', '4X', '2X')) { drawWinLine (100, 508, 510, 90) }
   else if (arrayIncludes('OX', '4X', '8X')) { drawWinLine (100, 100, 520, 520) }
   else if (arrayIncludes('0O', '1O', '2O')) { drawWinLine (50, 100, 558, 100) }
   else if (arrayIncludes('3O', '4O', '5O')) { drawWinLine (50, 304, 558, 304) }
   else if (arrayIncludes('6O', '7O', '8O')) { drawWinLine (50, 508, 558, 508) }
   else if (arrayIncludes('0O', '3O', '6O')) { drawWinLine (100, 50, 100, 558) }
   else if (arrayIncludes('1O', '4O', '7O')) { drawWinLine (304, 50, 304, 558) }
   else if (arrayIncludes('2O', '5O', '3O')) { drawWinLine (508, 50, 508, 558) }
   else if (arrayIncludes('6O', '4O', '2O')) { drawWinLine (100, 508, 510, 90) }
   else if (arrayIncludes('0O', '4O', '8O')) { drawWinLine (100, 100, 520, 520) }
        else if (selectedSquares.length >= 9) {
        audio ('./media/Sound2.wav');
        setTimeout(function () { resetGame(); }, 1000); 
        }
    // This function checks if an array includes 3 strings. It is used to check for
//each win condition.
        
    function arrayIncludes (squareA, squareB, squareC) {
    // These 3 variables will be used to check for 3 in a row.
    const a = selectedSquares.includes (squareA)
    const b = selectedSquares.includes (squareB)
    const c = selectedSquares.includes (squareC)
    // If the 3 variables we pass are all included in our array true is
    //returned and our else if condition executes the drawWinLine function.
    if (a === true && b === true && c === true) { return true }
    }
}  

function disableClick() {
    body.style.pointerEvents = 'none';
    setTimeout(function() {body.style.pointerEvents = 'auto';}, 1000);
} 

function audio(audioURL) {
    let audio = new Audio(audioURL); 
    audio.play();
} 

function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    const canvas = document.getElementById('win-lines') 
    const c = canvas.getContext('2d');
    let x1 = coordX1, 
        y1 = coordY1, 
        x2 = coordX2, 
        y2 = coordY2, 
        x = x1, 
        y = y1; 

    function animateLineDrawing() {
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        c.clearRect(0, 0, 608, 608)
        c.beginPath();
        c.moveTo(x1, y1)
        c.lineTo(x, y)
        c.lineWidth = 10; 
        c.strokeStyle = 'rgba(70, 255, 33, .8)';
        c.stroke();
        if (x1 <= x2 && y1 <= y2) {
            if (x < x2) { x += 10; }
            if (y < y2) { y += 10; }
            if (x >= x2 && y >= y2) {cancelAnimationFrame(animationLoop); }
        }
        if (x1 <= x2 && y1 >= y2) {
            if (x < x2) { x += 10; }
            if (y > y2) { y -= 10; }
            if (x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop); }
        }
    }

    function clear() {
        const animationLoop = requestAnimationFrame(clear);
        c.clearRect(0, 0, 608, 608);
        cancelAnimationFrame(animationLoop);
    }
    disableClick(); 
    audio('./media/Sound3.wav');
    animateLineDrawing();
    setTimeout(function () { clear(); resetGame(); }, 1000);
} 

function resetGame() {
    for (let i = 0; i < 9; i++) {
        let square = document.getElementById(String(i))
        square.style.backgroundImage = ''
    }
    selectedSquares = [];
}


