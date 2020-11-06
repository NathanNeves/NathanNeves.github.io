// Get DOM Elements
const modal8 = document.querySelector('#modal8');

const closeBtn8 = document.querySelector('.close8');



// Events

closeBtn8.addEventListener('click', closeModal8);

window.addEventListener('click', outsideClick8);


// Open
function openModal8() {
    modal8.style.display = 'flex';
}
// Close
function closeModal8() {
    modal8.style.display = 'none';
}

// Close If Outside Click
function outsideClick8(e) {
    if (e.target == modal8) {
        modal8.style.display = 'none';
    }
}

const checadoA6 = document.querySelector('#checkA6')
const mod7pergunta4Errado = document.querySelector('#mod7pergunta4Errado')

let contador6 = 0;

$("#checkA6").click(()=>{

    if(contador6==0){
        $('#checkA6').addClass("checado1");
        contador6++
    }
})

$("#checkB6").click(()=>{
    if(contador6==0){
        $('#checkB6').addClass("checado1");
        contador6++
    }
})

$("#checkC6").click(()=>{
    if(contador6==0){
        $('#checkC6').addClass("checado1");
        contador6++
    }
})

$("#reloadCheck6").click(()=>{
    $('#checkA6').removeClass("checado1");
    $('#checkB6').removeClass("checado1");
    $('#checkC6').removeClass("checado1");
    mod7pergunta4Errado.style.visibility = "hidden";
    contador6=0;
})

$("#btnCheck6").click(()=>{
    if(checadoA6.classList.contains('checado1')){
        $("#mod7pergunta4Errado").fadeOut(0).css("visibility","hidden")
        openModal8();
    }else{
        $("#mod7pergunta4Errado").fadeIn(0).css("visibility","visible")
    }
})