const checadoE4 = document.querySelector('#checkE4')
const resultadocheck4acerto = document.querySelector('#resultadocheck4acerto')
const resultadocheck4erro = document.querySelector('#resultadocheck4erro')

let contador4 = 0;

$("#checkA4").click(()=>{

    if(contador4==0){
        $('#checkA4').addClass("checado1");
        contador4++
    }
})

$("#checkB4").click(()=>{
    if(contador4==0){
        $('#checkB4').addClass("checado1");
        contador4++
    }
})

$("#checkC4").click(()=>{
    if(contador4==0){
        $('#checkC4').addClass("checado1");
        contador4++
    }
})

$("#checkD4").click(()=>{
    if(contador4==0){
        $('#checkD4').addClass("checado1");
        contador4++
    }
})

$("#checkE4").click(()=>{
    if(contador4==0){
        $('#checkE4').addClass("checado1");
        contador4++
    }
})


$("#reloadCheck4").click(()=>{
    $('#checkA4').removeClass("checado1");
    $('#checkB4').removeClass("checado1");
    $('#checkC4').removeClass("checado1");
    $('#checkD4').removeClass("checado1");
    $('#checkE4').removeClass("checado1");
    resultadocheck4erro.style.visibility = "hidden";
    resultadocheck4acerto.style.visibility = "hidden";
    contador4=0;
})

$("#btnCheck4").click(()=>{
    if(checadoE4.classList.contains('checado1')){
        $("#resultadocheck4erro").fadeOut(0).css("visibility","hidden")
        $("#resultadocheck4acerto").fadeIn(0).css("visibility","visible")
    }else{
        $("#resultadocheck4acerto").fadeOut(0).css("visibility","hidden")
        $("#resultadocheck4erro").fadeIn(0).css("visibility","visible")
    }
})