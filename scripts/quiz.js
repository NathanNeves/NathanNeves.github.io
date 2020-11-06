$('#idBotaoPergunta1').click(()=>{

    $('#idResultadoPergunta1Correta').fadeOut(1).css('visibility','hidden')
    $('#idResultadoPergunta1Incorreta').fadeIn(1).css("visibility","visible")

})

$('#idBotaoPergunta2').click(()=>{
    $('#idResultadoPergunta1Incorreta').fadeOut(1).css('visibility','hidden')
    $('#idResultadoPergunta1Correta').fadeIn(1).css("visibility","visible")

})

$('#idBotaoPergunta1nao').click(()=>{
    $('#idResultadoPergunta2Correta').fadeOut(1).css('visibility','hidden')
    $('#idResultadoPergunta2Incorreta').fadeIn(1).css("visibility","visible")

})

$('#idBotaoPergunta1sim').click(()=>{
    $('#idResultadoPergunta2Incorreta').fadeOut(1).css("visibility","hidden")
    $('#idResultadoPergunta2Correta').fadeIn(1).css('visibility','visible')
   

})

$('#idBotaoPergunta2nao').click(()=>{
    $('#idResultadoPergunta3Correta').fadeOut(1).css('visibility','hidden')
    $('#idResultadoPergunta3Incorreta').fadeIn(1).css("visibility","visible")

})

$('#idBotaoPergunta2sim').click(()=>{
    $('#idResultadoPergunta3Incorreta').fadeOut(1).css("visibility","hidden")
    $('#idResultadoPergunta3Correta').fadeIn(1).css('visibility','visible')
   

})

$('#idBotaoPergunta1EC').click(()=>{
    $('#idResultadoPergunta1EE').fadeOut(1).css('visibility','hidden')
    $('#idResultadoPergunta1EC').fadeIn(1).css("visibility","visible")

})

$('#idBotaoPergunta1EE').click(()=>{
    $('#idResultadoPergunta1EC').fadeOut(1).css("visibility","hidden")
    $('#idResultadoPergunta1EE').fadeIn(1).css('visibility','visible')
})

$('#idBotaoPerguntaVerdadeira').click(()=>{
    $('#mod4idResultadoPergunta2Correta').fadeOut(1).css('visibility','hidden')
    $('#mod4idResultadoPergunta2Incorreta').fadeIn(1).css("visibility","visible")

})

$('#idBotaoPerguntaFalsa').click(()=>{
    $('#mod4idResultadoPergunta2Incorreta').fadeOut(1).css("visibility","hidden")
    $('#mod4idResultadoPergunta2Correta').fadeIn(1).css('visibility','visible')
})

$('#idBotaoPerguntaVerdadeiraMod3').click(()=>{
    $('#mod3pergunta1certo').fadeOut(1).css("visibility","hidden")
    $('#mod3pergunta1errado').fadeIn(1).css('visibility','visible')
})

$('#idBotaoPerguntaFalsaMod3').click(()=>{
    $('#mod3pergunta1errado').fadeOut(1).css("visibility","hidden")
    $('#mod3pergunta1certo').fadeIn(1).css('visibility','visible')
})

$('#idBotaoPerguntaFalsaMod2').click(()=>{
    $('#resultadomod2erro').fadeOut(1).css("visibility","hidden")
    $('#resultadomod2acerto').fadeIn(1).css('visibility','visible')
})

$('#idBotaoPerguntaVerdadeiraMod2').click(()=>{
    $('#resultadomod2acerto').fadeOut(1).css("visibility","hidden")
    $('#resultadomod2erro').fadeIn(1).css('visibility','visible')
})

$('#mod5pergunta1V').click(()=>{
    $('#mod5pergunta1Errado').fadeOut(1).css("visibility","hidden")
    $('#mod5pergunta1Certo').fadeIn(1).css('visibility','visible')
})

$('#mod5pergunta1F').click(()=>{
    $('#mod5pergunta1Certo').fadeOut(1).css("visibility","hidden")
    $('#mod5pergunta1Errado').fadeIn(1).css('visibility','visible')
})

$('#mod5pergunta2F').click(()=>{
    $('#mod5pergunta2Errado').fadeOut(1).css("visibility","hidden")
    $('#mod5pergunta2Certo').fadeIn(1).css('visibility','visible')
})

$('#mod5pergunta2V').click(()=>{
    $('#mod5pergunta2Certo').fadeOut(1).css("visibility","hidden")
    $('#mod5pergunta2Errado').fadeIn(1).css('visibility','visible')
})

$('#mod5pergunta3F').click(()=>{
    $('#mod5pergunta3Errado').fadeOut(1).css("visibility","hidden")
    $('#mod5pergunta3Certo').fadeIn(1).css('visibility','visible')
})

$('#mod5pergunta3V').click(()=>{
    $('#mod5pergunta3Certo').fadeOut(1).css("visibility","hidden")
    $('#mod5pergunta3Errado').fadeIn(1).css('visibility','visible')
})

$('#mod5pergunta4V').click(()=>{
    $('#mod5pergunta4Errado').fadeOut(1).css("visibility","hidden")
    $('#mod5pergunta4Certo').fadeIn(1).css('visibility','visible')
})

$('#mod5pergunta4F').click(()=>{
    $('#mod5pergunta4Certo').fadeOut(1).css("visibility","hidden")
    $('#mod5pergunta4Errado').fadeIn(1).css('visibility','visible')
})

$('#mod7pergunta1V').click(()=>{
    $('#mod7pergunta1Certo').fadeOut(1).css("visibility","hidden")
    $('#mod7pergunta1Errado').fadeIn(1).css('visibility','visible')
})

$('#mod7pergunta1F').click(()=>{
    $('#mod7pergunta1Errado').fadeOut(1).css("visibility","hidden")
    $('#mod7pergunta1Certo').fadeIn(1).css('visibility','visible')
})

$('#mod7pergunta2V').click(()=>{
    $('#mod7pergunta2Errado').fadeOut(1).css("visibility","hidden")
    $('#mod7pergunta2Certo').fadeIn(1).css('visibility','visible')
})

$('#mod7pergunta2F').click(()=>{
    $('#mod7pergunta2Certo').fadeOut(1).css("visibility","hidden")
    $('#mod7pergunta2Errado').fadeIn(1).css('visibility','visible')
})