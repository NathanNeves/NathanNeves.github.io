// Get DOM Elements
const modal7 = document.querySelector('#modal7');

const modalBtn7 = document.querySelector('#imgLupa');

const closeBtn7 = document.querySelector('.close7');



// Events
modalBtn7.addEventListener('click', openModal7);

closeBtn7.addEventListener('click', closeModal7);

window.addEventListener('click', outsideClick7);


// Open
function openModal7() {
    modal7.style.display = 'flex';
}
// Close
function closeModal7() {
    modal7.style.display = 'none';
}

// Close If Outside Click
function outsideClick7(e) {
    if (e.target == modal7) {
        modal7.style.display = 'none';
    }
}

