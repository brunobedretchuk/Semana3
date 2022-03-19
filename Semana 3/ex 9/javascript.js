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
                button.classList.add('remove');
                li.append(button);
                li.innerHTML = list[i];
                button.innerHTML = '&#10008;';
                li.append(button);
                ul.append(li);
            }

        }
        allRemoves = document.querySelectorAll('.remove');
        for (let j = 0 ; j<allRemoves.length ; j++){
            allRemoves[j].addEventListener('click' , function() {eraseItem(j)});
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
    else if (!input.value){
        alert('input vazio!');
        input.value = "";
    }
    else{
        list.push(input.value);
        input.value = "";
        showList();
    }
    
}

function checkRepetido() {
    for(let i = 0 ; i<list.length; i++){
        if (list[i] == input.value){
            return true;
            break;
        }
     

}
}

function eraseItem(p) {
    list.splice(p , 1);
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

