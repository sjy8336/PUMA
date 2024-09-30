const newS = new Swiper(".new_slide", {
    slidesPerView: 5,
    spaceBetween: 15,
    navigation:{
        prevEl:'.new .swiper-button-prev',
        nextEl:'.new .swiper-button-next',
    },
    scrollbar: {el: '.new .swiper-scrollbar'},
})
const colS = new Swiper(".coll_slide", {
    slidesPerView: 5,
    slidesPerGroup : 5,
    spaceBetween: 35,
    navigation:{
        prevEl:'.collection .swiper-button-prev',
        nextEl:'.collection .swiper-button-next',
    },
})