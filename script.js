

function genNumpad(size) {

    let numpad = document.querySelector(".numpad1");
    numpad.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
    numpad.style.gridTemplateRows = `repeat(${size} , 1fr)`;

    for (let i = 0; i < size; i++) {
        let numDiv = document.createElement("div");
        let btn = document.createElement("input");
        btn.type = 'button';
        btn.TEXT_NODE = i;
        btn.id = 'Submit';
        btn.className = 'numbers';

        numpad.insertAdjacentElement("beforeend", numDiv.appendChild(btn));

    }
}

genNumpad(3)

function add(params) {

};

function subtract(params) {

};

function multiple(params) {

};

function divide(params) {

};

function clear(params) {

};

function valInput(params) {

};