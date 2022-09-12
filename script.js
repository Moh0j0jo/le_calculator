let input = "";
let number = "";
let tempNumb = "";
let ArrNumb = [];
let ArrTemp = [];
let operator = "";
let solution = "";

let display1 = document.getElementById("story");
let display2 = document.getElementById("numbdisp");
let clsButton = document.getElementsByTagName('button');

function clear(){
  if(tempNumb){
    tempNumb = "";
    ArrTemp = [];
  }
  if(number){
    number = "";
    ArrNumb = [];
  }
};

function numbers(value) {

  if(!operator){
    clear();
    number = firstOP(value);
    display1.innerText = number;
  } else if (operator){
    tempNumb = secondOP(value);
    display1.innerText = tempNumb;
  } else if (!operator && tempNumb){
    tempNumb = secondOP(value);
    display1.innerText = tempNumb;
  };
  
};


function operators(value){
  if(!operator){
    operator = value;
  }else{
    calculate();
    operator = value;
    ArrTemp = [];
    number = solution;
    display2.innerText = solution; 
  };
  
};

function firstOP(value) {
  ArrNumb.push(value);
  return ArrNumb.join("");
};

function secondOP(value) {
  ArrTemp.push(value);
  return ArrTemp.join("");
};



function add() {
  return Number(number) + Number(tempNumb);
};

function subtract(){
  return Number(number) - Number(tempNumb);
}

function multiple() {
  return Number(number) * Number(tempNumb);
};

function divide(){
  return Number(number) / Number(tempNumb);
}

function reset() {
  clear();
  operator = "";
  solution = "";
  display1.innerText = "0";
  display2.innerText = "0";
};


function calculate() {
  switch (operator) {
    case "+":
      solution = add();
      break;
    case "✕":
      solution = multiple();
      break;
    case "÷":
      solution = divide();
      break;
    case "-":
      solution = subtract();
      break;
    case "C":
      clear();
    default:
      break;
  }
  display2.innerText = solution;
  ArrNumb = [];
  ArrTemp = [];
};

function validate() {

  switch (this.className) {

    case "number":
      numbers(this.value);
      break;

    case "operator":
      operators(this.value);
      display1.innerText = this.value;
      break;

    case "delete":
        reset();
      break;

    case "calculate":
      calculate();
      break;

    default:

      break;
  }
};



for (var i = 0; i < clsButton.length; i++) {
  clsButton[i].addEventListener('click', validate, false);
}


