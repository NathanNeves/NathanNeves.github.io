// Get DOM Elements
const modal = document.querySelector('#modal');
const modal1 = document.querySelector('#modal1');
const modal2 = document.querySelector('#modal2');
const modal3 = document.querySelector('#modal3');
const modalBtn = document.querySelector('#btnModal');
const modal1Btn = document.querySelector('#btnModal1');
const modal2Btn = document.querySelector('#btnModal2');
const modal3Btn = document.querySelector('#btnModal3');
const closeBtn = document.querySelector('.close');
const close1Btn = document.querySelector('.close1');
const close2Btn = document.querySelector('.close2');
const close3Btn = document.querySelector('.close3');
const glossarioItem = document.querySelectorAll('.glossarioItem');
const glossarioItem1 = document.querySelectorAll('.glossarioItem1');
const glossarioItem2 = document.querySelectorAll('.glossarioItem2');
const glossarioItem3 = document.querySelectorAll('.glossarioItem3');
const A = document.querySelectorAll('#A');
const C = document.querySelectorAll('#C');
const I = document.querySelectorAll('#I');
const O = document.querySelectorAll('#O');
const P = document.querySelectorAll('#P');
const S = document.querySelectorAll('#S');
const R = document.querySelectorAll('#R');
const T = document.querySelectorAll('#T');
const C1 = document.querySelectorAll('#C1');
const D1 = document.querySelectorAll('#D1');
const E1 = document.querySelectorAll('#E1');
const P1 = document.querySelectorAll('#P1');
const V1 = document.querySelectorAll('#V1');
const R1 = document.querySelectorAll('#R1');
const A2 = document.querySelectorAll('#A2');
const B2 = document.querySelectorAll('#B2');
const C2 = document.querySelectorAll('#C2');
const E2 = document.querySelectorAll('#E2');
const F2 = document.querySelectorAll('#F2');
const G2 = document.querySelectorAll('#G2');
const I2 = document.querySelectorAll('#I2');
const M2 = document.querySelectorAll('#M2');
const R2 = document.querySelectorAll('#R2');
const A3 = document.querySelectorAll('#A3');
const B3 = document.querySelectorAll('#B3');
const C3 = document.querySelectorAll('#C3');
const D3 = document.querySelectorAll('#D3');
const E3 = document.querySelectorAll('#E3');
const F3 = document.querySelectorAll('#F3');
const P3 = document.querySelectorAll('#P3');
const R3 = document.querySelectorAll('#R3');
const T3 = document.querySelectorAll('#T3');

// Events
modalBtn.addEventListener('click', openModal);
modal1Btn.addEventListener('click', openModal1);
modal2Btn.addEventListener('click', openModal2);
modal3Btn.addEventListener('click', openModal3);
closeBtn.addEventListener('click', closeModal);
close1Btn.addEventListener('click', closeModal1);
close2Btn.addEventListener('click', closeModal2);
close3Btn.addEventListener('click', closeModal3);
window.addEventListener('click', outsideClick);
window.addEventListener('click', outsideClick1);
window.addEventListener('click', outsideClick2);
window.addEventListener('click', outsideClick3);
document.querySelector('#filterA').addEventListener('click',filterA);
document.querySelector('#filterC').addEventListener('click',filterC);
document.querySelector('#filterI').addEventListener('click',filterI);
document.querySelector('#filterO').addEventListener('click',filterO);
document.querySelector('#filterP').addEventListener('click',filterP);
document.querySelector('#filterR').addEventListener('click',filterR);
document.querySelector('#filterS').addEventListener('click',filterS);
document.querySelector('#filterT').addEventListener('click',filterT);
document.querySelector('#filterC1').addEventListener('click',filterC1);
document.querySelector('#filterD1').addEventListener('click',filterD1);
document.querySelector('#filterE1').addEventListener('click',filterE1);
document.querySelector('#filterP1').addEventListener('click',filterP1);
document.querySelector('#filterR1').addEventListener('click',filterR1);
document.querySelector('#filterV1').addEventListener('click',filterV1);
document.querySelector('#filterA2').addEventListener('click',filterA2);
document.querySelector('#filterB2').addEventListener('click',filterB2);
document.querySelector('#filterC2').addEventListener('click',filterC2);
document.querySelector('#filterE2').addEventListener('click',filterE2);
document.querySelector('#filterF2').addEventListener('click',filterF2);
document.querySelector('#filterG2').addEventListener('click',filterG2);
document.querySelector('#filterI2').addEventListener('click',filterI2);
document.querySelector('#filterM2').addEventListener('click',filterM2);
document.querySelector('#filterR2').addEventListener('click',filterR2);
document.querySelector('#filterA3').addEventListener('click',filterA3);
document.querySelector('#filterB3').addEventListener('click',filterB3);
document.querySelector('#filterC3').addEventListener('click',filterC3);
document.querySelector('#filterD3').addEventListener('click',filterD3);
document.querySelector('#filterE3').addEventListener('click',filterE3);
document.querySelector('#filterF3').addEventListener('click',filterF3);
document.querySelector('#filterP3').addEventListener('click',filterP3);
document.querySelector('#filterR3').addEventListener('click',filterR3);
document.querySelector('#filterT3').addEventListener('click',filterT3);

