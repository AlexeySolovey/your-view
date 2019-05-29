<?php include('header.php'); ?>

<header class="header">
	<div class="header_bottom_line">
        <div class="container">
            <div class="row">
				<ul class="">
		            <li>
			            <a href="#increase_space" title="Увеличить пространство" class="">Увеличить пространство</a>
			        </li>
			        <li>
			            <a href="#models" title="Примеры работ" class="">Примеры работ</a>
			        </li>
			        <li>
			            <a href="#advantages_wrapp" title="Этапы работ" class="">Этапы работ</a>
			        </li>
			        <li>
			            <a href="#rehau" title="Гарантия" class="">Гарантия</a>
			        </li>
			        <li>
			            <a href="#service" title="Почему мы" class="">Почему мы</a>
			        </li>
		        </ul>
            </div>
        </div>
    </div>
</header>



<section class="anons balc" style="background-image: url('/img/balcon_bg.jpeg');">
    <div class="container">
        <div class="row">
            <div class="col-sm-7 col-xs-12">
                <h1>Качественные балконы под ключ с гарантией 5 лет и бессрочным обслуживанием</h1>
                <ul class="anons_li">
                    <li class="door door0">
                        Используем оригинальные оконные профили Rehau
                    </li>
                    <li class="door door1">
                        Теплый или холодный балкон
                    </li>
                    <li class="door door2">
                        Гарантированный срок сдачи - не более 10 дней после замера
                    </li>
                    <li class="door door3">
                        Принимаем платежи по безналичному расчету
                    </li>
                </ul>
            </div>
            <div class="col-sm-5 col-xs-12">
                <form class="main_form ng-pristine ng-valid">
                    <header class="main_form_header">
                        Моментальный расчет <br>
                        стоимости балкона
                    </header>
                    <div class="main_form_body">
                        <div class="form_item">
                            <div class="name">Габариты:</div>
                            <div id="size_select-styler" class="jq-selectbox jqselect" style=" position: relative; z-index:100">
                                <select id="size_select" style="margin: 0px; padding: 0px; position: absolute; left: 0px; top: 0px; width: 100%; height: 100%; opacity: 0;">
                                    <option value="3 метра">3 метра</option>
                                    <option value="3.5 метра">3.5 метра</option>
                                    <option value="4.5 метра">4.5 метра</option>
                                    <option value="5 метров">5 метров</option>
                                    <option value="6 метров">6 метров</option>
                                    <option value="другой">другой</option>
                                </select>
                                <div class="jq-selectbox__select" style="position: relative">
                                    <div class="jq-selectbox__select-text">3 метра</div>
                                    <div class="jq-selectbox__trigger">
                                        <div class="jq-selectbox__trigger-arrow"></div>
                                    </div>
                                </div>
                                <div class="jq-selectbox__dropdown" style="position: absolute; display: none;">
                                    <ul style="position: relative; list-style: none; overflow: auto; overflow-x: hidden">
                                        <li class="selected sel" style="">3 метра</li>
                                        <li style="">3.5 метра</li>
                                        <li style="">4.5 метра</li>
                                        <li style="">5 метров</li>
                                        <li style="">6 метров</li>
                                        <li style="">другой</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="form_item">
                            <div class="name">Тип балкона:</div>
                            <div id="syle_select-styler" class="jq-selectbox jqselect" style=" position: relative; z-index:100">
                                <select id="syle_select" style="margin: 0px; padding: 0px; position: absolute; left: 0px; top: 0px; width: 100%; height: 100%; opacity: 0;">
                                    <option value="Прямой">Прямой</option>
                                    <option value="Г-образный">Г-образный</option>
                                    <option value="П-образный">П-образный</option>
                                    <option value="Другой">Другой</option>
                                </select>
                                <div class="jq-selectbox__select" style="position: relative">
                                    <div class="jq-selectbox__select-text">Прямой</div>
                                    <div class="jq-selectbox__trigger">
                                        <div class="jq-selectbox__trigger-arrow"></div>
                                    </div>
                                </div>
                                <div class="jq-selectbox__dropdown" style="position: absolute; display: none;">
                                    <ul style="position: relative; list-style: none; overflow: auto; overflow-x: hidden">
                                        <li class="selected sel" style="">Прямой</li>
                                        <li style="">Г-образный</li>
                                        <li style="">П-образный</li>
                                        <li style="">Другой</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="form_item">
                            <div class="name">Утепление:</div>
                            <div id="material_select-styler" class="jq-selectbox jqselect" style=" position: relative; z-index:100">
                                <select id="material_select" style="margin: 0px; padding: 0px; position: absolute; left: 0px; top: 0px; width: 100%; height: 100%; opacity: 0;">
                                    <option value="Теплый балкон">Теплый балкон</option>
                                    <option value="Холодный балкон">Холодный балкон</option>
                                </select>
                                <div class="jq-selectbox__select" style="position: relative">
                                    <div class="jq-selectbox__select-text">Теплый балкон</div>
                                    <div class="jq-selectbox__trigger">
                                        <div class="jq-selectbox__trigger-arrow"></div>
                                    </div>
                                </div>
                                <div class="jq-selectbox__dropdown" style="position: absolute; display: none;">
                                    <ul style="position: relative; list-style: none; overflow: auto; overflow-x: hidden">
                                        <li class="selected sel" style="">Теплый балкон</li>
                                        <li style="">Холодный балкон</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <button type="button" class="button send_to_form" data-toggle="modal" data-target=".modal_select" data-subject="Рассчитать стоимость с сайта балконов" data-button="Рассчитать стоимость" data-title="Наш менеджер уже рассчитывает стоимость! Введите номер телефона, по которому с вами можно связаться" data-show=".modal-ty">
                            Рассчитать стоимость
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>

