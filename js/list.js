$('.tab_menu li').on('click', function(e){
    e.preventDefault()
    $('.tab_menu li').removeClass('on')
    $(this).addClass('on')
})
$('.look li').on('click', function(e){
    e.preventDefault()
    $('.look li').removeClass('on')
    $(this).addClass('on')
})
$('.size_list li').on('click', function(e){
    e.preventDefault()
    $('.size_list li').removeClass('on')
    $(this).addClass('on')
})
$('.filter > div > a').on('click', function(e){
    e.preventDefault()
    $('.filter > div > a > img').css({
        transform: 'rotate(0)'
    })
    $(this).find('img').css({
        transform: 'rotate(180deg)'
    }).parents('.filter > div').find('ul').toggle()
})
$('.color_list li').on('click', function(e){
    e.preventDefault()
    $('.color_list li').removeClass('on')
    $(this).addClass('on')
})