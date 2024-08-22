$(function (){
    $('.menu-icon').on('click', function (e){
        e.preventDefault();
        $('.main-menu').show();
        $('.menu-close').css('display','flex');
        $(this).hide();

    })
    $('.menu-close').on('click', function (e){
        e.preventDefault();
        $('.main-menu').hide();
        $('.menu-icon').css('display','flex');
        $(this).hide();

    });
    $('.main-carousel').flickity({
        // options
        "wrapAround": true,
        prevNextButtons: false,
        pageDots: false
    });

})