<section class="diagram balc">
    <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <h2 class="main_title"></h2>
                <div class="diagram_bg" style="background-image: url('img/diagram_balconies.jpg')">
                </div>
            </div>
        </div>
    </div>
</section>


<section class="increase_space increase_space_new" id="increase_space">
    <div class="container">
        <div class="title">Сделайте балкон частью квартиры</div>
        <div class="row">
            <div class="col-sm-4 space_item">
                <div class="space_item_img">
                    <img class="img-responsive" alt="" src="/img/balkon/balkon1.jpg">
                    <div class="space_price">
                        от 450 грн/м.п.
                    </div>
                </div>
                <div class="space_title">
                    Вынос балкона                </div>
                <button class="button button_sm" data-toggle="modal" data-target=".modal_example" data-subject="Посмотреть примеры с сайта балконов" data-button="Отправить заявку" data-title="Чтобы уточнить стоимость, оставьте заявку" data-type="4" data-show=".modal-ty">
                    Посмотреть примеры
                </button>
            </div>
            <div class="col-sm-4 space_item">
                <div class="space_item_img">
                    <img class="img-responsive" alt="" src="/img/balkon/balkon2.jpg">
                    <div class="space_price">
                        от 6500 грн.
                    </div>
                </div>
                <div class="space_title">
                    Остекление                </div>
                <button class="button button_sm" data-toggle="modal" data-target=".modal_example" data-subject="Посмотреть примеры с сайта балконов" data-button="Отправить заявку" data-title="Чтобы уточнить стоимость, оставьте заявку" data-type="5" data-show=".modal-ty">
                    Посмотреть примеры
                </button>
            </div>
            <div class="col-sm-4 space_item">
                <div class="space_item_img">
                    <img class="img-responsive" alt="" src="/img/balkon/balkon3.jpg">
                    <div class="space_price">
                        от 140 грн./м.кв.
                    </div>
                </div>
                <div class="space_title">
                    Утепление балкона                </div>
                <button class="button button_sm" data-toggle="modal" data-target=".modal_example" data-subject="Посмотреть примеры с сайта балконов" data-button="Отправить заявку" data-title="Чтобы уточнить стоимость, оставьте заявку" data-type="6" data-show=".modal-ty">
                    Посмотреть примеры
                </button>
            </div>
            <div class="col-sm-4 space_item">
                <div class="space_item_img">
                    <img class="img-responsive" alt="" src="/img/balkon/balkon4.jpg">
                    <div class="space_price">
                        от 310 грн./м.кв.
                    </div>
                </div>
                <div class="space_title">
                    Обшивка балкона                </div>
                <button class="button button_sm" data-toggle="modal" data-target=".modal_example" data-subject="Посмотреть примеры с сайта балконов" data-button="Отправить заявку" data-title="Чтобы уточнить стоимость, оставьте заявку" data-type="7" data-show=".modal-ty">Посмотреть примеры
                </button>
            </div>
            <div class="col-sm-4 space_item">
                <div class="space_item_img">
                    <img class="img-responsive" alt="" src="/img/balkon/balkon5.jpg">
                    <div class="space_price">
                        от 4000 грн.
                    </div>
                </div>
                <div class="space_title">
                    Сделать кладовку                </div>
                <button class="button button_sm" data-toggle="modal" data-target=".modal_example" data-subject="Посмотреть примеры с сайта балконов" data-button="Отправить заявку" data-title="Чтобы уточнить стоимость, оставьте заявку" data-type="8" data-show=".modal-ty">Посмотреть примеры
                </button>
            </div>
            <div class="col-sm-4 space_item">
                <div class="space_item_img">
                    <img class="img-responsive" alt="" src="/img/balkon/balkon6.jpg">
                    <div class="space_price">
                        от 4000 грн.
                    </div>
                </div>
                <div class="space_title">
                    Сделать кабинет или рабочее место                </div>
                <button class="button button_sm" data-toggle="modal" data-target=".modal_example" data-subject="Посмотреть примеры с сайта балконов" data-button="Отправить заявку" data-title="Чтобы уточнить стоимость, оставьте заявку" data-type="9" data-show=".modal-ty">Посмотреть примеры
                </button>
            </div>
            <div class="col-sm-4 space_item">
                <div class="space_item_img">
                    <img class="img-responsive" alt="" src="/img/balkon/balkon7.jpg">
                    <div class="space_price">
                        от 20000 грн.
                    </div>
                </div>
                <div class="space_title">
                    Увеличить пространство гостинной                </div>
                <button class="button button_sm" data-toggle="modal" data-target=".modal_example" data-subject="Посмотреть примеры с сайта балконов" data-button="Отправить заявку" data-title="Чтобы уточнить стоимость, оставьте заявку" data-type="10" data-show=".modal-ty">Посмотреть примеры
                </button>
            </div>
            <div class="col-sm-4 space_item">
                <div class="space_item_img">
                    <img class="img-responsive" alt="" src="/img/balkon/balkon8.jpg">
                    <div class="space_price">
                        от 20000 грн.
                    </div>
                </div>
                <div class="space_title">
                    Увеличить пространство кухни                </div>
                <button class="button button_sm" data-toggle="modal" data-target=".modal_example" data-subject="Посмотреть примеры с сайта балконов" data-button="Отправить заявку" data-title="Чтобы уточнить стоимость, оставьте заявку" data-type="11" data-show=".modal-ty">Посмотреть примеры
                </button>
            </div>
            <div class="col-sm-4 space_item">
                <div class="space_item_img">
                    <img class="img-responsive" alt="" src="/img/balkon/balkon9.jpg">
                    <div class="space_price">
                        от 20000 грн.
                    </div>
                </div>
                <div class="space_title">
                    Увеличить детскую комнату                </div>
                <button class="button button_sm" data-toggle="modal" data-target=".modal_example" data-subject="Посмотреть примеры с сайта балконов" data-button="Отправить заявку" data-title="Чтобы уточнить стоимость, оставьте заявку" data-type="12" data-show=".modal-ty">Посмотреть примеры
                </button>
            </div>
        </div>
    </div>
