const checadoB2 = document.querySelector('#checkB2')
const resultadocheck2acerto = document.querySelector('#resultadocheck2acerto')
const resultadocheck2erro = document.querySelector('#resultadocheck2erro')

let contador2 = 0;

$("#checkA2").click(()=>{

    if(contador2==0){
        $('#checkA2').addClass("checado1");
        contador2++
    }
})

$("#checkB2").click(()=>{
    if(contador2==0){
        $('#checkB2').addClass("checado1");
        contador2++
    }
})

$("#checkC2").click(()=>{
    if(contador2==0){
        $('#checkC2').addClass("checado1");
        contador2++
    }
})

$("#checkD2").click(()=>{
    if(contador2==0){
        $('#checkD2').addClass("checado1");
        contador2++
    }
})


$("#reloadCheck2").click(()=>{
    $('#checkA2').removeClass("checado1");
    $('#checkB2').removeClass("checado1");
    $('#checkC2').removeClass("checado1");
    $('#checkD2').removeClass("checado1");
    resultadocheck2erro.style.visibility = "hidden";
    resultadocheck2acerto.style.visibility = "hidden";
    contador2=0;
})

$("#btnCheck2").click(()=>{
    if(checadoB2.classList.contains('checado1')){
        $("#resultadocheck2erro").fadeOut(0).css("visibility","hidden")
        $("#resultadocheck2acerto").fadeIn(0).css("visibility","visible")
    }else{
        $("#resultadocheck2acerto").fadeOut(0).css("visibility","hidden")
        $("#resultadocheck2erro").fadeIn(0).css("visibility","visible")
    }
})