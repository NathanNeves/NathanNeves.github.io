
$("#modalSetaDireita").click(()=>{
    
    let currentSlide = $(".modalSlide.active");
    let nextSlide = currentSlide.next();
    $("#modalSetaEsquerda").css("visibility","visible") 

    currentSlide.fadeOut(0).removeClass("active");
    nextSlide.fadeIn(300).addClass("active");

    if(nextSlide.length == 0){
        $(".modalSlide").last().fadeIn(300).addClass("active");
    }

    if(nextSlide.next().length == 0){
        $("#modalSetaDireita").css("visibility","hidden")
    }

})

$("#modalSetaEsquerda").click(()=>{
    let currentSlide = $(".modalSlide.active");
    let nextSlide = currentSlide.prev();
    $("#modalSetaDireita").css("visibility","visible")    

    currentSlide.fadeOut(0).removeClass("active");
    nextSlide.fadeIn(300).addClass("active");

    if(nextSlide.length == 0){
        $(".modalSlide").first().fadeIn(300).addClass("active");
    }

    if(nextSlide.prev().length == 0){
        $("#modalSetaEsquerda").css("visibility","hidden")
    }

})


$("#modalSetaDireita1").click(()=>{
    
    let currentSlide = $(".modalSlide1.active");
    let nextSlide = currentSlide.next();
    $("#modalSetaEsquerda1").css("visibility","visible") 

    currentSlide.fadeOut(0).removeClass("active");
    nextSlide.fadeIn(300).addClass("active");

    if(nextSlide.length == 0){
        $(".modalSlide1").last().fadeIn(300).addClass("active");
    }

    if(nextSlide.next().length == 0){
        $("#modalSetaDireita1").css("visibility","hidden")
    }

})

$("#modalSetaEsquerda1").click(()=>{
    let currentSlide = $(".modalSlide1.active");
    let nextSlide = currentSlide.prev();
    $("#modalSetaDireita1").css("visibility","visible")    

    currentSlide.fadeOut(0).removeClass("active");
    nextSlide.fadeIn(300).addClass("active");

    if(nextSlide.length == 0){
        $(".modalSlide1").first().fadeIn(300).addClass("active");
    }

    if(nextSlide.prev().length == 0){
        $("#modalSetaEsquerda1").css("visibility","hidden")
    }

})


$("#modalSetaDireita2").click(()=>{
    
    let currentSlide = $(".modalSlide2.active");
    let nextSlide = currentSlide.next();
    $("#modalSetaEsquerda2").css("visibility","visible") 

    currentSlide.fadeOut(0).removeClass("active");
    nextSlide.fadeIn(300).addClass("active");

    if(nextSlide.length == 0){
        $(".modalSlide2").last().fadeIn(300).addClass("active");
    }

    if(nextSlide.next().length == 0){
        $("#modalSetaDireita2").css("visibility","hidden")
    }

})

$("#modalSetaEsquerda2").click(()=>{
    let currentSlide = $(".modalSlide2.active");
    let nextSlide = currentSlide.prev();
    $("#modalSetaDireita2").css("visibility","visible")    

    currentSlide.fadeOut(0).removeClass("active");
    nextSlide.fadeIn(300).addClass("active");

    if(nextSlide.length == 0){
        $(".modalSlide2").first().fadeIn(300).addClass("active");
    }

    if(nextSlide.prev().length == 0){
        $("#modalSetaEsquerda2").css("visibility","hidden")
    }

})


$("#modalSetaDireita3").click(()=>{
    
    let currentSlide = $(".modalSlide3.active");
    let nextSlide = currentSlide.next();
    $("#modalSetaEsquerda3").css("visibility","visible") 

    currentSlide.fadeOut(0).removeClass("active");
    nextSlide.fadeIn(300).addClass("active");

    if(nextSlide.length == 0){
        $(".modalSlide3").last().fadeIn(300).addClass("active");
    }

    if(nextSlide.next().length == 0){
        $("#modalSetaDireita3").css("visibility","hidden")
    }

})

$("#modalSetaEsquerda3").click(()=>{
    let currentSlide = $(".modalSlide3.active");
    let nextSlide = currentSlide.prev();
    $("#modalSetaDireita3").css("visibility","visible")    

    currentSlide.fadeOut(0).removeClass("active");
    nextSlide.fadeIn(300).addClass("active");

    if(nextSlide.length == 0){
        $(".modalSlide3").first().fadeIn(300).addClass("active");
    }

    if(nextSlide.prev().length == 0){
        $("#modalSetaEsquerda3").css("visibility","hidden")
    }

})


$("#modalSetaDireita4").click(()=>{
    
    let currentSlide = $(".modalSlide4.active");
    let nextSlide = currentSlide.next();
    $("#modalSetaEsquerda4").css("visibility","visible") 

    currentSlide.fadeOut(0).removeClass("active");
    nextSlide.fadeIn(300).addClass("active");

    if(nextSlide.length == 0){
        $(".modalSlide4").last().fadeIn(300).addClass("active");
    }

    if(nextSlide.next().length == 0){
        $("#modalSetaDireita4").css("visibility","hidden")
    }

})

$("#modalSetaEsquerda4").click(()=>{
    let currentSlide = $(".modalSlide4.active");
    let nextSlide = currentSlide.prev();
    $("#modalSetaDireita4").css("visibility","visible")    

    currentSlide.fadeOut(0).removeClass("active");
    nextSlide.fadeIn(300).addClass("active");

    if(nextSlide.length == 0){
        $(".modalSlide4").first().fadeIn(300).addClass("active");
    }

    if(nextSlide.prev().length == 0){
        $("#modalSetaEsquerda4").css("visibility","hidden")
    }

})


$("#modalSetaDireita5").click(()=>{
    
    let currentSlide = $(".modalSlide5.active");
    let nextSlide = currentSlide.next();
    $("#modalSetaEsquerda5").css("visibility","visible") 

    currentSlide.fadeOut(0).removeClass("active");
    nextSlide.fadeIn(300).addClass("active");

    if(nextSlide.length == 0){
        $(".modalSlide5").last().fadeIn(300).addClass("active");
    }

    if(nextSlide.next().length == 0){
        $("#modalSetaDireita5").css("visibility","hidden")
    }

})

$("#modalSetaEsquerda5").click(()=>{
    let currentSlide = $(".modalSlide5.active");
    let nextSlide = currentSlide.prev();
    $("#modalSetaDireita5").css("visibility","visible")    

    currentSlide.fadeOut(0).removeClass("active");
    nextSlide.fadeIn(300).addClass("active");

    if(nextSlide.length == 0){
        $(".modalSlide5").first().fadeIn(300).addClass("active");
    }

    if(nextSlide.prev().length == 0){
        $("#modalSetaEsquerda5").css("visibility","hidden")
    }

})