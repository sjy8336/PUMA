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
$('.prod_btn li').on('click', function(e){
    e.preventDefault()
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
