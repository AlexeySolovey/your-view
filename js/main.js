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
    }), $('.card_info [href^="#"]').click(function() {
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
        


        //........ vhodnie dveri ...........//

        //show calculation 
        $('.calculation_type_radio > input').on('click', function(){
            var valOption = $(this).data('img');
            console.log(valOption);
            var imgOption = $('.option-img');
            imgOption.css('display', 'none');
            for(var i = 0; i < imgOption.length; i++){
                if(valOption === imgOption[i].dataset.name)
                    imgOption[i].style.display = 'block';
            }
        });

        $('.button_show, .animate-link').on('click', function(){
            showCalculation();            
        });
        function showCalculation(){
            $('.button_show').hide();
            $('.img_hide').css('display', 'none');
            $('#next').slideDown(700);
            $("html, body").animate({
                scrollTop: $('#next').offset().top
            }, 700);
            $('.sale_wrapp_block').addClass('opened');
            showDoorSlider();
        }
        //end show calculation

        //check door format
        $('.calculation_item_1_wrapp input').on('change', function(){
            $('.calculation_item_1_wrapp input').prop( "checked", false );
            $(this).prop('checked', true);
            var imgName = $(this).data('img');
            $('.form_size_img > img ').attr("src", "/wp-content/themes/oceanwpchild/img/white-door/dveri_"+ imgName +".jpg") 
        });
        //end door format

        // counter

        var calcObj = {
            dorClass: '',
            dorFormat: '',
            dorImg: '',
            howManyLocks: '',
            locksClass: '',
            accessories: {title: 'accessories', data: []},
            typeForOpen: '',
            width: '',
            height: '',
        }
        var countDiscont = {
            total: 0,
            check: 0,
            incrise: function(){this.total++;},
            uncrise: function(){this.total--;}
        }
        function showHideDiscont(){ // show 1% puss and hide after 1sec
            countDiscont.total = 0;
            for (key in calcObj) {
                if(key === "width" || key === "height") continue;
                if (calcObj[key]) countDiscont.total++;
            }
            if(!calcObj['accessories']['data'].length) countDiscont.total--;

            if(countDiscont.total > countDiscont.check) {
                countDiscont.check = countDiscont.total;
                $('.js_sale_wrapp').fadeIn();
                $('.js_options_total_discount').text(countDiscont.total);
                setTimeout(function () {
                    $('.js_sale_wrapp').fadeOut();
                }, 500);
            }else if(countDiscont.total < countDiscont.check){
                countDiscont.check = countDiscont.total;
                $('.js_options_total_discount').text(countDiscont.total);
            }

           
        }

        $('.js_option input:text').on('change', function(){
            var calcClass = $(this).data('calc');
            var calcTitle = $(this).data('title');
            calcObj[calcClass] = { title: calcTitle, data: $(this).val() + ' мм' }     
        });
        $('.js_option input:radio').on('change', function(){
            var calcClass = $(this).data('calc');
            var calcTitle = $(this).data('title');
            calcObj[calcClass] = { title: calcTitle, data: $(this).val() };
            showHideDiscont();
        });
        $('.js_option input:checkbox').on('change', function(){
            var newArray = [];
            var checkBoxs = $('.js_option input:checkbox');
            var calcTitle = $(this).data('title');

            for(var i = 0; i< checkBoxs.length; i++){
                if(checkBoxs[i].checked)
                   newArray.push(' ' + checkBoxs[i].value);
            }
            calcObj.accessories = { title: calcTitle, data: newArray };
            showHideDiscont();
        });

        $('.js-button-calculate').click(function(){
            $('#options_result_html').text('');
            for(var key in calcObj){
                if(calcObj[key]) {
                    if(key === 'accessories' && !calcObj['accessories']['data'].length) continue;
                    $('#options_result_html').append(`<div class="modal_calculate_item"><div class="left">${calcObj[key].title}</div><div class="right">${calcObj[key].data}</div></div>`);
                }
            }
        })

        // left caluculation block
        if($("#calculation").length){
            $(window).scroll(function () {
                var scroll = $(window).scrollTop();
                var scrollBottom = scroll + $(window).height();
                var calcPositionTop = $("#calculation").offset();
                var calcPositionBottom = $('.models.white_before').offset();
                if(scroll > calcPositionTop.top && scrollBottom < calcPositionBottom.top ){
                    $('.sale_wrapp_block').addClass('canshow');
                }else{
                    $('.sale_wrapp_block').removeClass('canshow');
                }

            });
        }

        // show more text
        $('.more_js_typeSection').on('click', function(){
            $(this).hide();
            $('.js_typeSection_wrapper').removeClass('height_overflow');
        });
        // end show more


        //........ form sending ...........//


        // simple form

        $('.send-mess, .js-door-calculate, .discont-js').on('click', function(){
            var formName = $(this).data('form');
            var formData = takeData(formName);
            if ($(this).hasClass("js-door-calculate")) formData.calucate = getCalculate();
           // if(!openCaseValidate()) return;
            messAjax(formData);
        });

        function openCaseValidate(){
            validateOpenCase = true;
            var OCN = $('#open_case_name');
            var OCP = $('#open_case_phone');
            var OCE = $('#open_case_email');

            if(OCN.val()<3) addError(OCN);
            if(OCP.val().search(regPhone) != 0) addError(OCP);
            if(OCE.val().search(regEmail) != 0) addError(OCE);

            removeError();
            return validateOpenCase;
        }
        function messAjax(data){
           
           $('.modal_call, .modal_calculate').modal('hide');
            $.ajax({
                url: '/wp-admin/admin-ajax.php',
                method: 'POST',
                data: {
                    action: 'open_case',
                    data: data
                },
                success: function (response) {
                    console.log(response);
                    $('.form_input').val('');
                    $(".js_modal_result").modal('show');
                    //$('#open-case-message').text('The message was sent! Thank you!');
                    //$('#open_case_name, #open_case_phone, #open_case_email').val('');
                }
            });
        }

        function takeData(formName){
            var tempData = {};
            $('#'+ formName).find ('input, textearea, select').each(function() {
              tempData[this.name] = $(this).val();
            });
            return tempData;

        }

        function getCalculate() {
            var _calс = {};
            for(var i in calcObj) {
                if(calcObj[i]){
                    if(i == 'accessories') {
                        if(calcObj[i].data.length) _calс[i] = calcObj[i];
                        continue;
                    }
                    _calс[i] = calcObj[i]
                }
            }
             
            return {
                discount: countDiscont.total,
                doorInfo: _calс
            }
        }



    });
})(jQuery)