var inputs = document.querySelectorAll('input');
var selector = document.querySelector('select');
var result = document.querySelector('#result');
var button  = document.querySelector('button');
var input1 = inputs[1];
var input2 = inputs[2];
var num1;
var num2;
var operation;
var resultValue;



function calculate() {
    num1 = input1.valueAsNumber;
    num2 = input2.valueAsNumber;
    operation = Number(selector.value);

switch(operation){

    case 1 : resultValue = num1 + num2;
    break;
    case 2 : resultValue = num1 - num2;
    break;
    case 3 : resultValue = num1 * num2;
    break;
    case 4 : resultValue = num1 / num2;
    break;

}

result.value = `${resultValue}`;

}

button.addEventListener('click' , calculate);
