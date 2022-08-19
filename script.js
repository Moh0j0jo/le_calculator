let numberA = 0;
let numberB = 0;
let operator = "";

function add(numberA,numberB) {
    return numberA + numberB
};

function subtract(numberA,numberB) {
    return numberA - numberB
};

function multiple(numberA,numberB) {
    return numberA*numberB
};

function divide(numberA,numberB) {
    return numberA/numberB
};

function clear() {

};

function valInput() {

};

function comma() {
    
};

function calculate() {

}



/* document.addEventListener("click", (event) => {
    if (event.target.matches("button")){
        console.log(event.target.value);
    }
  });  */
document.addEventListener("click",(event) =>{
    if (document.getElementsByClassName('number')){
        numberA = event.target.value
    }
    if (document.getElementsByClassName('operator')){
        console.log(event.target.id)
    }   
});

document.getElementById("btnAdd").addEventListener("click", add);
document.getElementById("btnSub").addEventListener("click", subtract);
document.getElementById("btnMul").addEventListener("click", multiple);
document.getElementById("btnDiv").addEventListener("click", divide);

document.getElementById("btnClr").addEventListener("click", clear);
document.getElementById("btnCom").addEventListener("click", comma);
document.getElementById("btnEnt").addEventListener("click", calculate);


