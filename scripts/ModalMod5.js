// Get DOM Elements
const modal6 = document.querySelector('#modal6');

const modalBtn6 = document.querySelector('#botao5divtela4mod5h');

const closeBtn6 = document.querySelector('.close6');



// Events
modalBtn6.addEventListener('click', openModal6);

closeBtn6.addEventListener('click', closeModal6);

window.addEventListener('click', outsideClick6);


// Open
function openModal6() {
    modal6.style.display = 'flex';
}
// Close
function closeModal6() {
    modal6.style.display = 'none';
}

// Close If Outside Click
function outsideClick6(e) {
    if (e.target == modal6) {
        modal6.style.display = 'none';
    }
}

