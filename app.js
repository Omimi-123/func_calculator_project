const display = document.getElementById("display");
function appendDisplay(input) {
    display.value += input;
}


function Equal() {
    try {
        display.value = eval(display.value);
    }
    catch (error) {
        display.value = "Syntax Error"
    }
}


