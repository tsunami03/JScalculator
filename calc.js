let display = document.querySelector(".calc");
let buffer = "";
let currentValue = 0;

let numberButtons = document.querySelectorAll(".num");

//handling number buttons 

for (let i = 0; i < numberButtons.length - 1; i++) {
    numberButtons[i].addEventListener("click", function () {
        buffer += numberButtons[i].innerText;
        refreshDisplay();
    });
}

numberButtons[numberButtons.length - 1].addEventListener("click", function () {
    if (display.innerText != "0" || currentValue != 0) {
        buffer += 0;
        refreshDisplay();
    }
})

//handling math buttons

let mathButtons = document.querySelectorAll(".math");
let prevButton = document.querySelector(".math.addition");

for (let i = 0; i < mathButtons.length; i++) {
    mathButtons[i].addEventListener("click", function () {
        handleMath(prevButton.className);
        prevButton = mathButtons[i];
    })
}


function handleMath(className) {

    if (buffer == "") {
        resetDisplay();
        return;
    }

    switch (className) {
        case "math addition":
            currentValue += parseInt(buffer);
            break;
        case "math subtraction":
            currentValue -= parseInt(buffer);
            break;
        case "math division":
            currentValue /= parseInt(buffer);
            break;
        case "math multiplication":
            currentValue *= parseInt(buffer);
            break;
    }

    resetDisplay();
    buffer = "";

}


//showing final result

let equalButton = document.querySelector(".result");

equalButton.addEventListener("click", function () {
    handleMath(prevButton.className);
    prevButton = document.querySelector(".math.addition");
    display.innerText = currentValue;
})

//clear and backspace buttons

let clearButton = document.querySelector(".clear");
let backspaceButton = document.querySelector(".backspace");

clearButton.addEventListener("click", function () {
    currentValue = 0;
    buffer = "";
    resetDisplay();
})

backspaceButton.addEventListener("click", function () {
    buffer = buffer.slice(0, -1);
    if (buffer == "") {
        resetDisplay();
    }
    else refreshDisplay();
})


function refreshDisplay() {
    display.innerText = buffer;
}

function resetDisplay() {
    display.innerText = 0;
}



