$('.color div').on('click', function(e){
    e.preventDefault()
    $('.color div').removeClass('on')
    $(this).addClass('on')
})
$('.size_list li').on('click', function(e){
    e.preventDefault()
    $('.size_list li').removeClass('on')
    $(this).addClass('on')
})
$('.order li').on('click', function(e){
    e.preventDefault()
    $('.order li').removeClass('on')
    $(this).addClass('on')
})
$('.page_num li').on('click', function(e){
    e.preventDefault()
    $('.page_num li').removeClass('on')
    $(this).addClass('on')
})
/* 
let buy = $('.buy > div').offset().top;
let sug = $('#suggestion').offset();
$(window).on('scroll', function(){
    let i = $(this).scrollTop();
    if(buy <= i){
        $('.buy > div').addClass('fix');
    }else if(sug <= i){
        $('.buy > div').removeClass('fix');
    }else{$('.buy > div').removeClass('fix');}
}); */