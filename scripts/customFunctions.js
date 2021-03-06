function changeMenuColor() {
    let janela = $(window).scrollTop();
    let nav = $('#nav');
    let navLink = $('.nav-item');
    let btnContato = $('.btn-eContato');
    let logoMenu = $('.navbar-logo');
    let toggler = $('.navbar-toggler');
    if (janela == 0) {
        nav.removeClass('bg-light-scrolled');
        nav.addClass('bg-light');
        navLink.removeClass('nav-link-scrolled');
        navLink.addClass('nav-link-default');
        btnContato.removeClass('btn-eContato-scrolled');
        toggler.addClass('toggler');
        logoMenu.attr('src','images/logoBranco.svg');
        return;
    }
    toggler.removeClass('toggler');
    nav.removeClass('bg-light');
    nav.addClass('bg-light-scrolled');
    navLink.addClass('nav-link-scrolled');
    navLink.removeClass('nav-link-default');
    btnContato.addClass('btn-eContato-scrolled');
    logoMenu.attr('src','images/logoGradiente.svg');
}

function isElementVisible(elem,ms,arg) {
    const ref = $(elem);
    if (ref.visible()) {
        ref.animate({opacity: 1}, ms);
    }
}


function blink(elem,ms){
    const ref = $(elem);
    setInterval(()=>{
      if(ref.is(':visible')) return ref.hide();
      ref.show();
    },ms);
}

function loadNews(){
    var i;
    $.get('https://bcpadvogados.com.br/wp-json/wp/v2/posts?per_page=3&_embed',function (data) {
        for(item of data){
            var i = data.indexOf(item) + 1;
            $('.section-7-card-grid').append(`
                <div class="section-7-card-${i}">
                    <img style="margin-top:10%" class="img-responsive wordpress-pic" src="images/quad${i}.jpg"/>
                     <div style="width: 60%">
                        <a target="_blank" href="${item.link}" class="section-7-card-title">${item.title.rendered}</a>
                     </div>
                    <span class="section-7-subtitle">Por: ${item._embedded.author[0].name}</span>
                    <span class="section-7-subtitle">${moment(item.date).format('DD/MM/YYYY')}</span>
                </div>
            `);
        }
    });
}

$(document).ready(()=>{
  let bcpModal = $('.bcpModal');
  let modalCloseButton  = $('.modalCloseButton');
  let contatar = $('#contatar');
  let enviar = $('.sendModalButton');
  let spinner = $('.spinner-border');

  spinner.hide();
  bcpModal.hide();
  contatar.click(()=>{
    bcpModal.show(200);
  });

  modalCloseButton.click(()=>{
    console.log('rodei');
    bcpModal.hide(200);
  });

  enviar.click(()=>{
        let nome = $('#nome').val();
        let assunto = $('#assunto').val();
        let email = $('#email').val();
        let mensagem = $('#mensagem').val();
        $('#enviar').hide();
        spinner.show();
        console.log(nome);
        console.log(assunto);
        console.log(email);
        console.log(mensagem);
        $.post('https://bcpadvogados.com.br/wp-json/contact-form-7/v1/contact-forms/228/feedback',{
            "_wpcf7": 228,
            "_wpcf7_version": "5.1.7",
            "_wpcf7_locale": "pt_PT",
            "_wpcf7_unit_tag": "wpcf7-f228-p204-o1",
            "_wpcf7_container_post": 204,
            "your-name": nome,
            "your-email": email,
            "your-subject": assunto,
            "your-message": mensagem
        },(response)=>{
            spinner.hide();
            $('#enviar').show();
            alert(response.message);
        });


  });
  blink('.titulo-head',500);
  loadNews();
})
$(document).scroll(() => {
    changeMenuColor();
    isElementVisible('.section-1-left',1000);
    isElementVisible('.section-1-image',1000);
    isElementVisible('.image-nascimento',1000);
    isElementVisible('.juridicas',1200);
    isElementVisible('.image3',1000);
    isElementVisible('.section-3-area',1200);
    isElementVisible('.section-4-text',1000);
    isElementVisible('.section-4-image',1200);
    isElementVisible('.card1',1000);
    isElementVisible('.card2',1200);
    isElementVisible('.card3',1400);
    isElementVisible('.card4',1600);
    isElementVisible('.section-5-text',1800);


});

window.scroll({behavior: "smooth"});