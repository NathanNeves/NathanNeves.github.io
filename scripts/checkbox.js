const checadoC = document.querySelector('#checadoC')
const checadoE = document.querySelector('#checadoE')
const resultadoCheck = document.querySelector('#checkResultado')

let contador = 0;

$("#checkA").click(()=>{
    $('#checadoA').removeClass("desabilitado");
    $('#checadoA').addClass("checado");
    contador++
})

$("#checkB").click(()=>{
    $('#checadoB').removeClass("desabilitado");
    $('#checadoB').addClass("checado");
    contador++
})

$("#checkC").click(()=>{
    $('#checadoC').removeClass("desabilitado");
    $('#checadoC').addClass("checado");
    contador++
})

$("#checkD").click(()=>{
    $('#checadoD').removeClass("desabilitado");
    $('#checadoD').addClass("checado");
    contador++
})

$("#checkE").click(()=>{
    $('#checadoE').removeClass("desabilitado");
    $('#checadoE').addClass("checado");
    contador++
})

$("#reloadCheck").click(()=>{
    $('#checadoA').addClass("desabilitado");
    $('#checadoB').addClass("desabilitado");
    $('#checadoC').addClass("desabilitado");
    $('#checadoD').addClass("desabilitado");
    $('#checadoE').addClass("desabilitado");
    $('#checadoA').removeClass("checado");
    $('#checadoB').removeClass("checado");
    $('#checadoC').removeClass("checado");
    $('#checadoD').removeClass("checado");
    $('#checadoE').removeClass("checado");
    resultadoCheck.style.visibility = "hidden";
    contador = 0;
})

$("#btnCheck").click(()=>{
    let aux = 0;
    if(checadoC.classList.contains('checado')){
        aux++;
    }
    if(checadoE.classList.contains('checado')){
        aux++;
    }

    if(aux == 2){
        if(contador==2){
            $("#checkResultado").fadeOut(0).css("visibility","hidden")
            $("#checkResultado").fadeIn(0).css("visibility","visible")
        }
    }




})