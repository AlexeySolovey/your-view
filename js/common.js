;(function($){
    $(document).ready(function(){
	  $(".inner_info_box").hide(),
		$(".door_inner .name").hover(function() {
			$(this).next().show()
		}, function() {
			$(this).next().hide()
		}),
		
		$('.installation_form ul li').click(function(){
		    var price = $(this).data('price');
		    $(".installation_price_show span").text(price);
		})
		    
		$('.assistant label').click(function(){
		    
            var type_assistant = $(this).data('type');

            if(type_assistant == 'dveri-v-kvartiru') {
                type ="kvartira";
                $("#type").val(type);
            }
            if(type_assistant == 'dveri-v-ofis') {
                type ="dlya-ofisa";
                $("#type").val(type);
            }
            if(type_assistant == 'dveri-v-dom') {
                type ="chastnyj-dom-ulicza";
                $("#type").val(type);
            }
            if(type_assistant == '37') {
                assistant = "ekonom";
                $("#assistant").val(assistant);
            }
            if(type_assistant == '38') {
                assistant = "standart";
                $("#assistant").val(assistant);
            }
            if(type_assistant == '39') {
                assistant = "premium";
                $("#assistant").val(assistant);
            }
            if(type_assistant == '187') {
                radio ="8602040";
                $("#radio").val(radio);
            }
            if(type_assistant == '47') {
                radio = "9602050";
                $("#radio").val(radio);
            }
            if(type_assistant == '249') {
                radio = "1200-2040";
                $("#radio").val(radio);
            }
            if(type_assistant == '999') {
                radio = "0";
                $("#radio").val(radio);
            }
            
            var  par1 = $("#type").val();
            var  par2 = $("#assistant").val();
            var  par3 = $("#radio").val();
            
            if (par3 == "0") {
                $("a.button_res").attr("href",  "/dveri/?filters=czenovoj-segment[" + par2 + "]|naznachenie[" + par1 +"]");
            } else if (par1 != '' && par2 != '' && par3 != '') {
                $("a.button_res").attr("href",  "/dveri/?filters=czenovoj-segment[" + par2 + "]|naznachenie[" + par1 +"]|razmery[" + par3 + "]");
            }
			
            
        })

   // $('.woocommerce-widget-layered-nav-list').hide();

	$('.woocommerce-widget-layered-nav .widget-title, .widget_product_categories .widget-title').on('click', function(){
		var parent = $(this).parent().toggleClass('opened');
		parent.find('.woocommerce-widget-layered-nav-list').toggle();
		parent.find('.product-categories').toggle();
	});



	$(".woocommerce-widget-layered-nav-list").mCustomScrollbar({
        theme:"dark-3"
    });


    });
})(jQuery)