const indicadores = document.querySelectorAll('#indicador')
const ultimoslide = true;
const primeiroSlide = document.querySelector('#first')

function iOS() {
    return [
      'iPad Simulator',
      'iPhone Simulator',
      'iPod Simulator',
      'iPad',
      'iPhone',
      'iPod'
    ].includes(navigator.platform)
    // iPad on iOS 13 detection
    || (navigator.userAgent.includes("Mac") && "ontouchend" in document)
  }

$("#seta-direita").click(()=>{
    
    let currentSlide = $(".slide.active");
    let nextSlide = currentSlide.next();
    if(!nextSlide.hasClass('slide')){
       $("#seta-direita").fadeOut(1).addClass("disabilitado")
       return; 
    }

    currentSlide.fadeOut(300).removeClass("active");
    nextSlide.fadeIn(300).addClass("active");

    if(nextSlide.next().length == 0){
        $("#seta-direita").fadeOut(1).addClass("disabilitado")
    }

    if(currentSlide.prev()==primeiroSlide){
        for(let i = 0;i<indicadores.length;i++){
            indicadores.fadeOut(1).addClass("disabilitado")
        }
    }

    /*if(currentSlide.prev().length!=0){
        if(currentSlide.prev().prev().length == 0){
            for(let i = 0;i<indicadores.length;i++){
                indicadores.fadeOut(1).addClass("disabilitado")
            }
        }
    }

    if(currentSlide.prev().length == 0){
        $("#indicador").fadeIn(1).removeClass("disabilitado")
    }*/

    if(nextSlide.length == 0){
        $(".slide").last().fadeIn(300).addClass("active");
    }
})

$("#seta-esquerda").click(()=>{
    let currentSlide = $(".slide.active");
    let nextSlide = currentSlide.prev();

    currentSlide.fadeOut(300).removeClass("active");
    nextSlide.fadeIn(300).addClass("active");

    if(ultimoslide){
        $("#seta-direita").fadeIn(100).removeClass("disabilitado")
    }

    if(nextSlide.prev()==primeiroSlide){
        for(let i = 0;i<indicadores.length;i++){
            indicadores.fadeIn(1).removeClass("disabilitado")
        }
    }

    /*if(currentSlide.prev().length!=0){

        for(let i = 0;i<indicadores.length;i++){
            indicadores.fadeOut(1).addClass("disabilitado")
        }
    }

    if(nextSlide.prev().prev().length==0){
        for(let i = 0;i<indicadores.length;i++){
            indicadores.fadeIn(1).removeClass("disabilitado")
        }
    }*/
    
    if(nextSlide.prev().length == 0){
        $("#slider-control").fadeOut(1).addClass("disabilitado")
        $("#iniciar").fadeIn(300).removeClass("disabilitado")
    }

    if(nextSlide.length == 0){
        $(".slide").first().fadeIn(300).addClass("active");
    }
})

$("#iniciar").click(()=>{
    let currentSlide = $(".slide.active");
    let nextSlide = currentSlide.next();

    currentSlide.fadeOut(300).removeClass("active");
    $("#iniciar").fadeOut(1).addClass("disabilitado")
    $("#slider-control").fadeIn(100).removeClass("disabilitado")
    nextSlide.fadeIn(300).addClass("active");

})

$("#btnbackpag2").click(()=>{

    let currentSlide = $("#page5");
    let nextSlide = $("#page2");

    currentSlide.fadeOut(300).removeClass("active");
    nextSlide.fadeIn(300).addClass("active");
})

$("#reload").click(()=>{
    location.reload()
})

$("#revisao1").click(()=>{
    let currentSlide = $(".slide.active");
    let nextSlide = $("#slide5");

    currentSlide.fadeOut(300).removeClass("active");
    nextSlide.fadeIn(300).addClass("active");
    
    if(nextSlide.prev().length == 0){
        $("#slider-control").fadeOut(1).addClass("disabilitado")
        $("#iniciar").fadeIn(300).removeClass("disabilitado")
    }

    if(nextSlide.length == 0){
        $(".slide").first().fadeIn(300).addClass("active");
    }
})