// Open
function openModal() {
    modal.style.display = 'flex';
    for(let i = 0; i<glossarioItem.length;i++){
        glossarioItem[i].style.display = "block";
    }
}
function openModal1() {
    modal1.style.display = 'flex';
    for(let i = 0; i<glossarioItem1.length;i++){
        glossarioItem1[i].style.display = "block";
    }
}
function openModal2() {
    modal2.style.display = 'flex';
    for(let i = 0; i<glossarioItem2.length;i++){
        glossarioItem2[i].style.display = "block";
    }
}
function openModal3() {
    modal3.style.display = 'flex';
    for(let i = 0; i<glossarioItem3.length;i++){
        glossarioItem3[i].style.display = "block";
    }
}

// Close
function closeModal() {
    modal.style.display = 'none';
}
function closeModal1() {
   modal1.style.display = 'none';
}
function closeModal2() {
    modal2.style.display = 'none';
 }
 function closeModal3() {
    modal3.style.display = 'none';
 }

// Close If Outside Click
function outsideClick(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
}
function outsideClick1(e) {
    if (e.target == modal1) {
        modal1.style.display = 'none';
    }
}
function outsideClick2(e) {
    if (e.target == modal2) {
        modal2.style.display = 'none';
    }
}
function outsideClick3(e) {
    if (e.target == modal3) {
        modal3.style.display = 'none';
    }
}

function filterA(){
    for(let i = 0; i<glossarioItem.length;i++){
        glossarioItem[i].style.display = "none";
    }
    for(let i = 0; i<A.length;i++){
        A[i].style.display = "block";
    }
}

function filterC(){
    for(let i = 0; i<glossarioItem.length;i++){
        glossarioItem[i].style.display = "none";
    }
    for(let i = 0; i<C.length;i++){
        C[i].style.display = "block";
    }
}

function filterI(){
    for(let i = 0; i<glossarioItem.length;i++){
        glossarioItem[i].style.display = "none";
    }
    for(let i = 0; i<I.length;i++){
        I[i].style.display = "block";
    }
}

function filterO(){
    for(let i = 0; i<glossarioItem.length;i++){
        glossarioItem[i].style.display = "none";
    }
    for(let i = 0; i<O.length;i++){
        O[i].style.display = "block";
    }
}

function filterP(){
    for(let i = 0; i<glossarioItem.length;i++){
        glossarioItem[i].style.display = "none";
    }
    for(let i = 0; i<P.length;i++){
        P[i].style.display = "block";
    }
}

function filterR(){
    for(let i = 0; i<glossarioItem.length;i++){
        glossarioItem[i].style.display = "none";
    }
    for(let i = 0; i<R.length;i++){
        R[i].style.display = "block";
    }
}

function filterS(){
    for(let i = 0; i<glossarioItem.length;i++){
        glossarioItem[i].style.display = "none";
    }
    for(let i = 0; i<S.length;i++){
        S[i].style.display = "block";
    }
}

function filterT(){
    for(let i = 0; i<glossarioItem.length;i++){
        glossarioItem[i].style.display = "none";
    }
    for(let i = 0; i<T.length;i++){
        T[i].style.display = "block";
    }
}

