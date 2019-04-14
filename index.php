<?php include('header.php'); ?>

<div ng-controller="mainController" class="ng-scope">
    <section class="anons anons_mk" style="background-image: url('../img/background.jpg');">
        <div class="container">
            <div class="row">
                <div class="col-md-8 col-sm-12">
                    <div class="title">
                        Закажите межкомнатные двери до конца месяца и получите установку БЕСПЛАТНО                
                    </div>
                </div>

                <div class="col-md-4 col-sm-12">
                    <form class="main_form ng-pristine ng-valid" action="/" method="post">
                        <header class="main_form_header">
                            Моментальный рассчет <br>стоимости двери
                        </header>
                        <div class="main_form_body">
                            <div class="form_item" id="style_select">
                                <div class="name">Выберите стиль:</div>
                                    <div class="jq-selectbox jqselect" style="display: inline-block; position: relative; z-index:100"><select style="margin: 0px; padding: 0px; position: absolute; left: 0px; top: 0px; width: 100%; height: 100%; opacity: 0;">
                                        <option value="Классика">Классика</option>
                                        <option value="Прованс">Прованс</option>
                                        <option value="Модерн">Модерн</option>
                                        <option value="Лофт">Лофт</option>
                                    </select>
                                    <div class="jq-selectbox__select" style="position: relative">
                                        <div class="jq-selectbox__select-text">Классика</div>
                                        <div class="jq-selectbox__trigger">
                                            <div class="jq-selectbox__trigger-arrow"></div>
                                        </div>
                                    </div>
                                    <div class="jq-selectbox__dropdown" style="position: absolute; left: 0px; top: 0px; display: none;">
                                        <ul style="position: relative; list-style: none; overflow: auto; overflow-x: hidden">
                                            <li class="selected sel" style="">Классика</li>
                                            <li style="">Прованс</li>
                                            <li style="">Модерн</li>
                                            <li style="">Лофт</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div class="form_item" id="material_select">
                                <div class="name">Выберите материал:</div>
                                <div class="jq-selectbox jqselect" style="display: inline-block; position: relative; z-index:100">
                                        <select style="margin: 0px; padding: 0px; position: absolute; left: 0px; top: 0px; width: 100%; height: 100%; opacity: 0;">
                                            <option value="МДФ">МДФ</option>
                                            <option value="Крашенные">Крашенные</option>
                                            <option value="Шпонированные">Шпонированные</option>
                                            <option value="Ясень">Ясень</option>
                                            <option value="Дуб">Дуб</option>
                                            <option value="Ольха">Ольха</option>
                                        </select>
                                    <div class="jq-selectbox__select" style="position: relative">
                                        <div class="jq-selectbox__select-text">МДФ</div>
                                        <div class="jq-selectbox__trigger">
                                            <div class="jq-selectbox__trigger-arrow"></div>
                                        </div>
                                    </div>
                                    <div class="jq-selectbox__dropdown" style="position: absolute; left: 0px; top: 0px; display: none;">
                                        <ul style="position: relative; list-style: none; overflow: auto; overflow-x: hidden">
                                            <li class="selected sel" style="">МДФ</li>
                                            <li style="">Крашенные</li>
                                            <li style="">Шпонированные</li>
                                            <li style="">Ясень</li>
                                            <li style="">Дуб</li>
                                            <li style="">Ольха</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="form_item" id="size_select">
                                <div class="name">Выберите размер:</div>
                                    <div class="jq-selectbox jqselect" style="display: inline-block; position: relative; z-index:100">
                                        <select style="margin: 0px; padding: 0px; position: absolute; left: 0px; top: 0px; width: 100%; height: 100%; opacity: 0;">
                                            <option value="600 х 2000 мм">600 х 2000 мм</option>
                                            <option value="700 х 2000 мм">700 х 2000 мм</option>
                                            <option value="800 х 2000 мм">800 х 2000 мм</option>
                                            <option value="900 х 2000 мм">900 х 2000 мм</option>
                                            <option value="Нестандартный">Нестандартный</option>
                                        </select>
                                    <div class="jq-selectbox__select" style="position: relative">
                                        <div class="jq-selectbox__select-text">600 х 2000 мм</div>
                                        <div class="jq-selectbox__trigger">
                                            <div class="jq-selectbox__trigger-arrow"></div>
                                        </div>
                                    </div>
                                    <div class="jq-selectbox__dropdown" style="position: absolute; left: 0px; top: 0px; display: none;">
                                        <ul style="position: relative; list-style: none; overflow: auto; overflow-x: hidden">
                                            <li class="selected sel" style="">600 х 2000 мм</li>
                                            <li style="">700 х 2000 мм</li>
                                            <li style="">800 х 2000 мм</li>
                                            <li style="">900 х 2000 мм</li>
                                            <li style="">Нестандартный</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <button type="button" class="button send_to_form" >
                                Рассчитатьстоимость
                            </button>
                        </div>
                    </form>
                </div>

                <div class="col-sm-12">
                    <div class="anons_block">                      
                        <div class="anons_block_item aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                            <div class="img">
                                <img src="img/door_wihte.png" alt="">
                            </div>
                            <div class="text">
                                Экологически <br>
                                чистые материалы                       
                            </div>
                        </div>                 
                        <div class="anons_block_item aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
                            <div class="img">
                                <img src="img/point.png" alt="">
                            </div>
                            <div class="text">
                                Сухая древесина <br>
                                (влажность до 8%)                                
                            </div>
                        </div>                  
                        <div class="anons_block_item aos-init aos-animate" data-aos="fade-up" data-aos-delay="500">
                            <div class="img">
                                <img src="img/zoom.png" alt="" >
                            </div>
                            <div class="text">
                                Итальянская <br>
                                фурнитура и лаки                                
                            </div>
                        </div>                 
                        <div class="anons_block_item aos-init aos-animate" data-aos="fade-up" data-aos-delay="700">
                            <div class="img">
                                <img src="img/card.png" class="img-responsive" alt=""  >
                            </div>
                            <div class="text">
                                Принимаем платежи <br>
                                по безналичному расчету                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <section class="diagram diagram_mk">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <div class="main_title">
                        Секрет успеха дверей “Ваш Вид”
                    </div>
                    <img src="img/diagram_6.png" class="img-responsive diagram_img" alt="">
                </div>
            </div>
        </div>
    </section>

    <section class="adv-slider">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <div class="main_title"></div>
                        <div class="main_desc"></div>
                        <div class="js-adv-slider slick-initialized slick-slider slick-dotted" style="display: block;">
                        </div>
                            <div class="slick_prev slick-arrow"></div>
                        <div class="slick-list draggable">
                            <div class="slick-track" style="opacity: 1; width: 0px; transform: translate3d(0px, 0px, 0px);">
                                <div class="slick-slide slick-cloned" data-slick-index="-1" aria-hidden="true" style="width: 0px;" tabindex="-1">
                                <img src="" class="img-responsive" alt="">
                            </div>
                            <div class="slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" style="width: 0px;" tabindex="0" role="tabpanel" id="slick-slide00" aria-describedby="slick-slide-control00">
                                <img src="" class="img-responsive" alt="">
                            </div>
                            <div class="slick-slide" data-slick-index="1" aria-hidden="true" style="width: 0px;" tabindex="-1" role="tabpanel" id="slick-slide01" aria-describedby="slick-slide-control01">
                                <img src="" class="img-responsive" alt="" >
                            </div>
                            <div class="slick-slide" data-slick-index="2" aria-hidden="true" style="width: 0px;" tabindex="-1" role="tabpanel" id="slick-slide02" aria-describedby="slick-slide-control02">
                                <img src="" class="img-responsive" alt="" >
                            </div>
                            <div class="slick-slide slick-cloned" data-slick-index="3" aria-hidden="true" style="width: 0px;" tabindex="-1">
                                <img src="" class="img-responsive" alt="">
                            </div>
                            <div class="slick-slide slick-cloned" data-slick-index="4" aria-hidden="true" style="width: 0px;" tabindex="-1">
                                <img src="" class="img-responsive" alt="">
                            </div>
                            <div class="slick-slide slick-cloned" data-slick-index="5" aria-hidden="true" style="width: 0px;" tabindex="-1">
                                <img src="" class="img-responsive" alt="">
                            </div>
                        </div>
                    </div>                           
                             
                    <div class="slick_next slick-arrow"></div>
                    <ul class="slick-dots" role="tablist">
                        <li class="slick-active" role="presentation">
                            <button type="button" role="tab" id="slick-slide-control00" aria-controls="slick-slide00" aria-label="1 of 3" tabindex="0" aria-selected="true">1</button>
                        </li>
                        <li class="" role="presentation">
                            <button type="button" role="tab" id="slick-slide-control01" aria-controls="slick-slide01" aria-label="2 of 3" tabindex="-1">2</button>
                        </li>
                        <li role="presentation" class=""><button type="button" role="tab" id="slick-slide-control02" aria-controls="slick-slide02" aria-label="3 of 3" tabindex="-1">3</button>
                        </li>
                    </ul>
                </div>
                </div>
            </div>
        </div>
    </section>

    <section style="background: #ddd; margin-bottom: 100px;">
        <h1>ТУТ БУДЕТ СЛАЙДЕР</h1>
    </section>

    <section class="door_order_mk">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <div class="main_title">
                        Мы можем изготовить любую
                        дверь на заказ
                    </div>
                </div>

                <div class="door_order_mk_wrapp">
                    <!--                    <div class="order_mk_wrapp_item">-->
                    <!--                        <img src="/public/common/order_mk.jpg" class="img-responsive" alt="">-->
                    <!--                        <div class="name">-->
                    <!--                            С 2D фрезеровкой-->
                    <!--                        </div>-->
                    <!---->
                    <!--                        <button class="button get-custom-door"-->
                    <!--                                data-toggle="modal"-->
                    <!--                                data-target=".make_door"-->
                    <!--                                data-subject="Дверь на заказ"-->
                    <!--                                data-text="
                    Новейшая технология нанесения 3D резьбы одновременно в трёх плоскостях позволяет создавать объёмные модели любых форм и размеров. Двери с 3D фрезеровкой выглядят благородно и изысканно, особенно подходят для классического интерьера.<!--                           "-->
                    <!--                        >-->
                    <!--                            Подробнее-->
                    <!--                        </button>-->
                    <!--                    </div>-->
                    <div class="order_mk_wrapp_item">
                        <img src="img/color.jpg" alt="">
                        <div class="name">
                            С 3D фрезеровкой
                        </div>
                        <button class="button get-custom-door" data-toggle="modal" data-target=".make_door">
                            Подробнее
                        </button>
                    </div>
                    <div class="order_mk_wrapp_item">
                        <img src="img/color.jpg" class="img-responsive" alt="">
                        <div class="name">
                            Любого цвета по
                            RAL каталогу
                        </div>
                        <button class="button get-custom-door" data-toggle="modal">
                            Подробнее
                        </button>
                    </div>
                    <div class="order_mk_wrapp_item">
                        <img src="img/color.jpg" alt="">
                        <div class="name">
                            С накладным штапиком
                        </div>
                        <button class="button get-custom-door" data-toggle="modal">
                            Подробнее
                        </button>
                    </div>
                    <div class="order_mk_wrapp_item">
                        <img src="img/color.jpg" alt="">
                        <div class="name">
                            Любой ширины
                        </div>
                        <button class="button get-custom-door" data-toggle="modal">
                            Подробнее
                        </button>
                    </div>
                    <div class="order_mk_wrapp_item">
                        <img src="img/color.jpg" alt="">
                        <div class="name">
                            1/2/3 створчатые
                        </div>
                        <button class="button get-custom-door" data-toggle="modal">
                            Подробнее
                        </button>
                    </div>
                    <div class="order_mk_wrapp_item">
                        <img src="img/color.jpg" alt="" >
                        <div class="name">
                            С фрамугой
                        </div>
                        <button class="button get-custom-door" data-toggle="modal">
                            Подробнее
                        </button>
                    </div>
                    <div class="order_mk_wrapp_item">
                        <img src="img/color.jpg" class="img-responsive" alt="" >
                        <div class="name">
                            Арочные двери
                        </div>
                        <button class="button get-custom-door" data-toggle="modal">
                            Подробнее
                        </button>
                    </div>
                    <div class="order_mk_wrapp_item">
                        <img src="img/color.jpg" class="img-responsive" alt="" >
                        <div class="name">
                            Со стеклопакетом
                        </div>
                        <button class="button get-custom-door" data-toggle="modal">
                            Подробнее
                        </button>
                    </div>
                    <div class="order_mk_wrapp_item">
                        <img src="img/color.jpg" class="img-responsive" alt="">
                        <div class="name">
                            С витражом или
                            стеклом Тиффани
                        </div>
                        <button class="button get-custom-door" data-toggle="modal" >
                            Подробнее
                        </button>
                    </div>
                    <div class="order_mk_wrapp_item">
                        <img src="img/color.jpg" class="img-responsive" alt="">
                        <div class="name">
                            Двери триплекс
                        </div>
                        <button class="button get-custom-door" data-toggle="modal">
                            Подробнее
                        </button>
                    </div>
                    <div class="order_mk_wrapp_item">
                        <img src="img/color.jpg" class="img-responsive" alt="">
                        <div class="name">
                            С декорированным
                            наличником
                        </div>
                        <button class="button get-custom-door" data-toggle="modal">
                            Подробнее
                        </button>
                    </div>
                    <div class="order_mk_wrapp_item">
                        <img src="img/color.jpg" class="img-responsive" alt="">
                        <div class="name">
                            Порталы
                        </div>
                        <button class="button get-custom-door" data-toggle="modal">
                            Подробнее
                        </button>
                    </div>
                    <div class="order_mk_wrapp_item">
                        <img src="img/color.jpg" class="img-responsive" alt="">
                        <div class="name">
                            Патинирование /
                            старение
                        </div>
                        <button class="button get-custom-door" data-toggle="modal">
                            Подробнее
                        </button>
                    </div>
                    <div class="order_mk_wrapp_item">
                        <img src="img/color.jpg" class="img-responsive" alt="">
                        <div class="name">
                            С порогами
                        </div>
                        <button class="button get-custom-door" data-toggle="modal">
                            Подробнее
                        </button>
                    </div>
                    <div class="order_mk_wrapp_item">
                        <img src="img/color.jpg" class="img-responsive" alt="">
                        <div class="name">
                            Со скрытым монтажом
                        </div>
                        <button class="button get-custom-door" data-toggle="modal">
                            Подробнее
                        </button>
                    </div>
                    <div class="order_mk_wrapp_item">
                        <img src="img/color.jpg" class="img-responsive" alt="">
                        <div class="name">
                            Четвертные двери
                        </div>
                        <button class="button get-custom-door" data-toggle="modal">
                            Подробнее
                        </button>
                    </div>
                    <div class="order_mk_wrapp_item">
                        <img src="img/color.jpg" class="img-responsive" alt="">
                        <div class="name">
                            Матовые или глянцевые
                        </div>
                        <button class="button get-custom-door" data-toggle="modal">
                            Подробнее
                        </button>
                    </div>
                    <div class="order_mk_wrapp_item">
                        <img src="img/color.jpg" class="img-responsive" alt="">
                        <div class="name">
                            С художественной
                            росписью
                        </div>
                        <button class="button get-custom-door" data-toggle="modal">
                            Подробнее
                        </button>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <section style="background: #ddd; margin-bottom: 100px;">
        <h1>ТУТ БУДЕТ СЛАЙДЕР</h1>
    </section>

  


    <section class="best">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="main_title">
                        Почему наш сервис - лучший в Украине                
                    </div>
                </div>
                <div class="best_item best_item_left clearfix">
                    <div class="col-md-10 best_img no_padding col-md-offset-2">
                        <img src="img/m01.jpg" class="img-responsive" alt="">
                    </div>
                    <div class="col-md-5 best_block">
                        <div class="best_block_box">
                            <div class="title">
                                Комплексный подход                                
                            </div>
                            <div class="desc">
                                Мы можем изготовить межкомнатные двери, внутреннюю накладку на входные двери, фасады на кухни, плинтус, столешницу, подоконники и фурнитуру на все двери и мебель в одном стиле и оттенке.                                
                            </div>
                        </div>
                    </div>
                </div>
                <div class="best_item best_item_right clearfix">
                    <div class="col-md-10 best_img no_padding ">
                        <img src="img/m02.jpg" class="img-responsive" alt="">
                    </div>
                    <div class="col-md-5 best_block">
                        <div class="best_block_box">
                            <div class="title">
                                Надёжный штат профессионалов                                
                            </div>
                            <div class="desc">
                                В процессе производства задействованы профессиональные столяры. На замер и монтаж выезжают квалифицированные сотрудники с опытом работы от 5 лет.                                
                            </div>
                        </div>
                    </div>
                </div>
                <div class="best_item best_item_left clearfix">
                    <div class="col-md-10 best_img no_padding col-md-offset-2">
                        <img src="img/m03.jpg" class="img-responsive" alt="">
                    </div>
                    <div class="col-md-5 best_block">
                        <div class="best_block_box">
                            <div class="title">
                                Полный цикл производства                                
                            </div>
                            <div class="desc">
                                Благодаря полному циклу работы нашей компании мы заинтересованы в качестве производимого продукта и несем ответственность за замер, монтаж и производство. А клиент получает всегда качественный продукт и сервис.                                
                            </div>
                        </div>
                    </div>
                </div>
                <div class="best_item best_item_right clearfix">
                    <div class="col-md-10 best_img no_padding ">
                        <img src="img/m04.jpg" class="img-responsive" alt="">
                    </div>
                    <div class="col-md-5 best_block">
                        <div class="best_block_box">
                            <div class="title">
                                Оперативная адресная доставка                                
                            </div>
                            <div class="desc">
                                Благодаря наличию собственного грузового транспорта мы оперативно доставим заказ по любому указанному адресу в точно оговоренные сроки. Вам не нужно заботиться о доставке и дополнительно оплачивать перевозку. В нашем автопарке - 5 машин, каждая из которых постоянно находится в рабочем состоянии и готова выехать по маршруту.                                
                            </div>
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

<?php include('footer.php'); ?>