$("#revisao2").click(()=>{
    let currentSlide = $(".slide.active");
    let nextSlide = $("#slide5");

    currentSlide.fadeOut(300).removeClass("active");
    nextSlide.fadeIn(300).addClass("active");
    
    if(nextSlide.prev().length == 0){
        $("#slider-control").fadeOut(1).addClass("disabilitado")
        $("#iniciar").fadeIn(300).removeClass("disabilitado")
    }

    if(nextSlide.length == 0){
        $(".slide").first().fadeIn(300).addClass("active");
    }
})

$("#menu").hover(()=>{
    $("#menu-icon").fadeOut(300).attr("src","./assets/buttons/icone-menu.svg");
    $("#menu-icon").fadeIn(300).attr("src","./assets/buttons/icone-menu-ativo.svg");
},()=>{
    $("#menu-icon").fadeOut(300).attr("src","./assets/buttons/icone-menu-ativo.svg");
    $("#menu-icon").fadeIn(300).attr("src","./assets/buttons/icone-menu.svg");
})

$("#sair").hover(()=>{
    $("#sair-icon").fadeOut(300).css("color","red");
    $("#sair-icon").fadeIn(300).css("color","white");
},()=>{
    $("#sair-icon").fadeOut(300).css("color","white");
    $("#sair-icon").fadeIn(300).css("color","red");
})

$("#divinterroga").hover(()=>{
    $("#interroga").fadeOut(0).attr("src","./assets/SVG-elementos/botao-azul-instrucoes.svg");
    $("#interroga").fadeIn(300).attr("src","./assets/SVG-elementos/botao-azul-instrucoes-ativo.svg");
},()=>{
    $("#interroga").fadeOut(0).attr("src","./assets/SVG-elementos/botao-azul-instrucoes-ativo.svg");
    $("#interroga").fadeIn(300).attr("src","./assets/SVG-elementos/botao-azul-instrucoes.svg");
})

$("#botaodivtela3h").hover(()=>{
    $("#botaodivtela3").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
    $("#botaodivtela3").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
},()=>{
    $("#botaodivtela3").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
    $("#botaodivtela3").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
})

$("#botaodivtela4h").hover(()=>{
    $("#botaodivtela4").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
    $("#botaodivtela4").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
},()=>{
    $("#botaodivtela4").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
    $("#botaodivtela4").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
})

$("#botaodivtela5h").hover(()=>{
    $("#botaodivtela5mod4").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
    $("#botaodivtela5mod4").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
},()=>{
    $("#botaodivtela5mod4").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
    $("#botaodivtela5mod4").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
})

$("#botaodivtela6h").hover(()=>{
    $("#botaodivtela6mod4").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
    $("#botaodivtela6mod4").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
},()=>{
    $("#botaodivtela6mod4").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
    $("#botaodivtela6mod4").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
})

$("#botaodivtela7h").hover(()=>{
    $("#botaodivtela7").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
    $("#botaodivtela7").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
},()=>{
    $("#botaodivtela7").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
    $("#botaodivtela7").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
})

$("#botaodivtela8h").hover(()=>{
    $("#botaodivtela8").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
    $("#botaodivtela8").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
},()=>{
    $("#botaodivtela8").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
    $("#botaodivtela8").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
})

$("#botaodivtela13h").hover(()=>{
    $("#botaodivtela13mod4").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
    $("#botaodivtela13mod4").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
},()=>{
    $("#botaodivtela13mod4").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
    $("#botaodivtela13mod4").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
})

$("#botaodivtela17h").hover(()=>{
    $("#botaodivtela17mod4").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
    $("#botaodivtela17mod4").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
},()=>{
    $("#botaodivtela17mod4").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
    $("#botaodivtela17mod4").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
})

$("#botaodivtela18h_1").hover(()=>{
    $("#botaodivtela18_1mod4").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
    $("#botaodivtela18_1mod4").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
},()=>{
    $("#botaodivtela18_1mod4").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
    $("#botaodivtela18_1mod4").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
})

$("#botaodivtela18h_2").hover(()=>{
    $("#botaodivtela18_2mod4").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
    $("#botaodivtela18_2mod4").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
},()=>{
    $("#botaodivtela18_2mod4").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
    $("#botaodivtela18_2mod4").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
})