</section>








<section class="calculation">

    <div class="container clearfix">
        <div class="row">
            <div class="sale_wrapp_block" ng-show="calculation_item_show">
                <div class="sale_title">
                    Ваша скидка составляет:
                </div>
                <div class="sale_price">
                    <span class="js_options_total_discount">0</span> грн

                    <div class="js_sale_wrapp">
                        + <span id="global_option_discount">0</span> грн
                    </div>
                </div>
                <button class="button" type="button" data-toggle="modal" data-target=".modal_sale" data-subject="Рассчитать стоимость работ с сайта балконов">Зафиксировать скидку</button>
            </div>
            <div class="calculation_title">
                Рассчитайте стоимость вашего балкона online
            </div>
            <div class="calculation_desc">
                Получите дополнительную скидку от компании "Ваш Вид"
            </div>
        </div>

        <form action="/" method="post" id="param_kitchen" class="ng-pristine ng-valid">

            <div class="calculation_item calculation_item_0  clearfix">
                <div class="container">
                    <div class="row">
                        <div class="col-md-3 col-sm-4">
                            <div class="calculation_type_radio">
                                <div class="title">
                                    Выберите необходимые <br>
                                    работы
                                </div>

                                <div class="check js_option" data-name="Необходимые работы">
                                    <input type="checkbox" id="bk1" class="checkbox" data-val="Остекление" data-value="Остекление" name="bk1">
                                    <label for="bk1" class="js_label" data-hover=".js_input_1">Остекление</label>

                                    <input type="checkbox" id="bk2" class="checkbox" name="bk2" data-val="Вынос по подоконнику" data-value="Вынос по подоконнику">
                                    <label for="bk2" class="js_label" data-hover=".js_input_2">Вынос по подоконнику</label>

                                    <input type="checkbox" id="bk3" class="checkbox" name="bk3" data-val="Вынос по плите" data-value="Вынос по плите">
                                    <label for="bk3" class="js_label" data-hover=".js_input_3">Вынос по плите</label>

                                    <input type="checkbox" id="bk4" class="checkbox" name="bk4" data-val="Обшивка наружная" data-value="Обшивка наружная">
                                    <label for="bk4" class="js_label" data-hover=".js_input_4">Обшивка наружная</label>

                                    <input type="checkbox" id="bk5" class="checkbox" name="bk5" data-val="Утепление" data-value="Утепление">
                                    <label for="bk5" class="js_label" data-hover=".js_input_5">Утепление</label>

                                    <input type="checkbox" id="bk6" class="checkbox" name="bk6" data-val="Объединение с комнатой" data-value="Объединение с комнатой">
                                    <label for="bk6" class="js_label" data-hover=".js_input_6">Объединение с комнатой</label>

                                    <input type="checkbox" id="bk7" class="checkbox" name="bk7" data-val="Изготовление мебели на балкон" data-value="Изготовление мебели на балкон">
                                    <label for="bk7" class="js_label" data-hover=".js_input_7">Изготовление мебели на балкон</label>
                                </div>

                                <div class="js_open button_show" value="1" ng-click="calculation_item_show = true"></div>
                                <a href="#next" type="button" class="button button_show ">Далее</a>
                            </div>
                        </div>
                        <div class="col-md-9 col-sm-8">
                            <div class="calculation_type_radio_img">
                                <img class="img-responsive js_input js_input_1 active" alt="" data-pagespeed-url-hash="52941484" src="/public/common/balcon_type-1.png.pagespeed.ce.czB4QLFdFu.png" onerror="this.onerror=null;pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);">
                                <img class="img-responsive js_input js_input_2" alt="" data-pagespeed-url-hash="347441405" src="/public/common/balcon_type-2.png.pagespeed.ce.nb_i0HSe0H.png" onerror="this.onerror=null;pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);">
                                <img class="img-responsive js_input js_input_3" alt="" data-pagespeed-url-hash="641941326" src="/public/common/balcon_type-3.png.pagespeed.ce.fkmLxCBitN.png" onerror="this.onerror=null;pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);">
                                <img class="img-responsive js_input js_input_4" alt="" data-pagespeed-url-hash="936441247" src="/public/common/balcon_type-4.png.pagespeed.ce.v_NsHU4clF.png" onerror="this.onerror=null;pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);">
                                <img class="img-responsive js_input js_input_5" alt="" data-pagespeed-url-hash="1230941168" src="/public/common/balcon_type-5.png.pagespeed.ce.iQDNuS2fbM.png" onerror="this.onerror=null;pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);">
                                <img class="img-responsive js_input js_input_6" alt="" data-pagespeed-url-hash="1525441089" src="/public/common/balcon_type-6.png.pagespeed.ce.XkSCtfQEIn.png" onerror="this.onerror=null;pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);">
                                <img class="img-responsive js_input js_input_7" alt="" data-pagespeed-url-hash="1819941010" src="/public/common/balcon_type-7.png.pagespeed.ce.JhiqzRskjD.png" onerror="this.onerror=null;pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);">
                                <img class="img-responsive js_input js_input_8" alt="" data-pagespeed-url-hash="2114440931" src="/public/common/balcon_type-8.png.pagespeed.ce.kQW3DwIOge.png" onerror="this.onerror=null;pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);">

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="calculation_item_wrapp" ng-show="calculation_item_show" id="next">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="calculation_item calculation_item_1">
                                <div class="title">
                                    Выберите формат балкона
                                </div>

                                <div class="calculation_item_1_wrapp js_option" data-name="Формат балкона">

                                    <div class="form_type form_type_1 clearfix">
                                        <input type="radio" id="radio1_1" name="form_type" data-val="Прямой" ng-value="1" ng-model="form_type_model" class="ng-pristine ng-valid" value="1">
                                        <label for="radio1_1"></label>
                                        <div class="desc">
                                            Прямой
                                        </div>
                                    </div>

                                    <div class="form_type form_type_2">
                                        <input type="radio" id="radio1_2" name="form_type" data-val="П-образный" ng-value="2" ng-model="form_type_model" class="ng-pristine ng-valid" value="2">
                                        <label for="radio1_2"></label>
                                        <div class="desc">
                                            П-образный
                                        </div>
                                    </div>

                                    <div class="form_type form_type_3">
                                        <input type="radio" id="radio1_3" name="form_type" data-val="Угловой (угол слева)" ng-value="3" ng-model="form_type_model" class="ng-pristine ng-valid" value="3">
                                        <label for="radio1_3"></label>
                                        <div class="desc">
                                            Угловой (угол слева)
                                        </div>
                                    </div>

                                    <div class="form_type form_type_4">
                                        <input type="radio" id="radio1_4" name="form_type" data-val="Угловой (угол справа)" ng-value="4" ng-model="form_type_model" class="ng-pristine ng-valid" value="4">
                                        <label for="radio1_4"></label>
                                        <div class="desc">
                                            Угловой (угол справа)
                                        </div>
                                    </div>
                                    <div class="form_type form_type_5">
                                        <input type="radio" id="radio1_5" name="form_type" data-val="Эркерный (радиусный)" ng-value="5" ng-model="form_type_model" class="ng-pristine ng-valid" value="5">
                                        <label for="radio1_5"></label>
                                        <div class="desc">
                                            Эркерный (радиусный)
                                        </div>
                                    </div>

                                </div><!--calculation_item_1_wrapp-->

                            </div>
                        </div>

                        <div class="col-sm-6 col-sm-push-6 clearfix">
                            <div class="calculation_item calculation_item_3">
                                <div class="title">
                                    Введите размеры стен
                                </div>
                                <div class="form_size_wrapp">

                                    <div class="form_size form_size_1 js_option" data-name="Центральная часть" data-append="м">
                                        <input type="text" name="X" value="" placeholder="Центральная"><span>м</span>
                                    </div>
                                    <div class="form_size form_size_2 js_option ng-hide" data-name="Левая часть" data-append="м" ng-show="form_type_model == 2 || form_type_model == 3 ">
                                        <input type="text" name="Y" value="" placeholder="Левая"><span>м</span>
                                    </div>
                                    <div class="form_size form_size_3 js_option ng-hide" data-name="Правая часть" data-append="м" ng-show="form_type_model == 2 || form_type_model == 4">
                                        <input type="text" name="Z" value="" placeholder="Правая"><span>м</span>
                                    </div>
                                    <div class="form_size form_size_4 js_option ng-hide" data-name="Радиус" data-append="м" ng-show="form_type_model == 5">
                                        <input type="text" name="R" value="" placeholder="Радиус"><span>м</span>
                                    </div>

                                    <div class="form_size_img" ng-show="form_type_model == undefind"><img alt="" data-pagespeed-url-hash="3570319939" src="/public/common/balcon_form-1_h.png.pagespeed.ce.nI3gTg2CSJ.png" onerror="this.onerror=null;pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);"></div>
                                    <div class="form_size_img ng-hide" ng-show="form_type_model == 1"><img alt="" data-pagespeed-url-hash="3570319939" src="/public/common/balcon_form-1_h.png.pagespeed.ce.nI3gTg2CSJ.png" onerror="this.onerror=null;pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);"></div>
                                    <div class="form_size_img ng-hide" ng-show="form_type_model == 2"><img alt="" data-pagespeed-url-hash="2306956828" src="/public/common/balcon_form-2_h.png.pagespeed.ce.tEwmR7cBW-.png" onerror="this.onerror=null;pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);"></div>
                                    <div class="form_size_img ng-hide" ng-show="form_type_model == 3"><img alt="" data-pagespeed-url-hash="1043593717" src="/public/common/balcon_form-3_h.png.pagespeed.ce.rrZsRVEvuJ.png" onerror="this.onerror=null;pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);"></div>
                                    <div class="form_size_img ng-hide" ng-show="form_type_model == 4"><img alt="" data-pagespeed-url-hash="2811834791" src="/public/common/balcon_form-5_h.png.pagespeed.ce.bpqVer4Yvh.png" onerror="this.onerror=null;pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);"></div>
                                    <div class="form_size_img ng-hide" ng-show="form_type_model == 5"><img alt="" data-pagespeed-url-hash="1057104056" src="/public/common/balcon_form-4_2.png.pagespeed.ce.ah8iYokqZu.png" onerror="this.onerror=null;pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);"></div>
                                </div>
                            </div>
                        </div>

                        <div class="col-sm-6 col-sm-pull-6">
                            <div class="calculation_item calculation_item_4 clearfix ">
                                <div class="col-sm-12 title">
                                    Выберите дополнительные <br>
                                    комплектующие
                                </div>
                                <div class="form_tehno clearfix">
                                    <div class="col-md-4 col-sm-6">
                                        <div class="check js_option" data-name="Дополнительные комплектующие">
                                            <input type="checkbox" id="t1" class="checkbox" data-val="Сушка для белья" data-value="Сушка для белья" name="t1">
                                            <label for="t1">Сушка для белья</label>
                                            <input type="checkbox" id="t2" class="checkbox" data-val="Шкафчик" data-value="Шкафчик" name="t2">
                                            <label for="t2">Шкафчик</label>
                                            <input type="checkbox" id="t3" class="checkbox" data-val="Кладовка" data-value="Кладовка" name="t3">
                                            <label for="t3">Кладовка</label>
                                            <input type="checkbox" id="t4" class="checkbox" data-val="Складной стол" data-value="Складной стол" name="t4">
                                            <label for="t4">Складной стол</label>
                                            <input type="checkbox" id="t5" class="checkbox" data-val="Подсветка" data-value="Подсветка" name="t5">
                                            <label for="t5">Подсветка</label>
                                            <input type="checkbox" id="t6" class="checkbox" data-val="Вынос батареи" data-value="Вынос батареи" name="t6">
                                            <label for="t6">Вынос батареи</label>
                                            <input type="checkbox" id="t7" class="checkbox" data-val="Теплый пол" data-value="Теплый пол" name="t7">
                                            <label for="t7">Теплый пол</label>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                    <div class="button_wrapp">
                        <button class="button" type="button" data-toggle="modal" data-target=".modal_sale" data-subject="Рассчитать стоимость работ c сайта балкони">Рассчитать стоимость работ</button>
                    </div>
                </div>
            </div>

        </form>
    </div>
