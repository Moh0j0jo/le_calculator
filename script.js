let input = "";
let number = "";
let tempNumb = "";
let ArrNumb = [];
let ArrTemp = [];
let operator = "";
let solution = "";

let display1 = document.getElementById("story");
let display2 = document.getElementById("numbdisp");


function numbers(value, operator) {
  if (!operator) {
    ArrNumb.push(value);
    number = ArrNumb.join("");
    display1.innerText=number;
  } else {
    ArrTemp.push(value);
    tempNumb = ArrTemp.join("");
    display1.innerText=tempNumb;
  };
};



function reset() {
  number = "";
  tempNumb = "";
  ArrNumb = [];
  ArrTemp = [];
  operator = "";
};

function add(){
  return Number(number) + Number(tempNumb);
};

function multiple(){
  return Number(number) * Number(tempNumb);
};

function calculate(){
  switch(operator){
    case "+":
      solution =add();
      
      break;
    case "✕":
      solution = multiple();
      break;
    
      default:
      break;
  }
  display2.innerText=solution;
};

function validate() {

  switch (this.className) {

    case "number":
      numbers(this.value, operator);
      break;

    case "operator":
      operator = this.value
      display1.innerText=operator;
      break;

    case "delete":

      break;

    case "calculate":
      calculate();
      reset();
      break;

    default:

      break;
  }
};

let clsButton = document.getElementsByTagName('button');

for (var i = 0; i < clsButton.length; i++) {
  clsButton[i].addEventListener('click', validate, false);
}