$("#organograma4botao1h").hover(()=>{
    $("#organograma4botao1himg").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
    $("#organograma4botao1himg").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
},()=>{
    $("#organograma4botao1himg").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
    $("#organograma4botao1himg").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
})

$("#organograma4botao2h").hover(()=>{
    $("#organograma4botao2himg").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
    $("#organograma4botao2himg").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
},()=>{
    $("#organograma4botao2himg").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
    $("#organograma4botao2himg").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
})

$("#organograma4botao3h").hover(()=>{
    $("#organograma4botao3himg").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
    $("#organograma4botao3himg").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
},()=>{
    $("#organograma4botao3himg").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
    $("#organograma4botao3himg").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
})

$("#organograma4botao4h").hover(()=>{
    $("#organograma4botao4himg").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
    $("#organograma4botao4himg").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
},()=>{
    $("#organograma4botao4himg").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
    $("#organograma4botao4himg").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
})

$("#organograma4botao5h").hover(()=>{
    $("#organograma4botao5himg").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
    $("#organograma4botao5himg").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
},()=>{
    $("#organograma4botao5himg").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
    $("#organograma4botao5himg").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
})

$("#botaodivtela15d").hover(()=>{
    $("#botaodivtela15dimg").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
    $("#botaodivtela15dimg").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
},()=>{
    $("#botaodivtela15dimg").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
    $("#botaodivtela15dimg").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
})

$("#botaodivtela15a").hover(()=>{
    $("#botaodivtela15aimg").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
    $("#botaodivtela15aimg").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
},()=>{
    $("#botaodivtela15aimg").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
    $("#botaodivtela15aimg").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
})

$("#botaodivtela15b").hover(()=>{
    $("#botaodivtela15bimg").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
    $("#botaodivtela15bimg").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
},()=>{
    $("#botaodivtela15bimg").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
    $("#botaodivtela15bimg").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
})

$("#botaodivtela15c").hover(()=>{
    $("#botaodivtela15cimg").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
    $("#botaodivtela15cimg").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
},()=>{
    $("#botaodivtela15cimg").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
    $("#botaodivtela15cimg").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
})

$("#botao3divtela4hmod3_1").hover(()=>{
    $("#imgbotao3divtela4mod3_1").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
    $("#imgbotao3divtela4mod3_1").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
},()=>{
    $("#imgbotao3divtela4mod3_1").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
    $("#imgbotao3divtela4mod3_1").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
})
$("#botao3divtela4hmod3_2").hover(()=>{
    $("#imgbotao3divtela4mod3_2").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
    $("#imgbotao3divtela4mod3_2").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
},()=>{
    $("#imgbotao3divtela4mod3_2").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
    $("#imgbotao3divtela4mod3_2").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
})

$("#botao3divtela5hmod3_1").hover(()=>{
    $("#imgbotao3divtela5mod3_1").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
    $("#imgbotao3divtela5mod3_1").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
},()=>{
    $("#imgbotao3divtela5mod3_1").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
    $("#imgbotao3divtela5mod3_1").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
})

$("#botao3divtela5hmod3_2").hover(()=>{
    $("#imgbotao3divtela5mod3_2").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
    $("#imgbotao3divtela5mod3_2").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
},()=>{
    $("#imgbotao3divtela5mod3_2").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
    $("#imgbotao3divtela5mod3_2").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
})

$("#botao3divtela6hmod3_1").hover(()=>{
    $("#imgbotaodivtela6mod3_1").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
    $("#imgbotaodivtela6mod3_1").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
},()=>{
    $("#imgbotaodivtela6mod3_1").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
    $("#imgbotaodivtela6mod3_1").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
})

$("#botao3divtela6hmod3_2").hover(()=>{
    $("#imgbotaodivtela6mod3_2").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
    $("#imgbotaodivtela6mod3_2").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
},()=>{
    $("#imgbotaodivtela6mod3_2").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
    $("#imgbotaodivtela6mod3_2").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
})

$("#botao3divtela7hmod3").hover(()=>{
    $("#imgbotao3divtela7mod3").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
    $("#imgbotao3divtela7mod3").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
},()=>{
    $("#imgbotao3divtela7mod3").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
    $("#imgbotao3divtela7mod3").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
})