</section>

















<section class="rehau" style="background: url(img/rehau_bg.png) no-repeat center;">
    <div class="container">
        <div class="row">
            <div class="col-sm-6">
                <div class="text" style="margin-top: 251px;height: 100%;color: #fff; font-size: 18px;">
                    <h2 style="font-size:35px; font-weight: bold;"> Компания Ваш Вид является авторизрованным партнёром компании Rehau </h2>
                    <p>
                       Наша компания является авторизированным партнером немецкого производителя оконных профилей Rehau. Все наши монтажники проходят обязательную стажировку и сертификацию, а при монтаже мы следуем всем стандартам Rehau. Это позволяет нам давать гарантию 5 лет на оконные профили и монтаж. 
                    </p>                   
                </div>
            </div>
            <div class="col-sm-6">
                <img class="img-responsive" alt="" src="img/sertficat.jpg" >
            </div>
        </div>
    </div>
</section>




<section style="background: #ddd; margin:50px 0px 50px 0px; text-align: center;">
    <h1>ТУТ БУДЕТ СЛАЙДЕР</h1>
</section>



<section class="call_master" style="background-image: url('img/xx.png');">&gt;
    <div class="container">
        <div class="row">
            <div class="col-sm-6">
                <div class="call_master_title">
                    Вызовите замерщика на сегодня и получите                
                </div>
                <div class="call_master_desc">
                    При условии срочного замера и заключении договора в день обращения, Вы получите дополнительную скидку в размере 7% от общей стоимости переоборудования балкона.                
                </div>
            </div>
            <div class="col-sm-6">
                <div class="form_masters mass" style="background: url(img/form_bg.png) no-repeat center;">
                    <div class="form_title">
                        ВЫЗВАТЬЗАМЕРЩИКА                    
                    </div>
                    <form class="ajaxForm text-center form-vertical ng-pristine ng-valid" data-show=".modal-ty" id="yw0" >
                        <div style="display:none">
                            <input type="hidden" name="YII_CSRF_TOKEN">
                        </div>                    
                        <input value="1" name="Feedbacks[type]" id="Feedbacks_type" type="hidden">     
                        <input  name="Feedbacks[subject]" id="Feedbacks_subject" type="hidden">                    
                        <input required="required" placeholder="Имя" maxlength="100" name="Feedbacks[name]" id="Feedbacks_name" type="text">                    
                        <input required="required" placeholder="Телефон" maxlength="100" class="form_input js_mask" name="Feedbacks[phone]" id="Feedbacks_phone" type="text">           
                        <span class="error" style="display: none">Проверте правильность ввода номера!</span>
                        <input placeholder="Email" maxlength="100" name="Feedbacks[email]" id="Feedbacks_email" type="text">                    
                        <button class="button  button_sm" type="submit">ВЫЗВАТЬ ЗАМЕРЩИКА</button>
                    </form>                
                </div>
            </div>
        </div>
    </div>
