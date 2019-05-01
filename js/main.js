AOS.init({
    offset: 50,
    duration: 400,
    easing: "ease-in-sine",
    delay: 100,
    disable: window.innerWidth < 991
}), $(document).ready(function() {
    0 !== $(".js-fancy").length && $(".js-fancy").fancybox(), $(".close_filter").on("click", function() {
        $(this).parents(".filter_list_item").hide()
    }), $(".checkbox_show").on("click", function() {
        $(".hidden_check").addClass("active"), $(".hidden_label").fadeOut()
    }), $('.card_info [href^="#"], .animate-link').click(function() {
        var i = $(this).attr("href");
        return 0 != $(i).length && $("html, body").animate({
            scrollTop: $(i).offset().top
        }, 700), !1
    });
    $(function() {
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
    
    //custome slider
    if($('.custome-slider').length){
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

    }
    //product slider (about us)
    if($('.js_slider_production').length){
        $('.js_slider_production').slick({
        slidesToShow: 1,
        prevArrow: '<span class="slick_prev"></span>',
        nextArrow: '<span class="slick_next"></span>',
      });
    }

    //adv-slider (enters doors)
    if($('.js-adv-slider').length){
        $('.js-adv-slider').slick({
            slidesToShow: 1,
            dots: true,
            autoplay: true,
            arrow: false,
            autoplaySpeed: 3e3,
            prevArrow: '<span class="slick_prev"></span>',
            nextArrow: '<span class="slick_next"></span>',
        });
    }
    
});