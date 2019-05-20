;(function($){
    $(document).ready(function(){

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