// mainSwiper ------------------------------------------------------------
var swiper1 = new Swiper(".mainSwiper", {
    loop: true,
    spaceBetween: 30,
    effect: "fade",
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
//Lineup Swiper ----------------------------------------------------------------
var swiper3 = new Swiper(".headlinerSlide", {
    direction: "vertical",
    loop: true,
    slidesPerView: 1,
    // freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
});

var swiper4 = new Swiper(".lineupSwiper", {
    // loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper3,
    },
});

// Notice Swiper ------------------------------------------------------------
var swiper5 = new Swiper(".noticeSwiper", {
    // loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});
// 모바일에서만 스와이퍼 구현 Timetable M Swiper 
let iw = window.innerWidth;
if (iw < 641) {
    const swiperM = new Swiper('.swiper.timeswiper', {
        spaceBetween: 30,
        scrollbar: {
            el: '.swiper-scrollbar',
            hide: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        observer: true,
        observeParents: true
    });
}
// Timetable M Swiper ---------------------------------------------------
// var swiperM = new Swiper(".timeswiper", {
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//   });

//jQuery===============================================================
$(function () {

    //리사이징 할때마다 새로고침
    var lastWidth = $(window).width();
    $(window).resize(function () {
        if ($(window).width() != lastWidth) {
            location.reload();
            lastWidth = $(window).width();
            return false;
        }
    });

    //mobile header
    $(".headerM i.fa-bars").click(function () {
        $("nav").toggleClass("on");
    });
    $("header nav i.fa-times").click(function () {
        $("header nav").removeClass("on");
    });

    // sec03 tab
    $(".sec03 .tab ul li").click(function () {
        $(this).addClass('on')
            .siblings().removeClass('on');
        $("#" + $(this).data('id')).addClass('on')
            .siblings().removeClass('on');
    });

    //To Top
    $(".scroll").click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 500);
        return false;
    });

    //Noticepop
    $(".sec02 .noticepop > img").click(function () {
        $(".sec02 .noticepop").fadeOut();
    });
    $(".sec02 .noticepop button").click(function () {
        $(".sec02 .noticepop").fadeOut();
    });

    $(".sec02 .notice .swiper-slide:nth-child(1)").click(function () {
        $(".sec02 .noticepop01").fadeIn();
    });
    $(".sec02 .notice .swiper-slide:nth-child(2)").click(function () {
        $(".sec02 .noticepop02").fadeIn();
    });
    $(".sec02 .notice .swiper-slide:nth-child(3)").click(function () {
        $(".sec02 .noticepop03").fadeIn();
    });
    $(".sec02 .notice > h2:nth-of-type(1)").click(function () {
        $(".sec02 .noticepop01").fadeIn();
    });
    // Newspup
    $(".sec02 .newspop button").click(function () {
        $(".sec02 .newspop").hide();
    });
    $(".sec02 .news .newscard:nth-child(1)").click(function () {
        $(".sec02 .newspop.article01").show();
    });
    $(".sec02 .news .newscard:nth-child(2)").click(function () {
        $(".sec02 .newspop.article02").show();
    });
    $(".sec02 .news .newscard:nth-child(3)").click(function () {
        $(".sec02 .newspop.article03").show();
    });
    $(".sec02 .news .newscard:nth-child(4)").click(function () {
        $(".sec02 .newspop.article04").show();
    });
    $(".sec02 .notice > h2:nth-of-type(2)").click(function () {
        $(".sec02 .newspop.article01").show();
    });
    // popup draggable
    $(".sec02 .noticepop").draggable();
    $(".sec02 .newspop").draggable();
    $(".sec04 .productInfo").draggable();

// ??


    // 상품정보제공고시
    $(".sec04 .productInfoButton").click(function () {
        $(".sec04 .productInfo").show();
    });
    $(".sec04 .productInfo .infoClose").click(function () {
        $(".sec04 .productInfo").hide();
    });

    // 할인안내 펼치기_M
    $(".sec04 .infoBoxBt").click(function () {
        $(".sec04 .infoBoxBt").text("예매안내")
        $(".sec04 .infoBox").slideToggle();
        $(".sec04 .closeInfoBox").toggle();
    });
    //할인안내 닫기버튼
    $(".sec04 .closeInfoBox").click(function () {
        $(".sec04 .infoBox").slideUp();
        $(".sec04 .closeInfoBox").hide();
    });

    //오시는길Tab
    $(".route > ul > li").click(function () {
        $(this).addClass("on").siblings().removeClass("on");
        $("#" + $(this).data("id")).addClass("on").siblings().removeClass("on");
    });

    // datepicker(from, to)
    var dateFormat = "mm/dd/yy",
        from = $("#from")
            .datepicker({
                defaultDate: "+1w",
                changeMonth: false,
                numberOfMonths: 1,
                showOn: "both",
                buttonImage: "../img/calendar-alt-regular.svg",
                buttonImageOnly: true,
                buttonText: "Select date",
                minDate: 0, maxDate: "+2D"
            })
            .on("change", function () {
                to.datepicker("option", "minDate", getDate(this));
            }),

        to = $("#to").datepicker({
            defaultDate: "+1w",
            changeMonth: false,
            numberOfMonths: 1,
            showOn: "both",
            buttonImage: "../img/calendar-alt-regular.svg",
            buttonImageOnly: true,
            buttonText: "Select date",
            minDate: 0, maxDate: "+2D"
        })
            .on("change", function () {
                from.datepicker("option", "maxDate", getDate(this));
            });

    function getDate(element) {
        var date;
        try {
            date = $.datepicker.parseDate(dateFormat, element.value);
        } catch (error) {
            date = null;
        }

        return date;
    }

    //             //셀렉트안에 옵션 채우기
    // for (var i = 49; i >= 1; i--) {
    //     $('#montly').append(new Option('No.'+i+'호', '../files/no'+i+'_newsletter.jpg'));
    // }
    // //옵션선택시 웹페이지 이동
    // $('#montly').on('change', function () {
    //     var url = $(this).val();
    //     if (url) {
    //         // window.location = url; //target_self
    //         window.open(url); //target_blank
    //     }
    //     return false;
    // });

    $(".mCustomScrollbar").mCustomScrollbar({
        theme: "light-3"
    });
});
