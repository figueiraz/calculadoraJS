// const cria uma variável com vaor fixo

const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (btn.id === "=") {
            display.value = eval(display.value);
        } else if (btn.id === "ac") {
            display.value = "";
        } else if (btn.id === "de") {
            display.value = display.value.slice(0, -1);
        } else {
            display.value += btn.id;
        }
    })
})

document.addEventListener('keydown', function (event) {
    var key = event.key;

    if (/[\d\/\*\-\+=]|Enter/.test(key)) {
        event.preventDefault();
        var button;

        if (key === "Enter") {
            button = document.getElementById("=");
        } else {
            button = document.getElementById(key);
        }

        button.click();
    } else if (key === "Backspace") {
        event.preventDefault();
        display.value = display.value.slice(0, -1);
    }
});    