/* const gnb = document.querySelectorAll('.gnb li');
const sub = document.querySelector('.gnb li .depth1');
$(sub).hide();
$(gnb).on('mouseover', function(){
    $(sub).hide();
    $(this).find('.depth1').stop(true).show(0);
}) */
/* 
$(gnbPM).on('mouseover', function(){
    $(subMM).hide();
    $(subBM).hide();
    $(subPM).stop(true).show(0);
})
$(subPM).on('mouseout', function(){$(subPM).stop(true).hide(0);})
$(gnbMM).on('mouseover', function(){
    $(subPM).hide();
    $(subBM).hide();
    $(subMM).stop(true).show(0);
})
$(subMM).on('mouseout', function(){$(subMM).stop(true).hide(0);})
$(gnbBM).on('mouseover', function(){
    $(subPM).hide();
    $(subMM).hide();
    $(subBM).stop(true).show(0);
})
$(subBM).on('mouseout', function(){$(subBM).stop(true).hide(0);}) */
$('#Top').on('click', function(){$('html, body').animate({scrollTop : 0}, 500)})
$(window).on('scroll', function(){
    if(this.pageYOffset > 750){
        $('#Top button').addClass('on')
    }else{$('#Top button').removeClass('on')}
})