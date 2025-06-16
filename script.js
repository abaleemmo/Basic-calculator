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

    // result display 
        let resultDisplay = document.querySelector(".result-display");
        let result;

// functions 

// buttons 

    // operation buttons 
    divisionButton.addEventListener("click", function(){
        operation = "division";
        inputChange = true;
    });
    multiplicationButton.addEventListener("click", function(){
        operation = "multiplication";
        inputChange = true;
    });
    additionButton.addEventListener("click", function(){
        operation = "addition";
        inputChange = true;
    });
    subtractionButton.addEventListener("click", function(){
        operation = "subtraction";
        inputChange = true;
    });
     subtractionButton.addEventListener("click", function(){
        operation = "subtraction";
        inputChange = true;
    });
     clearButton.addEventListener("click", function(){
        operation = "";
        input1 = "";
        input2 = "";
    });

    // number buttons 
    zeroButton.addEventListener("click", function(){
        if (inputChange = false){
            input1 = input1 + "0";
            input1 = parseInt(input1);
        }
        else if (inputChange = true){
            input2 = input2 + "0";
            input2 = parseInt(input2);
        }
    });
    zeroButton.addEventListener("click", function(){
        if (inputChange = false){
            input1 = input1 + "0";
            input1 = parseInt(input1);
        }
        else if (inputChange = true){
            input2 = input2 + "0";
            input2 = parseInt(input2);
        }
    });
    zeroButton.addEventListener("click", function(){
        if (inputChange = false){
            input1 = input1 + "0";
            input1 = parseInt(input1);
        }
        else if (inputChange = true){
            input2 = input2 + "0";
            input2 = parseInt(input2);
        }
    });
    zeroButton.addEventListener("click", function(){
        if (inputChange = false){
            input1 = input1 + "0";
            input1 = parseInt(input1);
        }
        else if (inputChange = true){
            input2 = input2 + "0";
            input2 = parseInt(input2);
        }
    });
    zeroButton.addEventListener("click", function(){
        if (inputChange = false){
            input1 = input1 + "0";
            input1 = parseInt(input1);
        }
        else if (inputChange = true){
            input2 = input2 + "0";
            input2 = parseInt(input2);
        }
    });
    zeroButton.addEventListener("click", function(){
        if (inputChange = false){
            input1 = input1 + "0";
            input1 = parseInt(input1);
        }
        else if (inputChange = true){
            input2 = input2 + "0";
            input2 = parseInt(input2);
        }
    });
    zeroButton.addEventListener("click", function(){
        if (inputChange = false){
            input1 = input1 + "0";
            input1 = parseInt(input1);
        }
        else if (inputChange = true){
            input2 = input2 + "0";
            input2 = parseInt(input2);
        }
    });
    zeroButton.addEventListener("click", function(){
        if (inputChange = false){
            input1 = input1 + "0";
            input1 = parseInt(input1);
        }
        else if (inputChange = true){
            input2 = input2 + "0";
            input2 = parseInt(input2);
        }
    });
    zeroButton.addEventListener("click", function(){
        if (inputChange = false){
            input1 = input1 + "0";
            input1 = parseInt(input1);
        }
        else if (inputChange = true){
            input2 = input2 + "0";
            input2 = parseInt(input2);
        }
    });
    zeroButton.addEventListener("click", function(){
        if (inputChange = false){
            input1 = input1 + "0";
            input1 = parseInt(input1);
        }
        else if (inputChange = true){
            input2 = input2 + "0";
            input2 = parseInt(input2);
        }
    });