$("#botao3divtela14hmod3").hover(()=>{
    $("#imgbotao3divtela14mod3").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
    $("#imgbotao3divtela14mod3").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
},()=>{
    $("#imgbotao3divtela14mod3").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
    $("#imgbotao3divtela14mod3").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
})

$("#botao3divtela16hmod3_1").hover(()=>{
    $("#imgbotao3divtela16mod3_1").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
    $("#imgbotao3divtela16mod3_1").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
},()=>{
    $("#imgbotao3divtela16mod3_1").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
    $("#imgbotao3divtela16mod3_1").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
})

$("#botao3divtela16hmod3_2").hover(()=>{
    $("#imgbotao3divtela16mod3_2").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
    $("#imgbotao3divtela16mod3_2").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
},()=>{
    $("#imgbotao3divtela16mod3_2").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
    $("#imgbotao3divtela16mod3_2").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
})

$("#botao3divtela16hmod3_3").hover(()=>{
    $("#imgbotao3divtela16mod3_3").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
    $("#imgbotao3divtela16mod3_3").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
},()=>{
    $("#imgbotao3divtela16mod3_3").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
    $("#imgbotao3divtela16mod3_3").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
})

$("#botao3divtela16hmod3_4").hover(()=>{
    $("#imgbotao3divtela16mod3_4").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
    $("#imgbotao3divtela16mod3_4").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
},()=>{
    $("#imgbotao3divtela16mod3_4").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
    $("#imgbotao3divtela16mod3_4").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
})

$("#botao3divtela16hmod3_5").hover(()=>{
    $("#imgbotao3divtela16mod3_5").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
    $("#imgbotao3divtela16mod3_5").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
},()=>{
    $("#imgbotao3divtela16mod3_5").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
    $("#imgbotao3divtela16mod3_5").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
})

$("#botao2divtela2mod2h").hover(()=>{
    $("#botao2divtela2mod2").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
    $("#botao2divtela2mod2").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
},()=>{
    $("#botao2divtela2mod2").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
    $("#botao2divtela2mod2").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
})

$("#botao2divtela3mod2h_2").hover(()=>{
    $("#botao2divtela3mod2_2").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
    $("#botao2divtela3mod2_2").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
},()=>{
    $("#botao2divtela3mod2_2").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
    $("#botao2divtela3mod2_2").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
})

$("#botao2divtela3mod2h_3").hover(()=>{
    $("#botao2divtela3mod2_3").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
    $("#botao2divtela3mod2_3").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
},()=>{
    $("#botao2divtela3mod2_3").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
    $("#botao2divtela3mod2_3").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
})

$("#botao2divtela3mod2h_1").hover(()=>{
    $("#botao2divtela3mod2_1").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
    $("#botao2divtela3mod2_1").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
},()=>{
    $("#botao2divtela3mod2_1").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
    $("#botao2divtela3mod2_1").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
})

$("#botao2divtela8mod2h").hover(()=>{
    $("#botao2divtela8mod2").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
    $("#botao2divtela8mod2").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
},()=>{
    $("#botao2divtela8mod2").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
    $("#botao2divtela8mod2").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
})

$("#botao2divtela10mod2h").hover(()=>{
    $("#botao2divtela10mod2").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
    $("#botao2divtela10mod2").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
},()=>{
    $("#botao2divtela10mod2").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
    $("#botao2divtela10mod2").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
})

$("#botao2divtela12h_1").hover(()=>{
    $("#botao2carta1").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
    $("#botao2carta1").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
},()=>{
    $("#botao2carta1").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
    $("#botao2carta1").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
})

$("#botao2divtela12h_2").hover(()=>{
    $("#botao2carta2").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
    $("#botao2carta2").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
},()=>{
    $("#botao2carta2").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
    $("#botao2carta2").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
})

$("#botao2divtela12h_3").hover(()=>{
    $("#botao2carta3").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
    $("#botao2carta3").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
},()=>{
    $("#botao2carta3").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
    $("#botao2carta3").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
})

$("#botao2divtela12h_4").hover(()=>{
    $("#botao2carta4").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
    $("#botao2carta4").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
},()=>{
    $("#botao2carta4").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
    $("#botao2carta4").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
})