</section>


<section class="" id="service">
    <div class="container">
        <div class="title">Почему наш сервис лучший в Украине</div>
        <div class="row">
            <div class="col-md-4 col-xs-12">
                <img src="img/service1.png" alt="">
                <div class="box">
                    <div class="num">5<span class="num_text">лет гарантии</span></div>
                    <div>на наши работы и пожизненное обслуживание</div>
                </div>
            </div>
            <div class="col-md-4 col-xs-12">
                <img src="img/service1.png" alt="">
                <div class="box">
                    <div class="num">11<span class="num_text">лет</span></div>
                    <div>опыта работы</div>
                </div>
            </div>
            <div class="col-md-4 col-xs-12">
                <img src="img/service1.png" alt="">
                <div class="box">
                    <div class="num">2384</div>
                    <div>переоборудованного балкона</div>
                </div>
            </div>
        </div>
    </div>
</section>



<section class="make_all" style=" padding: 80px 0;background: url(img/make_all_bg.jpg) no-repeat center #5b686f;">
    <div class="container">
        <div class="row">
            <div class="col-sm-8 col-sm-offset-4 section_padding">
                <div class="make_all_title">
                    Мы сделаем все, от планировки до мебели
                </div>
                <div class="make_all_desc">
                    Все работы выполняются нашими сотрудниками, компания несет ответственность за весь объем выполненных работ и гарантирует качество и долговечность.
                </div>
            </div>
        </div>
    </div>
