AOS.init({
    offset: 50,
    duration: 400,
    easing: "ease-in-sine",
    delay: 100,
    disable: window.innerWidth < 991
}), $(document).ready(function() {
    var i = new SlickInit(".js-adv-slider");
    i.initSlick(), i.setOptions({
        dots: !0,
        autoplay: !0,
        arrow: !1,
        autoplaySpeed: 3e3
    }), 0 !== $(".js-fancy").length && $(".js-fancy").fancybox(), $(".close_filter").on("click", function() {
        $(this).parents(".filter_list_item").hide()
    }), $(".checkbox_show").on("click", function() {
        $(".hidden_check").addClass("active"), $(".hidden_label").fadeOut()
    }), $('.card_info [href^="#"], .animate-link').click(function() {
        var i = $(this).attr("href");
        return 0 != $(i).length && $("html, body").animate({
            scrollTop: $(i).offset().top
        }, 700), !1
    });
    var s = new SlickInit(".js_salon_slider");
    s.initSlick(), s.setOptions({
        slidesToShow: 4,
        responsive: [{
            breakpoint: 1367,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 1141,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });
    var e = new SlickInit(".js_slider");
    e.initSlick(), e.setOptions({
        slidesToShow: 4,
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    }), new SlickInit(".js_slider_production").initSlick(), $(".js_quasion").not(".slick-initialized").slick({
        infinite: !1,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: !0,
        arrow: !0,
        fade: !0,
        swipe: !1,
        prevArrow: '<div class="slick_prev"></div>',
        nextArrow: '<div class="slick_next"></div>'
    }), $(".js_quasion .btn_prev").on("click", function() {
        $(".js_quasion .slick_prev").trigger("click")
    }), $(".js_quasion .btn_next").on("click", function() {
        $(".js_quasion .slick_next").trigger("click")
    }), $(".js_card_slider").not(".slick-initialized").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: !1,
        fade: !0,
        asNavFor: ".js_card_slider_nav"
    }), $(".js_card_slider_nav").not(".slick-initialized").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: ".js_card_slider",
        dots: !1,
        arrow: !0,
        swipeToSlide: !0,
        prevArrow: '<div class="slick_prev"></div>',
        nextArrow: '<div class="slick_next"></div>'
    }), $(function() {
        var n = $(".bot_arrow"),
            i = $(".header_line a.current");
        if (0 != i.length) var s = i.outerWidth(),
            e = i.position().left;
        $(".header_line a.current").length && n.css({
            left: e,
            width: s
        }), $(".header_line a").on("mouseover", function() {
            var i = $(this).outerWidth(),
                s = $(this).position().left;
            n.stop().animate({
                left: s,
                width: i
            }, "slow")
        }), $(".header_line a").on("click", function() {
            $(this).hasClass("current") || $(this).addClass("current").parent().siblings().children().removeClass("current")
        }), $(".header_line ul").on("mouseout", function(i) {
            var s = $(".header_line a.current"),
                e = s.outerWidth(),
                o = s.position().left;
            n.stop().animate({
                left: o,
                width: e
            }, "slow")
        })
    }), $(".modal").on("hidden.bs.modal", function() {
        $(".js_mask").val("")
    })
});



$(document).ready(function(){
      $('.custome-slider').slick({
        slidesToShow: 4,
        prevArrow: '<span class="slick_prev"></span>',
        nextArrow: '<span class="slick_next"></span>',
        responsive: [
        {
            breakpoint: 1367,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 1141,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]

      });

    });