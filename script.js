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

function numbers(value) {
/*   if (!tempNumb) {
    if (!operator) {
      number = firstOP(value);
      display1.innerText = number;
    } else {
      tempNumb = secondOP(value);
      display1.innerText = tempNumb;
    }
  } else {
    number = calculate()
    display2.innerText = number;
    reset();
    tempNumb = secondOP(value);
    display1.innerText = tempNumb;
  };
 */
  if(!number){
    number = firstOP(value);
    display1.innerText = number;
  } if (!tempNumb){
    tempNumb = secondOP(value);
    display1.innerText = tempNumb;
  } else{
    tempNumb = "";
    ArrTemp = [] ; 
    tempNumb = secondOP(value);
    display1.innerText = tempNumb;
  };

};

function operators(value){
  if(!operator){
    operator = value;
  }else{
    calculate()
    number  = solution;
    display2.innerText = number;
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
  number = "";
  tempNumb = "";
  ArrNumb = [];
  ArrTemp = [];
  operator = "";
  solution = "";
};


function calculate() {
  switch (operator) {
    case "+":
      solution = add();

      break;
    case "✕":
      solution = multiple();
      break;

    default:
      break;
  }
  display2.innerText = solution;
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