</section>



<section class="builders_team" style="padding: 120px 0;background: url(img/builder_team.jpg) no-repeat center;">
    <div class="container">
        <div class="row">
            <div class="col-sm-7">
                <div class="builders_team_title">
                    Свои бригады строителей <br>
                    и монтажников
                </div>
                <div class="builders_team_desc">
                    Все работы выполняются нашими сотрудниками, компания несет ответственность за весь объем выполненных работ и гарантирует качество и долговечность.</div>
            </div>
        </div>
    </div>
</section>



<section class="time_section" style=" padding: 80px 0;background: url(img/time_bg.jpg) no-repeat center;">&gt;
    <div class="container">
        <div class="row">
            <div class="col-sm-7 col-sm-offset-5">
                <div class="time_title">
                    Четкое соблюдение сроков                
                </div>
                <div class="time_desc">
                    Средний срок работ по перепланировке балкона - 10 дней. Мы гарантируем соблюдение оговоренных в договоре сроков.                
                </div>
            </div>
        </div>
    </div>
</section>



<section class="records">
    <div class="container">
        <div class="main_title">
            Именно поэтому мы<br>
            в Книге рекордов Украины            
        </div>
        <div class="row">
            <div class="col-sm-6 col-xs-12 col-sm-offset-6">
                <div class="record_block">
                    <img class="img-responsive center-block" alt="" data-pagespeed-url-hash="1192319815" src="img/record.png">
                    <p><b>В 2011 году был построен каркасный дом на 100 квадратных метров за 19 дней.</b></p>
                    
                    <p>За 3 дня 5 наших бригад установили все окна, двери (входные и межкомнатные), смонтировали мебель, шкафы и кухню.</p>
                    
                    <div class="note">Нас внесли в реестр национальных рекордов за уровень и сроки выполнения работ: планирование, подбор материалов, монтаж.</div>
                </div>
            </div>
        </div>
    </div>
</section>



<section class="fears">
    <div class="container">
        <div class="hol" style=" font-size: 48px;text-align: center;font-weight: bold;">
            Мифы о ремонте балконов
        </div>
        <div class="row">
            <div class="col-sm-4 fears_item">
                <img src="img/fears_item_1.jpg" class="img-responsive" alt="">
                <div class="fears_title">
                    Не упадет ли балкон?
                </div>
                <div class="fears_desc">
                    Мы рассчитываем нагрузку на несущую конструкцию, и в соответствии с этим, подбираем и устанавливаем все элементы балкона необходимой прочности и веса.
                </div>
            </div>
            <div class="col-sm-4 fears_item">
                <img src="img/fears_item_2.jpg" class="img-responsive" alt="">
                <div class="fears_title">
                    Зимой холодно не будет?
                </div>
                <div class="fears_desc">
                    Балконы мы утепляем пенополистиролом или минеральной ватой, а все труднодоступные места, стыки и соединения задуваем морозостойкой монтажной пеной.
                </div>
            </div>
            <div class="col-sm-4 fears_item">
                <img src="img/fears_item_3.jpg" class="img-responsive" alt="">
                <div class="fears_title">
                    Никакой плесени
                </div>
                <div class="fears_desc">
                    При ремонте балкона мы устанавливаем паро и гидробарьеры, что исключает возможность появления плесени.
                </div>
            </div>
        </div>
    </div>
</section>



<section class="review" style="padding: 40px 0 0; background-color: #4e5b62; color: #fff; font-size: 18px;">
    <div class="container">
        <div class="row row_no_padding">
            <div class="col-sm-3 col-xs-12" style="padding-left: 0;padding-right: 0;float: left;">
                <img src="img/person3.jpg" class="img-responsive review_img" alt="" style="    border-radius: 100px;">
            </div>
            <div class="col-sm-9 col-xs-12 review_content" style="padding-left: 45px;padding-top: 15px;padding-bottom: 15px;background: url(../img/icon/review_top.png) left top no-repeat,url(../img/icon/review_bottom.png) right bottom no-repeat;min-height: 300px;">
                <div class="review_title" style="font-family: inherit;font-size: 33px;font-weight: 700;color: inherit;margin-bottom: 20px;">"Очень рада, что посоветовали именно
                    эту компанию"</div>
                <div class="review_text">
                    <p>
                        Хочу поблагодарить компанию "Ваш Вид" за качественный ремонт балкона. Очень рада, что посоветовали именно эту компанию.</p>
                </div>
                <div class="review_author"><i>Анна Николаевна</i></div>
            </div>
        </div>
    </div>
</section>



