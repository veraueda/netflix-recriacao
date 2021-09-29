$('.owl-carousel').owlCarousel({
    loop:false,  /* o loop não fica infinito */
    margin:10,   /* intervalo entre as imagens */
    nav:false,    /* aparece ou não os botões < >*/
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{      /* quando for 1000px aparecem 5 itens */
            items:5
        }
    }
})