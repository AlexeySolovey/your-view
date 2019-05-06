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


;(function($){
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
                autoplaySpeed: 3e3,
            });
        }

        // door image slider
        function showDoorSlider(){
            if($('.door_image_slider').length){
                $('.door_image_slider').slick({
                    slidesToShow: 6,
                    slidesToScroll: 6,
                    prevArrow: '<span class="slick_prev"></span>',
                    nextArrow: '<span class="slick_next"></span>',
                    responsive: [{
                        breakpoint: 1141,
                        settings: {
                            slidesToShow: 6,
                            slidesToScroll: 6
                        }
                    }, {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 4,
                            slidesToScroll: 4
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
        }

        // doors_slider  // enter dors
        if($('.doors_slider').length){
            $('.doors_slider').slick({
  
                slidesToScroll: 1,
                adaptiveHeight: true,
                arrow:true,
                prevArrow:'<div class="slick_prev"></div>',
                nextArrow:'<div class="slick_next"></div>',
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
            });
        }




        
        //js_quasion

        if($('.js_quasion').length){
            $('.js_quasion').slick({
                infinite: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                adaptiveHeight: true,
                arrow:true,
                fade: true,
                swipe: false,
                prevArrow:'<div class="slick_prev"></div>',
                nextArrow:'<div class="slick_next"></div>'
            });
        }

        $('.js_quasion .btn_prev').on('click', function () {
            $('.js_quasion .slick_prev').trigger('click');
        });
        $('.js_quasion .btn_next').on('click', function () {
            $('.js_quasion .slick_next').trigger('click');
        });
        


        // vhodnie dveri

        $('.js_option > input').on('click', function(){
            valOption = this.value;
            var imgOption = $('.option-img');
            imgOption.css('display', 'none');
            for(var i = 0; i < imgOption.length; i++){
                if(valOption === imgOption[i].dataset.name)
                    imgOption[i].style.display = 'block';
            }
        });

        $('.button_show').on('click', function(){
            $(this).hide();
            $('.img_hide').css('display', 'none');
            $('#next').slideDown(700);
            showDoorSlider();
        });
    });
})(jQuery)