$(function(){
    getIndent();

    $('.vacancy-list').accordion({ header: "h2", heightStyle: "content" });
});
$(window).resize(function(){ getIndent(); });
$(window).scroll(function() {

    _pos = $(window).scrollTop();
    _top = $('.second').offset().top;
    if( _pos >= _top  )	{
        $('.contacts').addClass('show');
    }else{
        $('.contacts').removeClass('show');
    }

});

function getIndent(){
    var w = $(window).width();
    var h = $(window).height();
    $('#content_screen').css('margin-top', h).css('margin-bottom', h);
    if( w <= 600) {
        $('body').addClass('hide-navbar');
    }else{
        $('body').removeClass('hide-navbar');
    }

}