<section class="sketch" id="sketch" style="background: url(img/sketch_bg.png) no-repeat center; color: #fff;padding: 70px 0;margin: 0 0 50px;text-align: center; color: #fff;font-size: 17px;">
    <div class="container">
        <div class="row">
            <form class="ajaxForm form-vertical ng-pristine ng-valid"  id="yw1" action="/default/feedbacks/index" method="post">
                <div style="display:none">
                    <input type="hidden" name="YII_CSRF_TOKEN">
                </div>            
                <input value="1" name="Feedbacks[type]" id="Feedbacks_type" type="hidden">           
                <input value="Рассчитать стоимость  с сайта балконов" name="Feedbacks[subject]" id="Feedbacks_subject" type="hidden">            
                <div class="col-sm-12">
                    <div class="title">Рассчитайте стоимость балкона</div>
                    <div class="sub_title">Получите быстрый расчет стоимости</div>
                    <p>Заполните форму ниже, и мы сделаем бесплатный расчет стоимости за одну минуту</p>
                </div>
                <div class="col-sm-3">
                    <div class="form_item">
                        <span class="placeholder">Габариты</span>
                        <div id="size_select-styler" class="jq-selectbox jqselect">
                            <select id="size_select">
                                <option value="3 метра">3 метра</option>
                                <option value="3.5 метра">3.5 метра</option>
                                <option value="4.5 метра">4.5 метра</option>
                                <option value="5 метров">5 метров</option>
                                <option value="6 метров">6 метров</option>
                                <option value="другой">другой</option>
                            </select>
                            <div class="jq-selectbox__select">
                                <div class="jq-selectbox__select-text">3 метра</div>
                                <div class="jq-selectbox__trigger" >
                                    <div class="jq-selectbox__trigger-arrow"></div>
                                </div>
                            </div>
                            <div class="jq-selectbox__dropdown">
                                <ul style="position: relative; list-style: none; overflow: auto; overflow-x: hidden">
                                    <li class="selected sel" style="">3 метра</li>
                                    <li style="">3.5 метра</li><li style="">4.5 метра</li>
                                    <li style="">5 метров</li>
                                    <li style="">6 метров</li>
                                    <li style="">другой</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-3">
                    <div class="form_item">
                        <span class="placeholder">Тип балкона</span>
                            <div id="size_select-styler" class="jq-selectbox jqselect" style=" position: relative; z-index:100"><select id="size_select" style="margin: 0px; padding: 0px; position: absolute; left: 0px; top: 0px; width: 100%; height: 100%; opacity: 0;">
                                <option value="Прямой">Прямой</option>
                                <option value="Г-образный">Г-образный</option>
                                <option value="П-образный">П-образный</option>
                                <option value="Другой">Другой</option>
                            </select>
                            <div class="jq-selectbox__select" style="position: relative">
                                <div class="jq-selectbox__select-text">Прямой</div>
                                <div class="jq-selectbox__trigger">
                                    <div class="jq-selectbox__trigger-arrow"></div>
                                </div>
                            </div>
                            <div class="jq-selectbox__dropdown" style="position: absolute; display: none;">
                                <ul style="position: relative; list-style: none; overflow: auto; overflow-x: hidden">
                                    <li class="selected sel" style="">Прямой</li>
                                    <li style="">Г-образный</li>
                                    <li style="">П-образный</li>
                                    <li style="">Другой</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-sm-3">
                    <div class="form_item">
                        <span class="placeholder">Утепление</span>
                        <div id="size_select-styler"  class="jq-selectbox jqselect" style="  position: relative; z-index:100">
                                <select id="size_select" style="margin: 0px; padding: 0px; position: absolute; left: 0px; top: 0px; width: 100%; height: 100%; opacity: 0;">
                                    <option value="Теплый балкон">Теплый балкон</option>
                                    <option value="Холодный балкон">Холодный балкон</option>
                                </select>
                            <div class="jq-selectbox__select" style="position: relative">
                                <div class="jq-selectbox__select-text">Теплый балкон</div>
                                <div class="jq-selectbox__trigger">
                                    <div class="jq-selectbox__trigger-arrow"></div>
                                </div>
                            </div>
                            <div class="jq-selectbox__dropdown" style="position: absolute; display: none;">
                                <ul style="position: relative; list-style: none; overflow: auto; overflow-x: hidden">
                                    <li class="selected sel" style="">Теплый балкон</li>
                                    <li style="">Холодный балкон</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-3">
                    <button type="button" class="button send_to_form" style="width: 100%; margin: 28px 0 15px;">
                        Рассчитать
                    </button>
                </div>
            </form>        
        </div>
    </div>
</section>




