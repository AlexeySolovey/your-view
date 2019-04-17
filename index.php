<?php include('header.php'); ?>






<footer class="footer section_border">
    <div class="container">
        <div class="row">
            <div class="col-sm-4">
                <a href="/"><img src="img/logo_190_67.png" class="img-responsive logo_footer" alt="" data-pagespeed-url-hash="28445216" ></a>
            </div>

            <div class="col-sm-4 footer_class">
                <ul class="footer_list">
                    <li>
                        <a href="/" title="Главная" class="">Главная</a>
                    </li>
                    <li>
                        <a href="/blog" title="Блог" class="current">Блог</a>
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
                        <a href="/page/contacts" title="Контакты" class="">Контакты</a>
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
                        <img src="img/icon/fb.png.pagespeed.ce.dtdQx8G5LR.png" class="img-responsive" alt="">
                    </a>
                    <a href="#" target="_blank" rel="nofollow">
                        <img src="/img/icon/inst.png.pagespeed.ce.HNbLBJ8m9E.png" class="img-responsive" alt="" >
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
                    <a href="#"  target="_blank" class="link"></a>
                </div>
            </div>
        </div>
    </div>
</div>


<div class="modal modal_main modal_call fade in">
    <div class="modal-dialog" role="document">
        <button class="modal_close" type="button" data-dismiss="modal" aria-hidden="true"></button>

        <div class="js_title title">Заказать звонок</div>
        <div class="js_desc desc">
            Оставьте ваши контакты, и наш менеджер свяжется
            с вами в ближайшее время
        </div>

        <form class="ajaxForm form-vertical ng-pristine ng-valid" id="yw1" action="/default/feedbacks/index" method="post">
            <div style="display:none">
                <input type="hidden" value="e8bce8c0e0e94763b6ce1e70b008ef666277678e" name="YII_CSRF_TOKEN">
            </div>
            <input value="1" name="Feedbacks[type]" id="Feedbacks_type" type="hidden">        
            <input value="Заказать звонок с сайта межкомнатные двери" name="Feedbacks[subject]" id="Feedbacks_subject" type="hidden">        
            <input required="required" placeholder="Имя" maxlength="100" class="form_input" name="Feedbacks[name]" id="Feedbacks_name" type="text">        
            <input required="required" placeholder="Телефон" maxlength="100" class="form_input js_mask" name="Feedbacks[phone]" id="Feedbacks_phone" type="text">        
            <button type="submit" class="button">
                <span>Сохранить</span>
            </button>
        </form> 

        <div class="modal_note">
            Ваши персональные данные не будут опубликованы
            или переданы третьим лицам.
        </div>
    </div>
</div>

<?php include('footer.php'); ?>