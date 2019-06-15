<?php include('header.php'); ?>
<header class="header">
    <div class="header_bottom_line">
        <div class="container">
            <div class="row">
                <ul class="">
                    <li><a href="/entrance_doors.php" title="Входные двери" class="">Входные двери</a></li>
                    <li><a href="/vhodnie-dveri.php" title="Межкомнатные двери" class="">Межкомнатные двери</a></li>
                    <li><a href="/balconies.php" title="Балконы" class="">Балконы</a></li>
                    <li><a href="/glazing_cottages.php" title="Остекление коттеджей" class="">Остекление коттеджей</a></li>
                </ul>
            </div>
        </div>
    </div>
</header>

<div class="content">
	<?php include('pagination.php'); ?>
	<div class="salon_title">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <div class="main_title left_text salon_text">
                        Салон                    
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="panorama panorama-salon">

        <div class="panorama_close">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.9 21.9" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 21.9 21.9">
                <path d="M14.1,11.3c-0.2-0.2-0.2-0.5,0-0.7l7.5-7.5c0.2-0.2,0.3-0.5,0.3-0.7s-0.1-0.5-0.3-0.7l-1.4-1.4C20,0.1,19.7,0,19.5,0  c-0.3,0-0.5,0.1-0.7,0.3l-7.5,7.5c-0.2,0.2-0.5,0.2-0.7,0L3.1,0.3C2.9,0.1,2.6,0,2.4,0S1.9,0.1,1.7,0.3L0.3,1.7C0.1,1.9,0,2.2,0,2.4  s0.1,0.5,0.3,0.7l7.5,7.5c0.2,0.2,0.2,0.5,0,0.7l-7.5,7.5C0.1,19,0,19.3,0,19.5s0.1,0.5,0.3,0.7l1.4,1.4c0.2,0.2,0.5,0.3,0.7,0.3  s0.5-0.1,0.7-0.3l7.5-7.5c0.2-0.2,0.5-0.2,0.7,0l7.5,7.5c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l1.4-1.4c0.2-0.2,0.3-0.5,0.3-0.7  s-0.1-0.5-0.3-0.7L14.1,11.3z"/>
            </svg>
        </div>

        <div id="container" style="width:100%;height:100%;">
            This content requires HTML5/CSS3, WebGL, or Adobe Flash Player Version 10 or higher.
        </div>
        <div class="panorama_ov">
            <div class="panorama__link">
                <img src="/public/common/pano_img.png" class="img-responsive" alt="">
                <div class="title">
                    3D тур
                </div>
                <div class="desc">
                    по салону
                </div>
                <button class="button button_grey">
                    Смотреть
                </button>
            </div>
        </div>
    </div>


    <div class="container" style="padding: 40px 0px 40px 0px;">
        <div class="row">
            <div class="col-sm-12">
                <div class="custome-slider">
                  <div class="slick-slide">
                    <a href="#" class="js-fancy">
                        <img src="img/slider_salon/salon_list_01.jpg" class="img-responsive" alt="">
                    </a>
                  </div>
                  <div class="slick-slide">
                    <a href="#" class="js-fancy">
                        <img src="img/slider_salon/salon_list_02.jpg" class="img-responsive" alt="">
                    </a>
                  </div>
                  <div class="slick-slide">
                    <a href="#" class="js-fancy">
                        <img src="img/slider_salon/salon_list_03.jpg" class="img-responsive" alt="">
                    </a>
                  </div>
                  <div class="slick-slide">
                    <a href="#" class="js-fancy">
                        <img src="img/slider_salon/salon_list_04.jpg" class="img-responsive" alt="">
                    </a>
                  </div>
                  <div class="slick-slide">
                    <a href="#" class="js-fancy">
                        <img src="img/slider_salon/salon_list_05.jpg" class="img-responsive" alt="">
                    </a>
                  </div>
                  <div class="slick-slide">
                    <a href="#" class="js-fancy">
                        <img src="img/slider_salon/salon_list_06.jpg" class="img-responsive" alt="">
                    </a>
                  </div>
                  <div class="slick-slide">
                    <a href="#" class="js-fancy">
                        <img src="img/slider_salon/salon_list_07.jpg" class="img-responsive" alt="">
                    </a>
                  </div>
                </div>
            </div>
        </div>
    </div>

  <section class="salon">
        <div class="container">
            <div class="row">

                <div class="salon_wrapp clearfix">

                    <div class="col-lg-8 salon_text">
                        <div class="title">
                          Посетите наш салон, <br>
                          чтобы посмотреть весь <br>
                          ассортимент дверей                        
                        </div>

                        <div class="desc">
                          Наши консультанты вам все покажут и помогут <br>
                          подобрать двери по вашим параметрам.                        
                        </div>
                    </div>

                    <div class="col-lg-5 salon_form">

                        <div class="salon-form">
                            <div class="salon-form__subtitle">
                                Получите  дополнительную
                            </div>

                            <div class="salon-form__title">
                                скидку 5%                            
                            </div>

                            <div class="salon-form__desc">
                              Запишитесь в наш салон на просмотр и <br>
                              получите скидку
                            </div>

                            <form class="ajaxForm salon-form__form form-vertical ng-pristine ng-valid" id="yw0" action="/default/feedbacks/index" method="post">

                                <div style="display:none">
                                  <input type="hidden">
                                </div>

                                <input value="1" name="Feedbacks[type]" id="Feedbacks_type" type="hidden"> 

                                <input value="Запишитесь в наш салон на просмотр и получите скидку с главного сайта" name="Feedbacks[subject]" id="Feedbacks_subject" type="hidden">

                                <input required="required" placeholder="Ваше имя" maxlength="100" class="form_input" name="Feedbacks[name]" id="Feedbacks_name" type="text"> 

                                <input required="required" placeholder="Ваш телефон" maxlength="100" class="form_input js_mask" name="Feedbacks[phone]" id="Feedbacks_phone" type="text">
                                <button class="button">Записаться</button>
                            </form>                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>



</div>



<?php include('footer.php'); ?>



<script type="text/javascript" src="js/panorama_player.js"></script>
<script type="text/javascript" src="js/skin.js"></script>
<script type="text/javascript" src="js/panorama-script.js"></script>


</body>
</html>