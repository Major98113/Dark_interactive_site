$( document ).ready(function() {
    $('#bg_layer').hide();
    $('.sm-menu-nav li').each(function(){
        $(this).fadeOut();
    });
    var CurrentScroll = 0;


    $(window).scroll(function(event){
        var NextScroll = $(this).scrollTop();

        if (NextScroll > CurrentScroll){
            //$(".header").css("position", "relative");
            $('.header').fadeOut();
        }
        else {
           // $(".header").css("position", "fixed");
            $('.header').fadeIn();
        }

        CurrentScroll = NextScroll;  //Updates current scroll position
    });

    $(window).scroll(function() {
       floating_block($(this));
    });


    $('.navbar-toggle').click(function(){
        $('#bg_layer').show();
        $('#bg_layer').animate({
            opacity: 1
        });
        $('.sm-menu').animate({
            left: "0%"
        },500);

        setTimeout(go_down, 500, 250, 0 , $('.navbar-close-button'));
        setTimeout(go_down, 500, 250, 0 , $('.navbar-contacts'));

        var timeout=0;
        $('.sm-menu-nav li').each(function(){
            setTimeout(go_down, 300, (150+timeout), 0 , $(this));
            setTimeout(opacity_up, 100, (150+timeout) , $(this));
            timeout+=50;
        });


    });
    $('.navbar-close-button').click(function(){
        $('#bg_layer').fadeOut(500);
        $('#bg_layer').animate({
            opacity: 0
        });
        $('.sm-menu').animate({
            left: "100%"
        },250);

        setTimeout(go_up, 10, 50, -60 , $('.navbar-close-button'));
        setTimeout(go_down, 10, 50, 95 , $('.navbar-contacts'));

        $('.sm-menu-nav li').each(function(){
            setTimeout(go_down, 10, 50, 200 , $(this));
            $(this).fadeOut();

        });

    });


    timeout=0;
    $('.container-text h1').each(function(){
        setTimeout(move_letters, (150+timeout) , $(this), 2000);
        timeout+=300;
    });

    setTimeout(function() {
        var typed = new Typed('#typed', {
        strings: ["To do more", "To do better", "BE BETTER THAN YESTERDAY!"],
        typeSpeed: 70,
        loop: false
    }); }, 2000);



});


function go_down(time,top, item) {
    item.animate({
        top: top+"px"
    },time);
}

function go_up(time,top, item) {
    item.animate({
        top: top+"px"
    },time);
}

function opacity_up(time,item) {
    item.fadeIn(time);
}


function move_letters(item,time) {
    item.animate({
        top: "0px",
        left: "0px",
        opacity: 1
    },time);
}

function floating_block(item) {
    var degrees= 0;
    if (item.width() > 768) {
        if (item.height() <= 760) {

            if(item.scrollTop() > 0) {
                move_letters($('.first-text-block'),1000);
            }
            if(item.scrollTop() > 500) {
                var timeout=0;
                $('.second-text-block div').each(function(){
                    setTimeout(move_letters, (timeout) , $(this), 300);
                    timeout+=300;
                });
            }
            if(item.scrollTop() <800) {
                degrees= 0;
                dinamic_opacity=1;
                $('#blum').css({
                    'opacity': dinamic_opacity,
                    'transform': 'rotate(' + degrees + 'deg)',
                    '-ms-transform': 'rotate(' + degrees + 'deg)',
                    '-moz-transform': 'rotate(' + degrees + 'deg)',
                    '-webkit-transform': 'rotate(' + degrees + 'deg)',
                    '-o-transform': 'rotate(' + degrees + 'deg)'
                });
                $('#dogs').css({
                    'opacity': (1-dinamic_opacity),
                    'transform': 'rotate(' + degrees + 'deg)',
                    '-ms-transform': 'rotate(' + degrees + 'deg)',
                    '-moz-transform': 'rotate(' + degrees + 'deg)',
                    '-webkit-transform': 'rotate(' + degrees + 'deg)',
                    '-o-transform': 'rotate(' + degrees + 'deg)'
                });
            }

            if(item.scrollTop() > 800  ) {
                degrees = degrees+ (parseInt(item.scrollTop())-800)/2;
                dinamic_opacity=70/degrees;
                $('#blum').css({
                    'opacity': dinamic_opacity,
                    'transform': 'rotate(' + degrees + 'deg)',
                    '-ms-transform': 'rotate(' + degrees + 'deg)',
                    '-moz-transform': 'rotate(' + degrees + 'deg)',
                    '-webkit-transform': 'rotate(' + degrees + 'deg)',
                    '-o-transform': 'rotate(' + degrees + 'deg)'
                });
                $('#dogs').css({
                    'opacity': (1-dinamic_opacity),
                    'transform': 'rotate(' + degrees + 'deg)',
                    '-ms-transform': 'rotate(' + degrees + 'deg)',
                    '-moz-transform': 'rotate(' + degrees + 'deg)',
                    '-webkit-transform': 'rotate(' + degrees + 'deg)',
                    '-o-transform': 'rotate(' + degrees + 'deg)'
                });
            }
        }
    }

}

function versus_watch_dogs(item,position) {

}
