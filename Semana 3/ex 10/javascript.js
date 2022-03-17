var relogio = document.querySelector('p');
function time() {
    var date = new Date();
    var horario = [date.getHours(), date.getMinutes(), date.getSeconds()];
    relogio.innerHTML = `${horario[0]}h:${horario[1]}m:${horario[2]}s`;   
}

const relogitows = setInterval(time , 1000);