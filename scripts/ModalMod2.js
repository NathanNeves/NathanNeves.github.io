// Get DOM Elements
const modal5 = document.querySelector('#modal5');
const modalBtn5 = document.querySelector('#botao2divtela10mod2h');
const closeBtn5 = document.querySelector('.close5');


// Events
modalBtn5.addEventListener('click', openModal5);
closeBtn5.addEventListener('click', closeModal5);
window.addEventListener('click', outsideClick5);


// Open
function openModal5() {
    modal5.style.display = 'flex';
}
// Close
function closeModal5() {
    modal5.style.display = 'none';
}

// Close If Outside Click
function outsideClick5(e) {
    if (e.target == modal5) {
        modal5.style.display = 'none';
    }
}
