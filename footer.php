
<script src="js/libs.js"></script>
<script src="js/fancy.js"></script>
<script src="js/forms.js"></script>
<script src="js/main.js"></script>

<script>
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
		
</script>

</body>
</html>