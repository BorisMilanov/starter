//'use strict';
let buttonsModal = document.querySelectorAll('.show-modal')
let modalWindow = document.querySelector('.modal')
let buttonCloseModal = document.querySelector('.close-modal')
let overlay =  document.querySelector('.overlay')

for (let index = 0; index < buttonsModal.length; index++) {
    buttonsModal[index].addEventListener('click', showModalWindow)
}
function showModalWindow() {
    modalWindow.classList.remove('hidden');
    //overlay.classList.remove('hidden');
}
buttonCloseModal.addEventListener('click',closeModalWindow)

function closeModalWindow() {
    modalWindow.classList.add('hidden');
    //overlay.classList.add('hidden');
}

document.addEventListener('keydown', closeModalWindowWithKey)

function closeModalWindowWithKey (e) {
    if (e.key === 'Escape'){
        modalWindow.classList.add('hidden');
        overlay.classList.add('hidden');
    }
}