let Enav = $('.explan nav').offset().top;
let Rnav = $('.review nav').offset().top;
$(window).on('scroll', function(){
    let i = $(this).scrollTop();
    if(Enav <= i){
        $('.explan nav').addClass('fix');
    }else{
        $('.explan nav').removeClass('fix');
    };
});
$(window).on('scroll', function(){
    let i = $(this).scrollTop();
    if(Rnav <= i){
        $('.review nav').addClass('fix');
    }else{
        $('.review nav').removeClass('fix');
    };
});