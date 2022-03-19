var ul = document.querySelector('ul');
var addButton = document.querySelector('#add');
var input = document.querySelector('input');
var list = [];
var allRemoves;

function showList() {
    eraseList();
    for (let i = 0 ; i<list.length ; i++){
        if (list.length != 0){

                var li = document.createElement('li');
                var button = document.createElement('button');
                
                li.innerHTML = list[i].name;
                button.innerHTML = '&#10008;';
                li.append(button);
                button.addEventListener('click' , function() {eraseItem(list[i].id)});
                ul.append(li);
            }

        }
        saveToLocal();
    }


function eraseList() {
    var allLi = document.querySelectorAll('li');
                for (let j = 0 ; j<allLi.length ; j++){
                    ul.removeChild(allLi[j]);
                }  
}

function addToList() {
    let x = checkRepetido();
    if (x == true) {
        alert(`${input.value} já está na lista!`);
        input.value = "";
    }
    else if (input.value){     
        list.push({
            id : Date.now(),
            name : input.value
        });
        input.value = "";
        showList();
    }
    
}

function checkRepetido() {
    for(let i = 0 ; i<list.length; i++){
        if (list[i].name == input.value){
            return true;
            break;
        }
     

}
}

function eraseItem(id) {
    var novaLista = [];
    for (let i = 0 ; i<list.length ; i++){
        if (list[i].id !== id){
            novaLista.push(list[i]);
        }
    }
    list = novaLista;
    showList();
}

function saveToLocal() {
    localStorage.setItem('list' , JSON.stringify(list));
}

function loadFromLocal() {
    if (localStorage.list) {
        list = JSON.parse(localStorage.list);
        showList();
    }
}

addButton.addEventListener('click' , addToList);
input.addEventListener('keyup' , function(event) {
    if (event.keyCode === 13){
        event.preventDefault();
        addToList();
    }
})

loadFromLocal();

