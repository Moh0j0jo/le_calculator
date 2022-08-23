let input = "";
let number = 0;
let tempNumber = 0;
let ArrNumb = [];
let operator = "";

let display1 = document.getElementById("story");
let display2 = document.getElementById("numbdisp");

function dispDel(){

  display1.innerText = " ";
  display2.innerText = " ";
  
};

function display(input){
  //console.log(input)
  display1.innerText = input;
}; 


function calculator(){
  switch(this.value){
    case "+":
      break;
    case "-":
      break;
    case "✕":
      break;
    case "÷":
      break;
    case "±":
      break;
    default:
      break;
  }
};


function validate(){

  switch (this.className) {
    
    case "number":
      if (number!=""){
        ArrNumb.push(this.value);
        number = ArrNumb.join("");
        display(number);
      } else {
        tempNumber = number;
        number = 0;
        ArrNumb = [];
        ArrNumb.push(this.value);
        number = ArrNumb.join("");
        display(number);
      };
      break;

    case "operator":
        display(this.value);
        calculator(this.value);
      break;

    case "delete":
     
      dispDel;
      break;
    
    default:

      break;
  }
};



let clsButton = document.getElementsByTagName('button');
 
  for (var i = 0; i < clsButton.length; i++) {
    clsButton[i].addEventListener('click', validate, false);
  }
