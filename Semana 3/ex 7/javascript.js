var input = document.querySelector('input');
var button = document.querySelector('button');
var date = new Date();
var dataHoje = {ano :date.getFullYear(), mes :date.getMonth() + 1, dia :date.getDate()};
var data = {};
var season;
var seasonURL;
var seasonImg = document.querySelector('img');
var output = document.querySelector('p');


function getData() {
    if (!input.value) {
        console.log('error, no date chosen!')
    }
    else {
        data.mes = parseInt(input.value.substring(5, 7));
        data.dia = parseInt(input.value.substring(8, 10));
    }
}

function calcSeason() {
getData();
    if (data.mes == 12 && data.dia >= 22 
    || data.mes == 1 || data.mes==2
    || data.mes == 3 && data.dia < 22){
season = "Summer";
seasonURL = 'https://64.media.tumblr.com/d216cb89703e2eef4191146b2ef6f34a/tumblr_prjou88Lvu1soktugo1_1280.gifv';
console.log(season);
}
else if (data.mes == 3 && data.dia >= 22 
    || data.mes == 4 || data.mes==5
    || data.mes == 6 && data.dia < 22){

    season = "Autumn";
    seasonURL = 'https://cdn.dribbble.com/users/114039/screenshots/7450076/media/d42b846cf1d20da0ce20f2f98e105172.gif';
    console.log(season);
}
else if (data.mes == 6 && data.dia >= 22 
    || data.mes == 7 || data.mes==8
    || data.mes == 9 && data.dia < 22){

    season = "Winter";
    seasonURL = 'https://i.pinimg.com/originals/22/2b/85/222b8545bea5db87448c2618c5ec8c0b.gif';
    console.log(season);
}
else if (data.mes == 9 && data.dia >= 22 
    || data.mes == 10 || data.mes==11
    || data.mes == 12 && data.dia < 22){

    season = "Spring";
    seasonURL = 'https://wallpapercave.com/uwp/uwp1875607.gif';
    console.log(season);
}


output.innerHTML = `The current season is: <b>${season}</b>`;
seasonImg.src = seasonURL;
}

button.addEventListener('click' , calcSeason);