$("#botao2divtela12h_5").hover(()=>{
    $("#botao2carta5").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
    $("#botao2carta5").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
},()=>{
    $("#botao2carta5").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
    $("#botao2carta5").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
})

$("#botao2divtela12h_6").hover(()=>{
    $("#botao2carta6").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
    $("#botao2carta6").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
},()=>{
    $("#botao2carta6").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
    $("#botao2carta6").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
})

$("#botao2divtela12h_7").hover(()=>{
    $("#botao2carta7").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
    $("#botao2carta7").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
},()=>{
    $("#botao2carta7").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
    $("#botao2carta7").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
})

$("#botao2divtela14mod2h").hover(()=>{
    $("#botao2divtela14mod2").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
    $("#botao2divtela14mod2").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
},()=>{
    $("#botao2divtela14mod2").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
    $("#botao2divtela14mod2").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
})

$("#botao2divtela17mod2h_1").hover(()=>{
    $("#botao2pilar1").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
    $("#botao2pilar1").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
},()=>{
    $("#botao2pilar1").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
    $("#botao2pilar1").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
})

$("#botao2divtela17mod2h_2").hover(()=>{
    $("#botao2pilar2").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
    $("#botao2pilar2").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
},()=>{
    $("#botao2pilar2").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
    $("#botao2pilar2").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
})

$("#botao2divtela17mod2h_3").hover(()=>{
    $("#botao2pilar3").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
    $("#botao2pilar3").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
},()=>{
    $("#botao2pilar3").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
    $("#botao2pilar3").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
}) 

$("#botao2divtela19mod2h").hover(()=>{
    $("#botao2divtela19mod2").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
    $("#botao2divtela19mod2").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
},()=>{
    $("#botao2divtela19mod2").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
    $("#botao2divtela19mod2").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
})

$("#botao5divtela3h_1").hover(()=>{
    $("#botao5divtela3_1").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
    $("#botao5divtela3_1").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
},()=>{
    $("#botao5divtela3_1").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
    $("#botao5divtela3_1").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
})

$("#botao5divtela3h_2").hover(()=>{
    $("#botao5divtela3_2").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
    $("#botao5divtela3_2").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
},()=>{
    $("#botao5divtela3_2").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
    $("#botao5divtela3_2").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
})

$("#botao5divtela3h_3").hover(()=>{
    $("#botao5divtela3_3").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
    $("#botao5divtela3_3").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
},()=>{
    $("#botao5divtela3_3").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
    $("#botao5divtela3_3").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
})

$("#botao5divtela3h_4").hover(()=>{
    $("#botao5divtela3_4").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
    $("#botao5divtela3_4").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
},()=>{
    $("#botao5divtela3_4").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
    $("#botao5divtela3_4").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
})

$("#botao5divtela3h_5").hover(()=>{
    $("#botao5divtela3_5").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
    $("#botao5divtela3_5").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
},()=>{
    $("#botao5divtela3_5").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
    $("#botao5divtela3_5").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
})

$("#botao5divtela3h_6").hover(()=>{
    $("#botao5divtela3_6").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
    $("#botao5divtela3_6").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
},()=>{
    $("#botao5divtela3_6").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
    $("#botao5divtela3_6").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
})

$("#botao5divtela3h_7").hover(()=>{
    $("#botao5divtela3_7").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
    $("#botao5divtela3_7").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
},()=>{
    $("#botao5divtela3_7").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
    $("#botao5divtela3_7").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
})

$("#botao5divtela11h_1").hover(()=>{
    $("#botao5divtela11_1").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
    $("#botao5divtela11_1").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
},()=>{
    $("#botao5divtela11_1").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
    $("#botao5divtela11_1").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
})

$("#botao5divtela11h_2").hover(()=>{
    $("#botao5divtela11_2").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
    $("#botao5divtela11_2").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
},()=>{
    $("#botao5divtela11_2").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
    $("#botao5divtela11_2").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
})

$("#botao5divtela11h_3").hover(()=>{
    $("#botao5divtela11_3").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
    $("#botao5divtela11_3").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
},()=>{
    $("#botao5divtela11_3").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
    $("#botao5divtela11_3").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
})

