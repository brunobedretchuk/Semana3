var input = document.querySelector('input');
var num;
var b2  = document.querySelector('#b2');
var result = document.querySelector('p');


function EvenOdd() {
    num = input.valueAsNumber;

if (!num){}
else if (num % 2 === 0){
result.innerHTML = 'This number is <b>Even</b>.'
}
else if (num % 2 === 1){
    result.innerHTML = 'This number is <b>Odd</b>.'
    }
}

b2.addEventListener('click' , EvenOdd);
