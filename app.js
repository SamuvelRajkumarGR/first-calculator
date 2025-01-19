function clearScreen() {
    document.getElementById("screen").value = "";
}

function deleteLast() {
    let screen = document.getElementById("screen");
    screen.value = screen.value.slice(0, -1);
}

function appendToScreen(value) {
    let screen = document.getElementById("screen");
    screen.value += value;
}

function calculate() {
    let screen = document.getElementById("screen");
    try {
        screen.value = eval(screen.value);
    } catch (error) {
        alert("Invalid Expression");
        screen.value = "";
    }
}