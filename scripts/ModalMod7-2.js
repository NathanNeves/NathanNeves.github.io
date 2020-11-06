// Get DOM Elements
const modal9 = document.querySelector('#modal9');
const modal10 = document.querySelector('#modal10');
const modal11 = document.querySelector('#modal11');
const modal12 = document.querySelector('#modal12');

const modalBtn9 = document.querySelector('#botao7divtela19_2');
const modalBtn10 = document.querySelector('#botao7divtela19_4');
const modalBtn11 = document.querySelector('#botao7divtela19_3');
const modalBtn12 = document.querySelector('#botao7divtela19_1');

const closeBtn9 = document.querySelector('.close9');
const closeBtn10 = document.querySelector('.close10');
const closeBtn11 = document.querySelector('.close11');
const closeBtn12 = document.querySelector('.close12');



// Events
modalBtn9.addEventListener('click', openModal9);
modalBtn10.addEventListener('click', openModal10);
modalBtn11.addEventListener('click', openModal11);
modalBtn12.addEventListener('click', openModal12);

closeBtn9.addEventListener('click', closeModal9);
closeBtn10.addEventListener('click', closeModal10);
closeBtn11.addEventListener('click', closeModal11);
closeBtn12.addEventListener('click', closeModal12);

window.addEventListener('click', outsideClick9);
window.addEventListener('click', outsideClick10);
window.addEventListener('click', outsideClick11);
window.addEventListener('click', outsideClick12);


// Open
function openModal9() {
    modal9.style.display = 'flex';
}
// Close
function closeModal9() {
    modal9.style.display = 'none';
}

// Close If Outside Click
function outsideClick9(e) {
    if (e.target == modal9) {
        modal9.style.display = 'none';
    }
}

function openModal10() {
    modal10.style.display = 'flex';
}
// Close
function closeModal10() {
    modal10.style.display = 'none';
}

// Close If Outside Click
function outsideClick10(e) {
    if (e.target == modal10) {
        modal10.style.display = 'none';
    }
}

function openModal11() {
    modal11.style.display = 'flex';
}
// Close
function closeModal11() {
    modal11.style.display = 'none';
}

// Close If Outside Click
function outsideClick11(e) {
    if (e.target == modal11) {
        modal11.style.display = 'none';
    }
}

function openModal12() {
    modal12.style.display = 'flex';
}
// Close
function closeModal12() {
    modal12.style.display = 'none';
}

// Close If Outside Click
function outsideClick12(e) {
    if (e.target == modal12) {
        modal12.style.display = 'none';
    }
}