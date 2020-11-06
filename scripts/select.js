let contadorSelect = 0;
const select1 = document.querySelector("#select1")
const select2 = document.querySelector("#select2")
const select3 = document.querySelector("#select3")

$("#btnSelect").click(()=>{
    if(select1.selectedIndex == 0){
        contadorSelect++
    }
    if(select2.selectedIndex == 2){
        contadorSelect++
    }
    if(select3.selectedIndex == 1){
        contadorSelect++
    }

    if(contadorSelect == 3){
        $("#resultadoselectacerto").fadeIn(0).css("visibility","visible")
        contadorSelect = 0;
    }else{
        $("#resultadoselectacerto").fadeIn(0).css("visibility","hidden")
        openModalSelect();
        contadorSelect = 0;
    }
})

// Get DOM Elements
const modalSelect = document.querySelector('#modalSelect');
const closeSelectBtn = document.querySelector('.closeSelect');

// Event
closeSelectBtn.addEventListener('click', closeModalSelect);
window.addEventListener('click', outsideClickSelect);

// Open
function openModalSelect() {
    modalSelect.style.display = 'flex';
}

// Close
function closeModalSelect() {
    modalSelect.style.display = 'none';
}

// Close If Outside Click
function outsideClickSelect(e) {
  if (e.target == modalSelect) {
    modalSelect.style.display = 'none';
  }
}