function filterC1(){
    for(let i = 0; i<glossarioItem1.length;i++){
        glossarioItem1[i].style.display = "none";
    }
    for(let i = 0; i<C1.length;i++){
        C1[i].style.display = "block";
    }
}
function filterD1(){
    for(let i = 0; i<glossarioItem1.length;i++){
        glossarioItem1[i].style.display = "none";
    }
    for(let i = 0; i<D1.length;i++){
        D1[i].style.display = "block";
    }
}
function filterE1(){
    for(let i = 0; i<glossarioItem1.length;i++){
        glossarioItem1[i].style.display = "none";
    }
    for(let i = 0; i<E1.length;i++){
        E1[i].style.display = "block";
    }
}
function filterP1(){
    for(let i = 0; i<glossarioItem1.length;i++){
        glossarioItem1[i].style.display = "none";
    }
    for(let i = 0; i<P1.length;i++){
        P1[i].style.display = "block";
    }
}
function filterR1(){
    for(let i = 0; i<glossarioItem1.length;i++){
        glossarioItem1[i].style.display = "none";
    }
    for(let i = 0; i<R1.length;i++){
        R1[i].style.display = "block";
    }
}
function filterV1(){
    for(let i = 0; i<glossarioItem1.length;i++){
        glossarioItem1[i].style.display = "none";
    }
    for(let i = 0; i<V1.length;i++){
        V1[i].style.display = "block";
    }
}
function filterA2(){
    for(let i = 0; i<glossarioItem2.length;i++){
        glossarioItem2[i].style.display = "none";
    }
    for(let i = 0; i<A2.length;i++){
        A2[i].style.display = "block";
    }
}
function filterB2(){
    for(let i = 0; i<glossarioItem2.length;i++){
        glossarioItem2[i].style.display = "none";
    }
    for(let i = 0; i<B2.length;i++){
        B2[i].style.display = "block";
    }
}
function filterC2(){
    for(let i = 0; i<glossarioItem2.length;i++){
        glossarioItem2[i].style.display = "none";
    }
    for(let i = 0; i<C2.length;i++){
        C2[i].style.display = "block";
    }
}
function filterE2(){
    for(let i = 0; i<glossarioItem2.length;i++){
        glossarioItem2[i].style.display = "none";
    }
    for(let i = 0; i<E2.length;i++){
        E2[i].style.display = "block";
    }
}
function filterF2(){
    for(let i = 0; i<glossarioItem2.length;i++){
        glossarioItem2[i].style.display = "none";
    }
    for(let i = 0; i<F2.length;i++){
        F2[i].style.display = "block";
    }
}
function filterG2(){
    for(let i = 0; i<glossarioItem2.length;i++){
        glossarioItem2[i].style.display = "none";
    }
    for(let i = 0; i<G2.length;i++){
        G2[i].style.display = "block";
    }
}
function filterI2(){
    for(let i = 0; i<glossarioItem2.length;i++){
        glossarioItem2[i].style.display = "none";
    }
    for(let i = 0; i<I2.length;i++){
        I2[i].style.display = "block";
    }
}
function filterM2(){
    for(let i = 0; i<glossarioItem2.length;i++){
        glossarioItem2[i].style.display = "none";
    }
    for(let i = 0; i<M2.length;i++){
        M2[i].style.display = "block";
    }
}
function filterR2(){
    for(let i = 0; i<glossarioItem2.length;i++){
        glossarioItem2[i].style.display = "none";
    }
    for(let i = 0; i<R2.length;i++){
        R2[i].style.display = "block";
    }
}

function filterA3(){
    for(let i = 0; i<glossarioItem3.length;i++){
        glossarioItem3[i].style.display = "none";
    }
    for(let i = 0; i<A3.length;i++){
        A3[i].style.display = "block";
    }
}
function filterB3(){
    for(let i = 0; i<glossarioItem3.length;i++){
        glossarioItem3[i].style.display = "none";
    }
    for(let i = 0; i<B3.length;i++){
        B3[i].style.display = "block";
    }
}
function filterC3(){
    for(let i = 0; i<glossarioItem3.length;i++){
        glossarioItem3[i].style.display = "none";
    }
    for(let i = 0; i<C3.length;i++){
        C3[i].style.display = "block";
    }
}

function filterD3(){
    for(let i = 0; i<glossarioItem3.length;i++){
        glossarioItem3[i].style.display = "none";
    }
    for(let i = 0; i<D3.length;i++){
        D3[i].style.display = "block";
    }
}

function filterE3(){
    for(let i = 0; i<glossarioItem3.length;i++){
        glossarioItem3[i].style.display = "none";
    }
    for(let i = 0; i<E3.length;i++){
        E3[i].style.display = "block";
    }
}
function filterF3(){
    for(let i = 0; i<glossarioItem3.length;i++){
        glossarioItem3[i].style.display = "none";
    }
    for(let i = 0; i<F3.length;i++){
        F3[i].style.display = "block";
    }
}

function filterF3(){
    for(let i = 0; i<glossarioItem3.length;i++){
        glossarioItem3[i].style.display = "none";
    }
    for(let i = 0; i<F3.length;i++){
        F3[i].style.display = "block";
    }
}
function filterP3(){
    for(let i = 0; i<glossarioItem3.length;i++){
        glossarioItem3[i].style.display = "none";
    }
    for(let i = 0; i<P3.length;i++){
        P3[i].style.display = "block";
    }
}
function filterR3(){
    for(let i = 0; i<glossarioItem3.length;i++){
        glossarioItem3[i].style.display = "none";
    }
    for(let i = 0; i<R3.length;i++){
        R3[i].style.display = "block";
    }
}
function filterT3(){
    for(let i = 0; i<glossarioItem3.length;i++){
        glossarioItem3[i].style.display = "none";
    }
    for(let i = 0; i<T3.length;i++){
        T3[i].style.display = "block";
    }
}