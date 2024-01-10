const calcbtn = document.querySelector(".kalkulator-btns-btn");
calcbtn.addEventListener('click', function(){ 
    const x = Number(document.querySelector("#x").value);
    const y = Number(document.querySelector("#y").value);
    const result = document.querySelector("#result");
    const operacija = document.querySelector("select").value;
    let res = null;
    if(operacija == "+"){
        res = x+y
    } else if(operacija == "-"){
        res = x-y
    } else if(operacija == "*"){
        res = x*y
    } else {
        res = x/y
    }
    result.value = res;
    if(x||y == null){
        alert("Введіть 2 числа");
        result = "";
    }

})
const clear = document.querySelector(".kalkulator-btns-clear");
clear.addEventListener('click' ,function(){
    x.value = "";
    y.value = "";
    result.value = "";
})