$("#botao5divtela11h_4").hover(()=>{
    $("#botao5divtela11_4").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
    $("#botao5divtela11_4").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
},()=>{
    $("#botao5divtela11_4").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
    $("#botao5divtela11_4").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
})

$("#botao5divtela11h_5").hover(()=>{
    $("#botao5divtela11_5").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
    $("#botao5divtela11_5").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
},()=>{
    $("#botao5divtela11_5").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
    $("#botao5divtela11_5").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
})

$("#botao5divtela11h_6").hover(()=>{
    $("#botao5divtela11_6").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
    $("#botao5divtela11_6").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
},()=>{
    $("#botao5divtela11_6").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
    $("#botao5divtela11_6").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
})

$("#botao5divtela11h_7").hover(()=>{
    $("#botao5divtela11_7").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
    $("#botao5divtela11_7").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
},()=>{
    $("#botao5divtela11_7").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
    $("#botao5divtela11_7").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
})

$("#botao5divtela11h_8").hover(()=>{
    $("#botao5divtela11_8").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
    $("#botao5divtela11_8").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
},()=>{
    $("#botao5divtela11_8").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
    $("#botao5divtela11_8").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
})

$("#botao5divtela11h_9").hover(()=>{
    $("#botao5divtela11_9").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
    $("#botao5divtela11_9").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
},()=>{
    $("#botao5divtela11_9").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
    $("#botao5divtela11_9").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
})

$("#botao5divtela11h_10").hover(()=>{
    $("#botao5divtela11_10").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
    $("#botao5divtela11_10").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
},()=>{
    $("#botao5divtela11_10").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
    $("#botao5divtela11_10").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
})

$("#botao5divtela11h_11").hover(()=>{
    $("#botao5divtela11_11").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
    $("#botao5divtela11_11").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
},()=>{
    $("#botao5divtela11_11").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
    $("#botao5divtela11_11").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
})

$("#botao5divtela11h_12").hover(()=>{
    $("#botao5divtela11_12").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
    $("#botao5divtela11_12").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
},()=>{
    $("#botao5divtela11_12").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
    $("#botao5divtela11_12").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
})

$("#botao5divtela11h_13").hover(()=>{
    $("#botao5divtela11_13").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
    $("#botao5divtela11_13").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
},()=>{
    $("#botao5divtela11_13").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
    $("#botao5divtela11_13").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
})

$("#botao5divtela11h_14").hover(()=>{
    $("#botao5divtela11_14").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
    $("#botao5divtela11_14").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
},()=>{
    $("#botao5divtela11_14").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
    $("#botao5divtela11_14").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
})

$("#botao5divtela11h_15").hover(()=>{
    $("#botao5divtela11_15").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
    $("#botao5divtela11_15").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
},()=>{
    $("#botao5divtela11_15").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
    $("#botao5divtela11_15").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
})

$("#botao5divtela11h_16").hover(()=>{
    $("#botao5divtela11_16").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
    $("#botao5divtela11_16").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
},()=>{
    $("#botao5divtela11_16").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
    $("#botao5divtela11_16").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
})

$("#botao5divtela11h_17").hover(()=>{
    $("#botao5divtela11_17").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
    $("#botao5divtela11_17").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
},()=>{
    $("#botao5divtela11_17").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
    $("#botao5divtela11_17").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
})

$("#botao5divtela11h_18").hover(()=>{
    $("#botao5divtela11_18").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
    $("#botao5divtela11_18").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
},()=>{
    $("#botao5divtela11_18").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
    $("#botao5divtela11_18").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
})


$("#botao5divtela4mod5h").hover(()=>{
    $("#botao5divtela4mod5").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
    $("#botao5divtela4mod5").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
},()=>{
    $("#botao5divtela4mod5").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
    $("#botao5divtela4mod5").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
})

$("#botao5divtela9h_1").hover(()=>{
    $("#botao5divtela9_1").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
    $("#botao5divtela9_1").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
},()=>{
    $("#botao5divtela9_1").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
    $("#botao5divtela9_1").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
})

