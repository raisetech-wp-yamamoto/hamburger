$(function(){
    $('#menu, #menu-close').click(
    function(){
        if($('.l-wrapper__right').hasClass('off')){
            $('.l-wrapper__right').removeClass('off');
            $('.l-wrapper__right').css("display","block");//display:noneにしてあるメニュー部分を表示する
            $('.l-wrapper__right').animate({'margin-right':'30%'},300).addClass('on');//元々右側30%にずらして置いてあるので右側に30％marginを与えて画面上に表示する。
        } else {
            $('.l-wrapper__right').addClass('off');
            $('.l-wrapper__right').animate({'margin-right':'0'},300,function(){
                $('.l-wrapper__right').css("display","none");
            });
        }
    });
    
    var $win = $(window);

    $win.on('load resize', function() {
        var windowWidth = window.innerWidth;
        if (windowWidth > 1030) {
            console.log("window size over 1030px");
            $('body *').removeAttr('style');
            $('.l-wrapper__right').addClass("off");
        }
    });

});