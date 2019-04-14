<?php include('header.php'); ?>
<header class="header">
    <div class="header_bottom_line">
        <div class="container">
            <div class="row">
                <ul class="">
                    <li>
                        <a href="/vhodnie-dveri" title="Входные двери" class="">Входные двери</a>
                    </li>

                    <li>
                        <a href="/mezhkomnatnye-dveri" title="Межкомнатные двери" class="">Межкомнатные двери</a>
                    </li>

                    <li>
                        <a href="/kuhni" title="Кухни" class="">Кухни</a>
                    </li>

                    <li>
                        <a href="/balkon" title="Балконы" class="">Балконы</a>
                    </li>

                    <li>
                        <a href="/cottage" title="Остекление коттеджей" class="">Остекление коттеджей</a>
                    </li>
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
                    <div class="main_title left_text">
                        Салон                    
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="salon_title" style="background: gray; padding: 20px; margin:10px;">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <div class="main_title left_text">
                        Тут будет 3Д тур                    
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <div class="custome-slider">
                  <div class="slick-slide">
                    <a href="#" class="js-fancy">
                        <img src="img/salon-slide.jpg" class="img-responsive" alt="">
                    </a>
                  </div>
                  <div class="slick-slide">
                    <a href="#" class="js-fancy">
                        <img src="img/salon-slide.jpg" class="img-responsive" alt="">
                    </a>
                  </div>
                  <div class="slick-slide">
                    <a href="#" class="js-fancy">
                        <img src="img/salon-slide.jpg" class="img-responsive" alt="">
                    </a>
                  </div>
                  <div class="slick-slide">
                    <a href="#" class="js-fancy">
                        <img src="img/salon-slide.jpg" class="img-responsive" alt="">
                    </a>
                  </div>
                  <div class="slick-slide">
                    <a href="#" class="js-fancy">
                        <img src="img/salon-slide.jpg" class="img-responsive" alt="">
                    </a>
                  </div>
                  <div class="slick-slide">
                    <a href="#" class="js-fancy">
                        <img src="img/salon-slide.jpg" class="img-responsive" alt="">
                    </a>
                  </div>
                  <div class="slick-slide">
                    <a href="#" class="js-fancy">
                        <img src="img/salon-slide.jpg" class="img-responsive" alt="">
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



<footer class="footer section_border">
    <div class="container">
        <div class="row">
            <div class="col-sm-4">
                <a href="#">
                  <img src="img/logo_190_67.png" class="img-responsive logo_footer" alt="" >
                </a>
            </div>

            <div class="col-sm-4 footer_class">
                <ul class="footer_list">
                    <li>
                    <a href="/" title="Главная" class="">Главная</a>
                </li>

                <li>
                    <a href="/blog" title="Блог" class="">Блог</a>
                </li>

                <li>
                    <a href="/page/about" title="О нас" class="">О нас</a>
                </li>

                <li>
                    <a href="/page/rassrochka" title="Рассрочка" class="">Рассрочка</a>
                </li>

                <li>
                    <a href="/page/salon" title="Салон" class="">Салон</a>
                </li>

                <li>
                    <a href="/page/contacts" title="Контакты" class="current">Контакты</a>
                </li>

                <li>
                    <a href="/page/sitemap" title="Карта сайта" class="">Карта сайта</a>
                </li>
                </ul>
            </div>

            <div class="col-md-3 col-md-offset-1 col-sm-4 phone_header phone_header_footer">
                <a href="tel:+380442289886" class="phone">+38 (044) 228-98-86</a>

                <button class="button button_red button_ico" data-toggle="modal" data-target=".modal_call" data-title="Заказать звонок" data-subject="Заказать звонок с главного сайта">
                    <span>
                        Заказать звонок
                    </span>
                </button>

                <div class="address">
                    Киев, ул.Вербовая , 24, 2 этаж                
                </div>

                <div class="mail">
                    <a href="mailto:info@wid.ua">info@wid.ua</a>
                </div>
            </div>
        </div>
    </div>
</footer>


<div class="footer_line">
    <div class="container">
        <div class="row row_flex">
            <div class="col-sm-4">
                <div class="soc">
                    <a href="#" target="_blank" rel="nofollow">
                      <img class="img-responsive" alt="" src="img/icon/fb.png.pagespeed.ce.dtdQx8G5LR.png" >
                    </a>

                    <a href="#" target="_blank" rel="nofollow">
                      <img class="img-responsive" alt="" src="img/icon/inst.png.pagespeed.ce.HNbLBJ8m9E.png">
                    </a>
                </div>
            </div>

            <div class="col-sm-4 copy">
                Все права защищены. 2008-2019 Компания "Ваш Вид"
            </div>
            <div class="col-sm-4">
                <div class="studio">
                    Сайт разработан<br>
                    в компании <span class="name">WEBRA</span>
                    <a href="#" rel="nofollow" target="_blank" class="link"></a>
                </div>
            </div>
        </div>
    </div>
</div>

<?php include('footer.php'); ?>