var input = document.querySelector('input');
var button = document.querySelector('button');
var date = new Date();
var dataHoje = {ano :date.getFullYear(), mes :date.getMonth() + 1, dia :date.getDate()};
var dataNasc = {};
var idade;
var output = document.querySelector('p');


// function getDataNasc() {
//     if (!input.value) {
//         console.log('error, no date chosen!')
//     }
//     else {
//         dataNasc.ano = parseInt(input.value.substring(0, 4));
//         dataNasc.mes = parseInt(input.value.substring(5, 7));
//         dataNasc.dia = parseInt(input.value.substring(8, 10));
//     }
// }

function calcAge() {

    if (!input.value) {
        console.log('error, no date chosen!')
    }
    else {
        dataNasc.ano = parseInt(input.value.substring(0, 4));
        dataNasc.mes = parseInt(input.value.substring(5, 7));
        dataNasc.dia = parseInt(input.value.substring(8, 10));
    }


    if (dataHoje.mes > dataNasc.mes || dataHoje.mes === dataNasc.mes && dataHoje.dia >= dataNasc.dia){
idade = dataHoje.ano - dataNasc.ano;
console.log(idade);
}
else{
    idade = dataHoje.ano - dataNasc.ano - 1;
    console.log(idade);
}

output.innerHTML = `Você tem <b>${idade}</b> anos de idade!`
}

button.addEventListener('click' , calcAge);