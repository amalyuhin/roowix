$(function(){
    getIndent();
});
$(window).resize(function(){ getIndent(); });
$(window).scroll(function() {

    _pos = $(window).scrollTop();
    _top = $('.vacancy').offset().top;
    if( _pos >= _top  )	{
        $('.contacts').addClass('show');
    }else{
        $('.contacts').removeClass('show');
    }

});

function getIndent(){
    var h = $(window).height();
    $('#second').css('margin-top', h);
    $('#vacancy').css('margin-bottom', h);
}