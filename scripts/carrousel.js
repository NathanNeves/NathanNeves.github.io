const carrousel1 = document.querySelector('#first')

$("#setadircarrousel").click(()=>{
    
    let currentSlide = $(".carrousel-conteudo.active");
    let nextSlide = currentSlide.next();

    let currentBolinha = $(".bolinha.ativa");
    let nextBolinha = currentBolinha.next();

    currentSlide.fadeOut(0).removeClass("active");
    nextSlide.fadeIn(300).addClass("active");
    currentBolinha.removeClass("ativa");
    nextBolinha.fadeIn(300).addClass("ativa");

    if(nextSlide.length == 0){
        $(".carrousel-conteudo").last().fadeIn(300).addClass("active");
        $(".bolinha").last().fadeIn(300).addClass("ativa");
    }
})

$("#setaesqcarrousel").click(()=>{
    let currentSlide = $(".carrousel-conteudo.active");
    let nextSlide = currentSlide.prev();

    let currentBolinha = $(".bolinha.ativa");
    let nextBolinha = currentBolinha.prev();

    currentSlide.fadeOut(0).removeClass("active");
    nextSlide.fadeIn(300).addClass("active");
    currentBolinha.removeClass("ativa");
    nextBolinha.fadeIn(300).addClass("ativa");

    if(nextSlide.length == 0){
        $(".carrousel-conteudo").first().fadeIn(300).addClass("active");
        $(".bolinha").first().fadeIn(300).addClass("ativa");
    }
})