<section>
   <div class="title-m"><strong>Этапы работ</strong></div>
   <section class="title-img" style="background-image: url(img/rem.jpg);">
        <div class="container">
           <div class="row">
               <div class="col-sm-6 text-title">
                
                    <h2> Демонтаж и сварка основы</h2>
                    <p>
                        Демонтируем старые элементы балкона, укрепляем основу и при необходимости выносим по парапету, увеличивая площадь балкона. Варим каркас из металла и надежно крепим его.
                    </p>
                    <button type="button" class="button send_to_form">узнайте подробнее
                    </button>
               </div>
           </div>
        </div>
   </section>

   <section class="sem" style="background-image: url(img/rem02.jpg);">
        <div class="container">
           <div class="row">
               <div class="col-sm-6 left">
                    <h2> Демонтаж и сварка основы</h2>
                    <p>
                        Демонтируем старые элементы балкона, укрепляем основу и при необходимости выносим по парапету, увеличивая площадь балкона. Варим каркас из металла и надежно крепим его.
                    </p>
                    <button type="button" class="button send_to_form">узнайте подробнее
                    </button>
               </div>
           </div>
        </div>
   </section>

    <section class="title-img" style="background-image: url(img/rem.jpg);">
        <div class="container">
           <div class="row">
               <div class="col-sm-6 text-title">
                
                    <h2> Демонтаж и сварка основы</h2>
                    <p>
                        Демонтируем старые элементы балкона, укрепляем основу и при необходимости выносим по парапету, увеличивая площадь балкона. Варим каркас из металла и надежно крепим его.
                    </p>
                    
                    <button type="button" class="button send_to_form">узнайте подробнее
                    </button>
               </div>
           </div>
        </div>
   </section>

   <section class="sem" style="background-image: url(img/rem02.jpg);">
        <div class="container">
           <div class="row">
               <div class="col-sm-6 left">
                    <h2> Демонтаж и сварка основы</h2>
                    <p>
                        Демонтируем старые элементы балкона, укрепляем основу и при необходимости выносим по парапету, увеличивая площадь балкона. Варим каркас из металла и надежно крепим его.
                    </p>
                   
                    <button type="button" class="button send_to_form">узнайте подробнее
                    </button>
               </div>
           </div>
        </div>
   </section>

    <section class="title-img" style="background-image: url(img/rem.jpg);">
        <div class="container">
           <div class="row">
               <div class="col-sm-6 text-title">
                
                    <h2> Демонтаж и сварка основы</h2>
                    <p>
                        Демонтируем старые элементы балкона, укрепляем основу и при необходимости выносим по парапету, увеличивая площадь балкона. Варим каркас из металла и надежно крепим его.
                    </p>
                    
                    <button type="button" class="button send_to_form">узнайте подробнее
                    </button>
               </div>
           </div>
        </div>
   </section>

   <section class="sem" style="background-image: url(img/rem02.jpg);">
        <div class="container">
           <div class="row">
               <div class="col-sm-6 left">
                    <h2> Демонтаж и сварка основы</h2>
                    <p>
                        Демонтируем старые элементы балкона, укрепляем основу и при необходимости выносим по парапету, увеличивая площадь балкона. Варим каркас из металла и надежно крепим его.
                    </p>
                    
                    <button type="button" class="button send_to_form">узнайте подробнее
                    </button>
               </div>
           </div>
        </div>
   </section>
  
</section>


<section class="review white white_after white_before">
    <div class="container">
        <div class="row row_no_padding">
            <div class="col-sm-3 col-xs-12">
                <img src="img/anastasia.jpg" alt=""  style="border-radius: 100px;">
            </div>
            <div class="col-sm-9 col-xs-12 review_content">
                <div class="review_title"><strong>"Буду рекомендувати Вашу фірму знайомим..."</strong></div>
                <div class="review_text">Замовляли в Вашій фірмі винос балкону, залишилися дуже задоволені якістю товару і вашими працівниками, а також виконанням їхньої роботи.<br>
                <br>
                Буду рекомендувати Вашу фірму знайомим.</div><br>
                <div class="review_author"><i>Анастасия Горевич</i></div>
            </div>
        </div>
    </div>
</section>



<div class="panorama" style="background-image: url('img/panorama.jpg')">
    <div class="container">
        <div class="row panorama__row">
            <div class="col-lg-4 col-md-6 col-sm-12">
                <div class="panorama__maps">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2538.61058519553!2d30.497330731772323!3d50.48559289261233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cdfd0c56f15f%3A0xb6a1b1d1a7f1a602!2z0LLRg9C7LiDQktC10YDQsdC-0LLQsCwgMjQsINCa0LjRl9Cy!5e0!3m2!1sru!2sua!4v1464082865672" width="600" height="450" frameborder="0" style="border:0" allowfullscreen=""></iframe>
                    <div class="panorama__maps-box panorama__maps-address">
                        Киев, ул.Вербовая, 24, 2 этаж
                        <span>(1 минута от м.Почайна)</span>
                    </div>
                    <div class="panorama__maps-box panorama__maps-schedule">
                        График работы:
                        <span>пн-сб 9:00-19:00</span>
                    </div>
                </div>
            </div>
            <div class="col-lg-8 col-md-6 col-sm-12">
                <div class="panorama__link">
                    <img class="img-responsive" alt="" src="img/pano_img.png.pagespeed.png">
                    <div class="title">
                        3D тур
                    </div>
                    <div class="desc">
                        по салону
                    </div>
                    <a href="#" class="button">
                        Смотреть
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="panorama__footer">
    <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <div class="panorama__footer-block">
                    <div class="panorama__form-title">
                        Получите дополнительную
                        <span>
                            СКИДКУ 5%                        
                        </span>
                    </div>
                    <div class="panorama__form-form">
                        <div class="panorama__form-desc">
                            Запишитесь в наш салон на просмотр и получите скидку
                        </div>
                        <form class="ajaxForm panorama-form form-vertical ng-pristine ng-valid" id="yw0" action="/default/feedbacks/index" method="post">
                            <div style="display:none">
                                <input type="hidden" value="beb0ee5f4a46fb11c47de39062f93db10fa835b3" name="YII_CSRF_TOKEN">
                            </div>

                            <input value="1" name="Feedbacks[type]" id="Feedbacks_type" type="hidden">           
                            <input value="Запишитесь в наш салон на просмотр и получите скидку с сайта межкомнатные двери" name="Feedbacks[subject]" id="Feedbacks_subject" type="hidden">          
                            <input required="required" placeholder="ФИО" maxlength="100" class="form_input" name="Feedbacks[name]" id="Feedbacks_name" type="text">                        
                            <input required="required" placeholder="Номер телефона" maxlength="100" class="form_input js_mask" name="Feedbacks[phone]" id="Feedbacks_phone" type="text">       
                            <button class="button">Записаться</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<?php include('footer.php'); ?>

</body>
</html>