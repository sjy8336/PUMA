$('nav .depth1').hide()
$('nav .gnb_bg').hide()
$('.gnb li').on('mouseover', function(){
    $(this).find('.depth1').stop(true).slideDown();
    $('nav .gnb_bg').stop(true).slideDown();
});
$('.gnb li').on('mouseout', function(){
    $(this).find('.depth1').stop(true).slideUp();
    $('nav .gnb_bg').stop(true).slideUp();
});
$('#Top').on('click', function(){$('html, body').animate({scrollTop : 0}, 500)})
$(window).on('scroll', function(){
    if(this.pageYOffset > 750){
        $('#Top button').addClass('on')
    }else{$('#Top button').removeClass('on')}
})