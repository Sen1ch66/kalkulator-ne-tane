const xInput = document.querySelector("#x");
const yInput = document.querySelector("#y");
const resultInput = document.querySelector("#result");
const calcbtn = document.querySelector(".kalkulator-btns-btn");
Number((0.1+0.2).toFixed(1));
calcbtn.addEventListener('click', function () {
    const x = Number(document.querySelector("#x").value);
    const y = Number(document.querySelector("#y").value);
    const operacija = document.querySelector("select").value;
    let res = null;
    if (operacija == "+") {
        res = Number((x + y).toFixed(10));
    } else if (operacija == "-") {
        res = Number((x - y).toFixed(10));
    } else if (operacija == "*") {
        res = Number((x * y).toFixed(10));
    } else {
        res = Number((x / y).toFixed(10));
    }
    if (!x || !y) {
        alert("Введіть 2 числа");
        resultInput.value = "";
    } else {
        resultInput.value = res;
    }
})
const clear = document.querySelector(".kalkulator-btns-clear");
clear.addEventListener('click', function () {
    xInput.value = "";
    yInput.value = "";
    resultInput.value = "";
})