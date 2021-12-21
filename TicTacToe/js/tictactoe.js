//This variable keeps track of whose turn it is.
let activePlayer = 'X';
//This array stores an array of moves. We use this to determine win conditions.
let selectedSquares = [];


//This function is for placing an x or o in a square.
function placeXOrO (squareNumber) {
    //This condition ensures a square hasn't been selected already.
    //The .some () method is used to check each element of selectedSquare array
    //to see if it contains the square number clicked on.
    if (!selectedSquares.some(element => element.includes (squareNumber))) {
        //This variable retrieves the html element is that was clicked.
        let select = document.getElementById(squareNumber);
        //This condition checks who's turn it is.
        if (activePlayer === 'X') {
            //If activePlayer is equal to 'X', the x.png is placed in HTML.
            select.style.backgroundImage = 'url("images/o.png")';
            //Active player may only be 'X' or 'o' so, if not 'X' it must be 'o'
        } else {
            //If activePlayer is equal to 'o', the o.png is placed in HTML.
            select.style.backgroundImage = 'url("images/o.png")';
        }
        // squareNumber and activePlayer are concatenated together and added to array.
        selectedSquares.push(squareNumber + activePlayer);
        //This calls a function to check for any win conditions.
        checkWinConditions();
        //This condition is for changing the active player.
        if (activePlayer === 'X') {
            //If active player is 'X' change it to 'o'.
            activePlayer = '0';
            //If active player is anything other than 'X'.
        } else {
        //Change the activePlayer to 'X'
        activePlayer = 'X'; 

        //This function plays placement sound. 
        audio('./media/place.mp3'); 
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
        audio ('./media/tie.mp3');
        setTimeout(function () { resetGame(); }, 1000); 

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
} 

//This function makes our body element temporarily unclickable.
function disableClick() {
    //This makes our body unclickable.
    body.style.pointerEvents = 'none';
    //This makes our body clickable again after 1 second.
    setTimeout (function() {body.style.pointerEvents = 'auto';}, 1000);
    }
    
    
    //This function takes a string parameter of the path you set earlier for
    //placement sound ('./media/place.mp3')
    function audio(audioURL) {
    //We create a new audio object and we pass the path as a parameter.
    let audio = new Audio(audioURL) ;
    //Play method plays our audio sound.
    audio.play();
    }


//This function utilizes html canvas to draw win lines.
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    //This line accesses our html canvas element.
    const canvas = document.getElementById('win-lines');
    //Tais line gives us access to methods and properties to use on canvas.
    const c = canvas.getContext('2d');
    //This line indicates where the start of a lines x axis is.
    let x1 = coordX1,
    //Tais line indicates where the start of a lines y axis is.
    yl = coordY1,
    //This line indicates where the end of a lines x axis is.
    x2 = coordX2,
    //This line indicates where the end of a lines x axis is.
    y2 = coordY2,
    //This variable stores temporary x axis data we update in our animation loop.
    x= xl,
    //This variable stores temporary y axis data we update in our animation loop.
    y = y1; 

    //This function interacts with the cavnas
function animateLineDrawing() {
    //This variable creates a loop.
    const animationLoop = requestAnimationFrame (animateLineDrawing);
    //Tnis method clears content from last loop iteration.
    c.clearRect (0, 0, 608, 608)
    //Tais method starts a new path
    c.beginPath();
    // This method moves us to a starting point for our line.
    c.moveTo(x1, y1)
    // This method indicates the end point in our line.
    c.lineTo(x, y)
    // This method sets the width of our line.
    c.lineWidth = 10;
    //This method sets the color of our line.
    c.strokeStyle = 'rgba(70, 255, 33, .8)';
    //This method draws everything we laid out above.
    c.stroke();
    //Tais condition checks if we've reached the endpoint.
    if (x1 <= x2 && yl <= y2) {
        //This condition adds 10 to the previous end x point.
        if (x < x2) { x += 10; }
        //This condition adds 10 to the previous end y point.
        if (y < y2) { y2 += 10;}
        //Tais condition cancels our animation loop
        //4£ we've reach the end points.
        if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop); }
    
     
    
     
    //This condition is similar to the one above.
    //This is necessary for the 6, 4, 2 win condition
    if (x1 <= x2 && yl >= y2) {
        if (Ge < x2) {x += 10; }
        if (y > y2) { y -= 10; }
        if (x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop) ; }
        }
    }
} 

//Tnis function clears our canvas after our win line is drawn.
function clear() {
    //Tais line starts our animation loop.
    const animationLoop = requestAnimationFrame(clear);
    //This line clears our canvas.
    c.clearRect(0, 0, 608, 608);
    //This line stops our animation loop.
    cancelAnimationFrame (animationLoop);
}
    //This line disallows clicking while the win sound is playing
    disableclick();
    //This line plays the win sounds.
    audio('./media/winGame.mp3');
    //This line calls our main animation loop.
    
    animateLineDrawing();
    //This line waite 1 second. Then, clears canvas, resets game, and allows clicking again.
    
    setTimeout(function () { clear(); resetGame(); }, 1000);
} 

function resetGame() {
    for (let i = 0; i < 9; i++) {
        let square = document.getElementById(String(i))
        square.style.background = ''
    }
    selectedSquares = [];
}