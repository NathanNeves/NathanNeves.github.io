// Get DOM Elements
const modal4 = document.querySelector('#modal4');
const modal14 = document.querySelector('#modal14');
const modal15 = document.querySelector('#modal15');
const modal16 = document.querySelector('#modal16');
const modal17 = document.querySelector('#modal17');
const modal18 = document.querySelector('#modal18');
const modalBtn4 = document.querySelector('#botao3divtela4hmod3_2');
const modalBtn14 = document.querySelector('#tl2008');
const modalBtn15 = document.querySelector('#tl2015');
const modalBtn16 = document.querySelector('#tl2017');
const modalBtn17 = document.querySelector('#tl2018');
const modalBtn18 = document.querySelector('#tl2019');
const closeBtn4 = document.querySelector('.close4');
const closeBtn14 = document.querySelector('.close14');
const closeBtn15 = document.querySelector('.close15');
const closeBtn16 = document.querySelector('.close16');
const closeBtn17 = document.querySelector('.close17');
const closeBtn18 = document.querySelector('.close18');


// Events
modalBtn4.addEventListener('click', openModal4);
modalBtn14.addEventListener('click', openModal14);
modalBtn15.addEventListener('click', openModal15);
modalBtn16.addEventListener('click', openModal16);
modalBtn17.addEventListener('click', openModal17);
modalBtn18.addEventListener('click', openModal18);
closeBtn4.addEventListener('click', closeModal4);
closeBtn14.addEventListener('click', closeModal14);
closeBtn15.addEventListener('click', closeModal15);
closeBtn16.addEventListener('click', closeModal16);
closeBtn17.addEventListener('click', closeModal17);
closeBtn18.addEventListener('click', closeModal18);
window.addEventListener('click', outsideClick4);
window.addEventListener('click', outsideClick14);
window.addEventListener('click', outsideClick15);
window.addEventListener('click', outsideClick16);
window.addEventListener('click', outsideClick17);
window.addEventListener('click', outsideClick18);


// Open
function openModal4() {
    modal4.style.display = 'flex';
}
// Close
function closeModal4() {
    modal4.style.display = 'none';
}

// Close If Outside Click
function outsideClick4(e) {
    if (e.target == modal4) {
        modal4.style.display = 'none';
    }
}

function openModal14() {
    modal14.style.display = 'flex';
}
// Close
function closeModal14() {
    modal14.style.display = 'none';
}

// Close If Outside Click
function outsideClick14(e) {
    if (e.target == modal14) {
        modal14.style.display = 'none';
    }
}

function openModal15() {
    modal15.style.display = 'flex';
}
// Close
function closeModal15() {
    modal15.style.display = 'none';
}

// Close If Outside Click
function outsideClick15(e) {
    if (e.target == modal15) {
        modal15.style.display = 'none';
    }
}

function openModal16() {
    modal16.style.display = 'flex';
}
// Close
function closeModal16() {
    modal16.style.display = 'none';
}

// Close If Outside Click
function outsideClick16(e) {
    if (e.target == modal16) {
        modal16.style.display = 'none';
    }
}

function openModal17() {
    modal17.style.display = 'flex';
}
// Close
function closeModal17() {
    modal17.style.display = 'none';
}

// Close If Outside Click
function outsideClick17(e) {
    if (e.target == modal17) {
        modal17.style.display = 'none';
    }
}

function openModal18() {
    modal18.style.display = 'flex';
}
// Close
function closeModal18() {
    modal18.style.display = 'none';
}

// Close If Outside Click
function outsideClick18(e) {
    if (e.target == modal18) {
        modal18.style.display = 'none';
    }
}