;(function($){
    $(document).ready(function(){
        
        $(document).mouseup(function (e){
            var formItem = $(".form_item");
            if (!formItem.is(e.target) // если клик был не по нашему блоку
                && formItem.has(e.target).length === 0) { // и не по его дочерним элементам
                $('.jq-selectbox__dropdown').hide();
            }
        });

        // if (window.location.href.indexOf("vhodnye-dveri") > -1) 
        //     { 
        //         $(".phone_header-box").html('<a href="tel:+380443910475" class="phone ct-phone-044">+38 (044) 111-11-11</a>');
        //     } 



        //custome slider
        if($('.custome-slider').length){
            $('.custome-slider').on('init', function(slick){
              slick.currentTarget.style.opacity= 1;
            });
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
            $('.js_slider_production').on('init', function(slick){
              slick.currentTarget.style.opacity= 1;
            });
            $('.js_slider_production').slick({
            slidesToShow: 1,
            prevArrow: '<span class="slick_prev"></span>',
            nextArrow: '<span class="slick_next"></span>',
          });
        }

        //adv-slider (enters doors)
        if($('.js-adv-slider').length){
            $('.js-adv-slider').on('init', function(slick){
              slick.currentTarget.style.opacity= 1;
            });
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
                $('.door_image_slider').on('init', function(slick){
                  slick.currentTarget.style.opacity= 1;
                });
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
            $('.doors_slider').on('init', function(slick){
              slick.currentTarget.style.opacity= 1;
            });
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
            $('.js_quasion').on('init', function(slick){
              slick.currentTarget.style.opacity= 1;
            });
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
        

        // doors_slider  // mezkomnatnue
        if($('.doors_interroom').length){
            $('.doors_interroom').on('init', function(slick){
              slick.currentTarget.style.opacity= 1;
            });
            $('.doors_interroom').slick({
  
                slidesToScroll: 1,
                adaptiveHeight: true,
                arrow:true,
                prevArrow:'<div class="slick_prev"></div>',
                nextArrow:'<div class="slick_next"></div>',
                slidesToShow: 6,
                responsive: [{
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1
                    }
                }, {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }]
            });
        }


        //.........inter room doors ........//

        $('.get-custom-door').on('click', function(){
            var text = $(this).data('subject');
            $('#new_style_make_door').html(`<p>${text}</p>`);
        });
        // doors_slider 
        if($('.doors_interroom_02').length){
            $('.doors_interroom_02').on('init', function(slick){
              slick.currentTarget.style.opacity= 1;
            });
            $('.doors_interroom_02').slick({
  
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
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }]
            });
        }


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
        $('.door .calculation_item_1_wrapp input').on('change', function(){
            $('.calculation_item_1_wrapp input').prop( "checked", false );
            $(this).prop('checked', true);
            var imgName = $(this).data('img');
            $('.form_size_img > img ').attr("src", "/wp-content/themes/oceanwpchild/img/white-door/dveri_"+ imgName +".jpg") 
        });
        //end door format

        //check balcon format
        $('.balc .calculation_item_1_wrapp input').on('change', function(){
            $('.calculation_item_1_wrapp input').prop( "checked", false );
            $(this).prop('checked', true);
            var imgName = $(this).data('img');
            $('.form_size_img > img ').attr("src", "/wp-content/themes/oceanwpchild/img/balkon/plan/balcon_"+ imgName +".png") 
        });
        //end door format

        // counter

        calcType = $('#calculation').data('type');

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

            balkonFormat: '',
            workType: {title: 'typework', data: []},
            centerSide: '',
            leftSide: '',
            rightSide: '',
            radius: '',
            balcAccessories: {title: 'typework', data: []} 
        }
        var countDiscont = {
            total: 0,
            show: 0,
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
			var calcObj1 = calcObj['accessories']['data'].length;
			var calcObj2 = calcObj['balcAccessories']['data'].length;
			var calcObj3 = calcObj['workType']['data'].length;
			var calcObj4 = calcObj2+calcObj3;
			console.log(calcObj4);

            if(!calcObj['accessories']['data'].length)  countDiscont.total--;
			if(!calcObj['workType']['data'].length)         countDiscont.total--;
            if(!calcObj['balcAccessories']['data'].length)  countDiscont.total--;
			if(calcObj1==2) {countDiscont.total=countDiscont.total+1;}
			if(calcObj1==3) {countDiscont.total=countDiscont.total+2;}
			if(calcObj1==4) {countDiscont.total=countDiscont.total+3;}
			if(calcObj1==5) {countDiscont.total=countDiscont.total+4;}
			if(calcObj1>5) {countDiscont.total=countDiscont.total+5;}
			if(calcObj4 ==2 && calcObj2 >0  && calcObj3 >0) {countDiscont.total=countDiscont.total;}
			if(calcObj4 ==3 && calcObj2 >0  && calcObj3 >0) {countDiscont.total=countDiscont.total+1;}
			if(calcObj4 ==4 && calcObj2 >0  && calcObj3 >0) {countDiscont.total=countDiscont.total+2;}
			if(calcObj4 ==5 && calcObj2 >0  && calcObj3 >0) {countDiscont.total=countDiscont.total+3;}
			if(calcObj4 ==2 && calcObj2 ==0  && calcObj3 >0) {countDiscont.total=countDiscont.total+1;}
			if(calcObj4 ==3 && calcObj2 ==0  && calcObj3 >0) {countDiscont.total=countDiscont.total+2;}
			if(calcObj4 ==4 && calcObj2 ==0  && calcObj3 >0) {countDiscont.total=countDiscont.total+3;}
			if(calcObj4 ==5 && calcObj2 ==0  && calcObj3 >0) {countDiscont.total=countDiscont.total+4;}			
			if(calcObj4 ==2 && calcObj2 >0  && calcObj3 ==0) {countDiscont.total=countDiscont.total+1;}
			if(calcObj4 ==3 && calcObj2 >0  && calcObj3 ==0) {countDiscont.total=countDiscont.total+2;}
			if(calcObj4 ==4 && calcObj2 >0  && calcObj3 ==0) {countDiscont.total=countDiscont.total+3;}
			if(calcObj4 ==5 && calcObj2 >0  && calcObj3 ==0) {countDiscont.total=countDiscont.total+4;}	
			if(calcObj4 >5) {countDiscont.total=countDiscont.total+5;}
			
            if(countDiscont.total > countDiscont.check && countDiscont.total < 6) {
                countDiscont.check = countDiscont.total;
                $('.js_sale_wrapp').fadeIn(); 
                setTimeout(function () {
                    $('.js_sale_wrapp').fadeOut();
                }, 500);
                showDiscont();
            }else if(countDiscont.total < countDiscont.check){
                countDiscont.check = countDiscont.total;
                showDiscont();
            }
        }

        function showDiscont() {
            if(calcType == 'test') {
                countDiscont.show = countDiscont.total * 125;
                $('.js_options_total_discount').text(countDiscont.show);
            } else {
               countDiscont.show = countDiscont.total;
			    if(countDiscont.show >5) {
					$('.js_options_total_discount').text(5);
				} else {
					$('.js_options_total_discount').text(countDiscont.show);
				}
            }   
        }

        $('.js_option input:text').on('change', function(){
            var calcClass = $(this).data('calc');
            var calcTitle = $(this).data('title');
            if(calcClass == 'centerSide' || calcClass == 'leftSide' || calcClass == 'rightSide' || calcClass == 'radius' ){
                calcObj[calcClass] = { title: calcTitle, data: $(this).val() + ' м' }
            }else{
                calcObj[calcClass] = { title: calcTitle, data: $(this).val() + ' мм' }
            }
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
            var calcName = $(this).data('calc');
            var calcTitle = $(this).data('title');

            for(var i = 0; i < checkBoxs.length; i++){
                if(checkBoxs[i].checked && checkBoxs[i].dataset.calc == calcName)
                   newArray.push(' ' + checkBoxs[i].value);
            }
            calcObj[calcName] = { title: calcTitle, data: newArray };
            showHideDiscont();
        });

        $('.js-button-calculate').click(function(){
            $('#options_result_html').text('');
            for(var key in calcObj){
                if(calcObj[key]) {
                    if(key === 'accessories'     && !calcObj['accessories']['data'].length)     continue;
                    if(key === 'workType'        && !calcObj['workType']['data'].length)        continue;
                    if(key === 'balcAccessories' && !calcObj['balcAccessories']['data'].length) continue;
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
                var calcPositionBottom = $('#bottomAnchor').offset();

                if(scrollBottom > calcPositionTop.top && scrollBottom < calcPositionBottom.top ){
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

            if(validationForms(formData)){
                messAjax(formData);

                var telefone  = formData.phone.replace(/\D+/g,"");
                var nextName  = (formData.fName) ? formData.fName : null;
                var nextEmail = (formData.email) ? formData.email : null;
                
                nextelSubmitForm(telefone, nextName, nextEmail);


                console.log(nextelSubmitForm);

                console.log('send');
            }else{
                console.log('not send');
            }
           
           // if(!openCaseValidate()) return;
           // console.log(formData); return;
           
        });

        function validationForms(form) {
            console.log(form);
            var valid = true;
            
            var length = form.phone.replace(/\D+/g,"").length;
            if(length < 12) valid = false;
            
            return valid;
        }

        function openCaseValidate(){
            validateOpenCase = true;
            var OCN = $('#open_case_name');
           // var OCP = $('#open_case_phone');
            var OCE = $('#open_case_email');

            if(OCN.val()<3) addError(OCN);
            //if(OCP.val().search(regPhone) != 0) addError(OCP);
            if(OCE.val().search(regEmail) != 0) addError(OCE);

            removeError();
            return validateOpenCase;
        }
        function messAjax(data){
           $('.modal').modal('hide');
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
            if(formName == 'selectForm' || formName == 'selectForm2') tempData.phone = $('#' + formName + '_phone').val();
            return tempData;

        }

        function getCalculate() {
            var _calс = {};
            for(var i in calcObj) {
                if(calcObj[i]){
                    if(i == 'accessories' || i == 'workType'  || i ==  'balcAccessories') {
                        if(calcObj[i].data.length) _calс[i] = calcObj[i];
                        continue;
                    }
                    _calс[i] = calcObj[i]
                }
            }
             
            return {
                discount: countDiscont.show,
                calcInfo: _calс
            }
        }


        //selected
        $('.jq-selectbox__select').on('click', function(){
            var el = $(this).parent().find('.jq-selectbox__dropdown');
            if(el.is(':hidden')) {
                $('.jq-selectbox__dropdown').hide();
                el.show();
            } else {
                $('.jq-selectbox__dropdown').hide();
            }
        });

        $('.jq-selectbox__dropdown li').on('click', function(){
            var info = $(this).text();
            $(this).parents('.jq-selectbox').find('.jq-selectbox__select-text').text(info);
            $(this).parents('.jq-selectbox__dropdown').hide().find('.inputSelect').val(info);
        })


        if($('.js_slider_production2').length){
            $('.js_slider_production2').slick({
                slidesToShow: 1,
                prevArrow: '<span class="slick_prev2"></span>',
                nextArrow: '<span class="slick_next2"></span>',
            });
        }

        if($('.js_slider_mk_sliders').length){
             $('.js_slider_mk_sliders').slick({
                slidesToShow: 1,
                prevArrow: '<span class="slick_prev"></span>',
                nextArrow: '<span class="slick_next"></span>',
            });
        }
        

        setTimeout(function(){
            $('.modal_download').removeClass('forAddSlider');
        }, 1500);

        $('.stage .stageswork').on('click', function(){
            var header =  $(this).data('header');
            $('#modal-work-js').text(header);
            $('#stageswork_feedback').val(header);
        })

    });
})(jQuery)
