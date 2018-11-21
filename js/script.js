$( document ).ready(function() {
    $('#bg_layer').hide();
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

    $('.navbar-toggle').click(function(){
        $('#bg_layer').show();
        $('#bg_layer').animate({
            opacity: 1
        });
    });
    $('#bg_layer').click(function(){
        $('#bg_layer').fadeOut(500);
        $('#bg_layer').animate({
            opacity: 0
        });
    });

});
