
var swiperlink = new Swiper(".linkswiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 4,
  spaceBetween: 30,
});


$(document).ready(function(){

    $(".sec01 .notice > ul > li").click(function(){
        $(this).addClass("on")
            .siblings().removeClass("on");
        $("#"+$(this).data("id")).addClass("on")
            .siblings().removeClass("on");
    });

    // $(".sec01 .notice > ul > li > a.on").click(function(){
    //     return false;
    // });
});