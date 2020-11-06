const checadoE1 = document.querySelector('#checkE1')
const resultadocheck1acerto = document.querySelector('#resultadocheck1acerto')
const resultadocheck1erro = document.querySelector('#resultadocheck1erro')

let contador1 = 0;

$("#checkA1").click(()=>{

    if(contador1==0){
        $('#checkA1').addClass("checado1");
        contador1++
    }
})

$("#checkB1").click(()=>{
    if(contador1==0){
        $('#checkB1').addClass("checado1");
        contador1++
    }
})

$("#checkC1").click(()=>{
    if(contador1==0){
        $('#checkC1').addClass("checado1");
        contador1++
    }
})

$("#checkD1").click(()=>{
    if(contador1==0){
        $('#checkD1').addClass("checado1");
        contador1++
    }
})

$("#checkE1").click(()=>{
    if(contador1==0){
        $('#checkE1').addClass("checado1");
        contador1++
    }
})

$("#reloadCheck1").click(()=>{
    $('#checkA1').removeClass("checado1");
    $('#checkB1').removeClass("checado1");
    $('#checkC1').removeClass("checado1");
    $('#checkD1').removeClass("checado1");
    $('#checkE1').removeClass("checado1");
    resultadocheck1erro.style.visibility = "hidden";
    resultadocheck1acerto.style.visibility = "hidden";
    contador1=0;
})

$("#btnCheck1").click(()=>{
    if(checadoE1.classList.contains('checado1')){
        $("#resultadocheck1erro").fadeOut(0).css("visibility","hidden")
        $("#resultadocheck1acerto").fadeIn(0).css("visibility","visible")
    }else{
        $("#resultadocheck1acerto").fadeOut(0).css("visibility","hidden")
        $("#resultadocheck1erro").fadeIn(0).css("visibility","visible")
    }
})