var inputs = document.querySelectorAll('input');
var results = document.querySelectorAll('.result');
var buttons = document.querySelectorAll('button');
var button1  = buttons[0];
var button2  = buttons[1];
var input1 = inputs[0];
var input2 = inputs[1];
var input3 = inputs[2];
var input4 = inputs[3];
var result1 = results[0];
var result2 = results[1];
var vInicialA;
var raizA;
var vInicialG;
var raizG;
var pa = [];
var pg = [];



function calculatePA() {
    vInicialA = input1.valueAsNumber;
    raizA = input2.valueAsNumber;
    let valor = vInicialA + raizA;
pa.push(vInicialA);
for (let i = 0 ; i < 9 ; i++){
    pa.push(valor);
    valor += raizA;
}



result1.innerHTML = `Os primeiros 10 elementos dessa PA são: [<b>${pa}</b>]`;
pa = [];
}
function calculatePG() {
    vInicialG = input3.valueAsNumber;
    raizG = input4.valueAsNumber;
    let valor = vInicialG * raizG;
pg.push(vInicialG);
for (let i = 0 ; i < 9 ; i++){
    pg.push(valor);
    valor *= raizG;
}



result2.innerHTML = `Os primeiros 10 elementos dessa PG são: [<b>${pg}</b>]`;
pg = [];
}

button1.addEventListener('click' , calculatePA);
button2.addEventListener('click' , calculatePG);
