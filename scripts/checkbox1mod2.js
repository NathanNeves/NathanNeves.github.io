const checadoC3 = document.querySelector('#checkC3')
const resultadocheck3acerto = document.querySelector('#resultadocheck3acerto')
const resultadocheck3erro = document.querySelector('#resultadocheck3erro')

let contador3 = 0;

$("#checkA3").click(()=>{

    if(contador3==0){
        $('#checkA3').addClass("checado1");
        contador3++
    }
})

$("#checkB3").click(()=>{
    if(contador3==0){
        $('#checkB3').addClass("checado1");
        contador3++
    }
})

$("#checkC3").click(()=>{
    if(contador3==0){
        $('#checkC3').addClass("checado1");
        contador3++
    }
})

$("#checkD3").click(()=>{
    if(contador3==0){
        $('#checkD3').addClass("checado1");
        contador3++
    }
})

$("#checkE3").click(()=>{
    if(contador3==0){
        $('#checkE3').addClass("checado1");
        contador3++
    }
})


$("#reloadCheck3").click(()=>{
    $('#checkA3').removeClass("checado1");
    $('#checkB3').removeClass("checado1");
    $('#checkC3').removeClass("checado1");
    $('#checkD3').removeClass("checado1");
    $('#checkE3').removeClass("checado1");
    resultadocheck3erro.style.visibility = "hidden";
    resultadocheck3acerto.style.visibility = "hidden";
    contador3=0;
})

$("#btnCheck3").click(()=>{
    if(checadoC3.classList.contains('checado1')){
        $("#resultadocheck3erro").fadeOut(0).css("visibility","hidden")
        $("#resultadocheck3acerto").fadeIn(0).css("visibility","visible")
    }else{
        $("#resultadocheck3acerto").fadeOut(0).css("visibility","hidden")
        $("#resultadocheck3erro").fadeIn(0).css("visibility","visible")
    }
})