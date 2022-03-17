var nome = prompt('Qual seu nome?');
var idade = Number(window.prompt('qual sua idade?'));
    while (isNaN(idade) || !idade) {
    var idade = Number(window.prompt('por favor insira uma idade válida'));
    }

var esporte = confirm('Quer praticar um esporte?');
var esporteStr;
if (esporte){
    esporteStr = 'quer praticar esportes';
}
else {
    esporteStr = 'não quer praticar esportes';
}

alert(`${nome}, de ${idade} anos, ${esporteStr}.`);
