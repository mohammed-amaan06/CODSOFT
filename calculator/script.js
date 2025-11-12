 

let display = document.getElementById("display");
let buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        if (value === "C") {
            clearDisplay();
        } else if (value === "=") {
            calculate();
        } else {
            appendValue(value);
        }
    });
});

function appendValue(value) {
    display.textContent += value;
}

function clearDisplay() {
    display.textContent = "";
}

function calculate() {
    try {
        display.textContent = eval(display.textContent);
    } catch (e) {
        display.textContent = "Error";
    }
}
