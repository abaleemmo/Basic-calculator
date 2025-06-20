// variables
    // number buttons
        let zeroButton = document.querySelector(".zero-button");
        let oneButton = document.querySelector(".one-button");
        let twoButton = document.querySelector(".two-button");
        let threeButton = document.querySelector(".three-button");
        let fourButton = document.querySelector(".four-button");
        let fiveButton = document.querySelector(".five-button");
        let sixButton = document.querySelector(".six-button");
        let sevenButton = document.querySelector(".seven-button");
        let eightButton = document.querySelector(".eight-button");
        let nineButton = document.querySelector(".nine-button");

    // operation buttions 
        let divisionButton = document.querySelector(".division-button");
        let multiplicationButton = document.querySelector(".multiplication-button");
        let additionButton = document.querySelector(".addition-button");
        let subtractionButton = document.querySelector(".subtraction-button");
        let clearButton = document.querySelector(".clear-button");
        let enterButton = document.querySelector(".enter-button")

    // inputs 
        let input1 = "";
        let operation;
        let inputChange = false;
        let input2 = "";

    // displays
        let resultDisplay = document.querySelector(".result-display");
        let result;
        let input1Display = document.querySelector(".input1-display");
        let input2Display = document.querySelector(".input2-display");
        let operationDisplay = document.querySelector(".operation-display");
        let inputChangeDisplay = document.querySelector(".input-change-display");

// functions 

// buttons 

    // operation buttons 
    divisionButton.addEventListener("click", function(){
        operation = "division";
        inputChange = true;
        operationDisplay.innerHTML = operation;
        inputChangeDisplay.innerHTML = inputChange;
    });
    multiplicationButton.addEventListener("click", function(){
        operation = "multiplication";
        inputChange = true;
        operationDisplay.innerHTML = operation;
        inputChangeDisplay.innerHTML = inputChange;
    });
    additionButton.addEventListener("click", function(){
        operation = "addition";
        inputChange = true;
        operationDisplay.innerHTML = operation;
        inputChangeDisplay.innerHTML = inputChange;
    });
     subtractionButton.addEventListener("click", function(){
        operation = "subtraction";
        inputChange = true;
        operationDisplay.innerHTML = operation;
        inputChangeDisplay.innerHTML = inputChange;
    });
     clearButton.addEventListener("click", function(){
        operation = "";
        input1 = "";
        input2 = "";
        inputChange = false;
        input1Display.innerHTML = input1;
        input2Display.innerHTML = input2;
        operationDisplay.innerHTML = operation;
        inputChangeDisplay.innerHTML = inputChange;
    });

    // number buttons 
    zeroButton.addEventListener("click", function(){
        console.log(inputChange);
        if (inputChange === false){
            input1 = input1 + "0";
            input1 = parseInt(input1);
            input1Display.innerHTML = input1;
        }
        else if (inputChange === true){
            input2 = input2 + "0";
            input2 = parseInt(input2);
            input2Display.innerHTML = input2;
        }
    });
    oneButton.addEventListener("click", function(){
        if (inputChange === false){
            input1 = input1 + "1";
            input1 = parseInt(input1);
            input1Display.innerHTML = input1;
        }
        else if (inputChange === true){
            input2 = input2 + "1";
            input2 = parseInt(input2);
            input2Display.innerHTML = input2;
        }
    });
    twoButton.addEventListener("click", function(){
        if (inputChange === false){
            input1 = input1 + "2";
            input1 = parseInt(input1);
            input1Display.innerHTML = input1;
        }
        else if (inputChange === true){
            input2 = input2 + "2";
            input2 = parseInt(input2);
            input2Display.innerHTML = input2;
        }
    });
    threeButton.addEventListener("click", function(){
        if (inputChange === false){
            input1 = input1 + "3";
            input1 = parseInt(input1);
            input1Display.innerHTML = input1;
        }
        else if (inputChange === true){
            input2 = input2 + "3";
            input2 = parseInt(input2);
            input2Display.innerHTML = input2;
        }
    });
    fourButton.addEventListener("click", function(){
        if (inputChange === false){
            input1 = input1 + "4";
            input1 = parseInt(input1);
            input1Display.innerHTML = input1;
        }
        else if (inputChange === true){
            input2 = input2 + "4";
            input2 = parseInt(input2);
            input2Display.innerHTML = input2;
        }
    });
    fiveButton.addEventListener("click", function(){
        if (inputChange === false){
            input1 = input1 + "5";
            input1 = parseInt(input1);
            input1Display.innerHTML = input1;
        }
        else if (inputChange === true){
            input2 = input2 + "5";
            input2 = parseInt(input2);
            input2Display.innerHTML = input2;
        }
    });
    sixButton.addEventListener("click", function(){
        if (inputChange === false){
            input1 = input1 + "6";
            input1 = parseInt(input1);
            input1Display.innerHTML = input1;
        }
        else if (inputChange === true){
            input2 = input2 + "6";
            input2 = parseInt(input2);
            input2Display.innerHTML = input2;
        }
    });
    sevenButton.addEventListener("click", function(){
        if (inputChange === false){
            input1 = input1 + "7";
            input1 = parseInt(input1);
            input1Display.innerHTML = input1;
        }
        else if (inputChange === true){
            input2 = input2 + "7";
            input2 = parseInt(input2);
            input2Display.innerHTML = input2;
        }
    });
    eightButton.addEventListener("click", function(){
        if (inputChange === false){
            input1 = input1 + "8";
            input1 = parseInt(input1);
            input1Display.innerHTML = input1;
        }
        else if (inputChange === true){
            input2 = input2 + "8";
            input2 = parseInt(input2);
            input2Display.innerHTML = input2;
        }
    });
    nineButton.addEventListener("click", function(){
        if (inputChange === false){
            input1 = input1 + "9";
            input1 = parseInt(input1);
            input1Display.innerHTML = input1;
        }
        else if (inputChange === true){
            input2 = input2 + "9";
            input2 = parseInt(input2);
            input2Display.innerHTML = input2;
        }
    });

    // enter button 
    enterButton.addEventListener("click", function(){
        if (operation === "addition"){
            result = input1 + input2;
            resultDisplay.innerHTML = result;
        }
        else if (operation === "subtraction"){
            result = input1 - input2;
            resultDisplay.innerHTML = result;
        }
        else if (operation === "multiplication"){
            result = input1 * input2;
            resultDisplay.innerHTML = result;
        }
        else if (operation === "division"){
            result = input1 / input2 ; 
            resultDisplay.innerHTML = result;
        }
    });