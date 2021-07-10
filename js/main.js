const faws = document.querySelectorAll('.card')

$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('#nav-bg').addClass('fixed-top bg-nav').fadeIn();
        $('.nav-item a').css('color','rgb(0, 162, 255)')
        $('#nav-img').css({
            'width':'130',
            'height':'55'
        });
        $('.navbar').css('box-shadow','0px 1px 1px rgb(32, 32, 32, 0.3)');
        $('#back2Top').fadeIn();
    } else {
        $('#nav-bg').removeClass('fixed-top bg-nav');
        $('.nav-item a').css('color','#fff')
        $('#nav-img').css({
            'width':'100%',
            'height':'100%'
        });
        $('.navbar').css('box-shadow','0px 0px 0px #000000');
        $('#back2Top').fadeOut();
    }
});