$("#botao5divtela9h_2").hover(()=>{
    $("#botao5divtela9_2").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
    $("#botao5divtela9_2").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
},()=>{
    $("#botao5divtela9_2").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
    $("#botao5divtela9_2").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
})

$("#botao5divtela9h_3").hover(()=>{
    $("#botao5divtela9_3").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
    $("#botao5divtela9_3").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
},()=>{
    $("#botao5divtela9_3").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
    $("#botao5divtela9_3").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
})

$("#botao7divtela4h_1").hover(()=>{
    $("#botao7divtela4_1").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
    $("#botao7divtela4_1").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
},()=>{
    $("#botao7divtela4_1").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
    $("#botao7divtela4_1").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
})

$("#botao7divtela4h_2").hover(()=>{
    $("#botao7divtela4_2").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
    $("#botao7divtela4_2").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
},()=>{
    $("#botao7divtela4_2").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
    $("#botao7divtela4_2").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
})

$("#botao7divtela4h_3").hover(()=>{
    $("#botao7divtela4_3").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
    $("#botao7divtela4_3").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
},()=>{
    $("#botao7divtela4_3").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
    $("#botao7divtela4_3").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
})

$("#botao7divtela4h_4").hover(()=>{
    $("#botao7divtela4_4").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
    $("#botao7divtela4_4").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
},()=>{
    $("#botao7divtela4_4").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
    $("#botao7divtela4_4").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
})

$("#botao7divtela4h_5").hover(()=>{
    $("#botao7divtela4_5").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
    $("#botao7divtela4_5").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
},()=>{
    $("#botao7divtela4_5").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
    $("#botao7divtela4_5").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
})

$("#botao7divtela19h_1").hover(()=>{
    $("#botao7divtela19_1").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
    $("#botao7divtela19_1").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
},()=>{
    $("#botao7divtela19_1").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
    $("#botao7divtela19_1").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
})

$("#botao7divtela19h_2").hover(()=>{
    $("#botao7divtela19_2").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
    $("#botao7divtela19_2").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
},()=>{
    $("#botao7divtela19_2").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
    $("#botao7divtela19_2").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
})

$("#botao7divtela19h_3").hover(()=>{
    $("#botao7divtela19_3").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
    $("#botao7divtela19_3").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
},()=>{
    $("#botao7divtela19_3").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
    $("#botao7divtela19_3").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
})

$("#botao7divtela19h_4").hover(()=>{
    $("#botao7divtela19_4").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
    $("#botao7divtela19_4").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
},()=>{
    $("#botao7divtela19_4").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
    $("#botao7divtela19_4").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
})

$("#botao7divtela20_1").hover(()=>{
    $("#botao7divtela20_1").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
    $("#botao7divtela20_1").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
},()=>{
    $("#botao7divtela20_1").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
    $("#botao7divtela20_1").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
})


$("#botaodivtela8h_2").hover(()=>{
    $("#botaodivtela8_2").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
    $("#botaodivtela8_2").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
},()=>{
    $("#botaodivtela8_2").fadeOut(0).attr("src","./assets/SVG-elementos/botao-laranja-seta-ativo.svg");
    $("#botaodivtela8_2").fadeIn(300).attr("src","./assets/SVG-elementos/botao-laranja-seta.svg");
})

$("#sair").click(function(){
    window.close();
});


function mobile(){
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
        let modal = new Modal(Swal,true);
        modal.setText('<div class="contentText"><p><span style="font-weight:700">Navegador Mobile Detectado!</span><br><br>Para melhor visualização do site, recomendamos que use o seu celular na horizontal.</p><br><img style="width: 15vw;" src="./assets/SVG-elementos/mao_rotacao.svg" alt="Mão Rotação Celular Horizontal"></div>')
        modal.fire();
    }

    if(iOS()){
        modal.setText('<div class="contentText"><p><span style="font-weight:700">Navegador Mobile Detectado!</span><br><br>Para melhor visualização do site, recomendamos que use o seu celular na horizontal.</p><br><img style="width: 15vw;" src="./assets/SVG-elementos/mao_rotacao.svg" alt="Mão Rotação Celular Horizontal"></div>')
        modal.fire();
    }
}

    
    $(document).ready(()=>{mobile()})








