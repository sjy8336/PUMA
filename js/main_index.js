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
const bestS = new Swiper(".best_slide", {
    slidesPerView: 5,
    spaceBetween: 15,
    navigation:{
        prevEl:'.best .swiper-button-prev',
        nextEl:'.best .swiper-button-next',
    },
    scrollbar: {el: '.best .swiper-scrollbar'},
})
const pmStS = new Swiper(".pmSt_slide", {
    slidesPerView: 3,
    slidesPerGroup : 3,
    spaceBetween: 20,
    navigation:{
        prevEl:'.pmSt_right .swiper-button-prev',
        nextEl:'.pmSt_right .swiper-button-next',
    },
    scrollbar: {el: '.pmSt_right .swiper-scrollbar'},
})