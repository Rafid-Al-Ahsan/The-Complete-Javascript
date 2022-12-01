'use strict';

//1. Select all the elements and store them variables

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const showModal = document.querySelectorAll('.show-modal');
const closeModal = document.querySelector('.close-modal');


function close(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

for(let i=0; i<showModal.length; i++){
    showModal[i].addEventListener('click', function(){
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    })
}

closeModal.addEventListener('click', close);
overlay.addEventListener('click', close);

document.addEventListener('keydown', function(e){

    if(e.key == 'Escape' && !modal.classList.contains('hidden'))
       close();
})