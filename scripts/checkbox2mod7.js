const checadoD7 = document.querySelector('#checkD7')
const resultadocheck7acerto = document.querySelector('#resultadocheck7acerto')
const resultadocheck7erro = document.querySelector('#resultadocheck7erro')

let contador7 = 0;

$("#checkA7").click(()=>{

    if(contador7==0){
        $('#checkA7').addClass("checado1");
        contador7++
    }
})

$("#checkB7").click(()=>{
    if(contador7==0){
        $('#checkB7').addClass("checado1");
        contador7++
    }
})

$("#checkC7").click(()=>{
    if(contador7==0){
        $('#checkC7').addClass("checado1");
        contador7++
    }
})

$("#checkD7").click(()=>{
    if(contador7==0){
        $('#checkD7').addClass("checado1");
        contador7++
    }
})

$("#reloadCheck7").click(()=>{
    $('#checkA7').removeClass("checado1");
    $('#checkB7').removeClass("checado1");
    $('#checkC7').removeClass("checado1");
    $('#checkD7').removeClass("checado1");
    resultadocheck7erro.style.visibility = "hidden";
    resultadocheck7acerto.style.visibility = "hidden";
    contador7=0;
})

$("#btnCheck7").click(()=>{
    if(checadoD7.classList.contains('checado1')){
        $("#resultadocheck7erro").fadeOut(0).css("visibility","hidden")
        $("#resultadocheck7acerto").fadeIn(0).css("visibility","visible")
    }else{
        $("#resultadocheck7acerto").fadeOut(0).css("visibility","hidden")
        $("#resultadocheck7erro").fadeIn(0).css("visibility","visible")
    }
})