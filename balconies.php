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
                <div class="main_form" id="selectForm">
                    <header class="main_form_header">
                        Моментальный расчет <br>
                        стоимости балкона
                    </header>
                    <input type="hidden" name="Feedbacks" value="Расчет стоимости балкона">
                    <div class="main_form_body">
                        <div class="form_item">
                            <div class="name">Габариты:</div>
                            <div id="size_select-styler" class="jq-selectbox jqselect" style=" position: relative;">
                                <div class="jq-selectbox__select" style="position: relative">
                                    <div class="jq-selectbox__select-text">3 метра</div>
                                    <div class="jq-selectbox__trigger">
                                        <div class="jq-selectbox__trigger-arrow"></div>
                                    </div>
                                </div>
                                <div class="jq-selectbox__dropdown" style="position: absolute; display: none;">
                                    <input type="hidden" class="inputSelect" name="gabarits" value="3 метра">
                                    <ul style="position: relative; list-style: none; overflow: auto; overflow-x: hidden">
                                        <li class="selected sel">3 метра</li>
                                        <li>3.5 метра</li>
                                        <li>4.5 метра</li>
                                        <li>5 метров</li>
                                        <li>6 метров</li>
                                        <li>другой</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="form_item">
                            <div class="name">Тип балкона:</div>
                            <div id="syle_select-styler" class="jq-selectbox jqselect" style=" position: relative;">
                                <div class="jq-selectbox__select" style="position: relative">
                                    <div class="jq-selectbox__select-text">Прямой</div>
                                    <div class="jq-selectbox__trigger">
                                        <div class="jq-selectbox__trigger-arrow"></div>
                                    </div>
                                </div>
                                <div class="jq-selectbox__dropdown" style="position: absolute; display: none;">
                                    <input type="hidden" class="inputSelect" name="balkonType" value="Прямой">
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
                            <div id="material_select-styler" class="jq-selectbox jqselect" style=" position: relative;">
                                <div class="jq-selectbox__select" style="position: relative">
                                    <div class="jq-selectbox__select-text">Теплый балкон</div>
                                    <div class="jq-selectbox__trigger">
                                        <div class="jq-selectbox__trigger-arrow"></div>
                                    </div>
                                </div>
                                <div class="jq-selectbox__dropdown" style="position: absolute; display: none;">
                                    <input type="hidden" class="inputSelect" name="balkonMaterial" value="Теплый балкон">
                                    <ul style="position: relative; list-style: none; overflow: auto; overflow-x: hidden">
                                        <li class="selected sel">Теплый балкон</li>
                                        <li>Холодный балкон</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <button type="button" class="button send_to_form" data-toggle="modal" data-target=".modal_select">
                            Рассчитать стоимость
                        </button>
                    </div>
                </div>
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


<section class="balc increase_space increase_space_new" id="increase_space">
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
                    Вынос балкона                
                </div>
                <button class="button button_sm" data-toggle="modal" data-target=".takeaway">
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
                    Остекление                
                </div>
                <button class="button button_sm" data-toggle="modal" data-target=".glazing">
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
                    Утепление балкона                
                </div>
                <button class="button button_sm" data-toggle="modal" data-target=".warming">
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
                    Обшивка балкона                
                </div>
                <button class="button button_sm" data-toggle="modal" data-target=".sheathing">
                    Посмотреть примеры
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
                    Сделать кладовку                
                </div>
                <button class="button button_sm" data-toggle="modal" data-target=".pantry">
                    Посмотреть примеры
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
                    Сделать кабинет или рабочее место               
                </div>
                <button class="button button_sm" data-toggle="modal" data-target=".cabinet">
                    Посмотреть примеры
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
                    Увеличить пространство гостинной                
                </div>
                <button class="button button_sm" data-toggle="modal" data-target=".livingroom">
                    Посмотреть примеры
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
                    Увеличить пространство кухни               
                </div>
                <button class="button button_sm" data-toggle="modal" data-target=".kitchen">
                    Посмотреть примеры
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
                    Увеличить детскую комнату               
                </div>
                <button class="button button_sm" data-toggle="modal" data-target=".childrenroom">
                    Посмотреть примеры
                </button>
            </div>
        </div>
    </div>
</section>


<section class="balc calculation" id="calculation" data-type='balc'>
    <div class="container clearfix">
        <div class="sale_wrapp_block opened ">
            <div class="sale_mobile">
                <h2 class="sale_title">
                    Ваша скидка составляет:
                </h2>
                <div class="sale_price">
                    <span class="js_options_total_discount">0</span>грн

                    <div class="js_sale_wrapp">
                        + <span id="global_option_discount">1</span>%
                    </div>
                </div>
            </div>
            <button class="button js-button-calculate" type="button" data-toggle="modal" data-target=".modal_calculate">Зафиксировать скидку</button>
        </div>

        <div id="param_kitchen">

            <div class="calculation_item calculation_item_0  clearfix">
                <div class="container">
                    <div class="row">
                        <div class="col-md-3 col-sm-4">
                            <div class="calculation_type_radio">
                                <div class="title">
                                    Выберите необходимые <br>
                                    работы
                                </div>

                                <div class="check js_option">
                                    <input type="checkbox" id="bk1" class="checkbox" name="bk1"  data-calc="workType" value="Остекление" data-title="Необходимые работы">
                                    <label for="bk1" class="js_label">Остекление</label>

                                    <input type="checkbox" id="bk2" class="checkbox" name="bk2" data-calc="workType" value="Вынос по подоконнику" data-title="Необходимые работы">
                                    <label for="bk2" class="js_label">Вынос по подоконнику</label>

                                    <input type="checkbox" id="bk3" class="checkbox" name="bk3" data-calc="workType" value="Вынос по плите" data-title="Необходимые работы">
                                    <label for="bk3" class="js_label" >Вынос по плите</label>

                                    <input type="checkbox" id="bk4" class="checkbox" name="bk4" data-calc="workType" value="Обшивка наружная" data-title="Необходимые работы">
                                    <label for="bk4" class="js_label">Обшивка наружная</label>

                                    <input type="checkbox" id="bk5" class="checkbox" name="bk5" data-calc="workType" value="Утепление" data-title="Необходимые работы">
                                    <label for="bk5" class="js_label" data-hover=".js_input_5">Утепление</label>

                                    <input type="checkbox" id="bk6" class="checkbox" name="bk6" data-calc="workType" value="Объединение с комнатой" data-title="Необходимые работы">
                                    <label for="bk6" class="js_label" data-hover=".js_input_6">Объединение с комнатой</label>

                                    <input type="checkbox" id="bk7" class="checkbox" name="bk7" data-calc="workType" value="Изготовление мебели на балкон" data-title="Необходимые работы">
                                    <label for="bk7" class="js_label">Изготовление мебели на балкон</label>
                                </div>

                                <div class="js_open button_show" value="1" ng-click="calculation_item_show = true"></div>
                                <a href="#next" type="button" class="button button_show ">Далее</a>
                            </div>
                        </div>
                        <div class="col-md-9 col-sm-8">
                            <div class="calculation_type_radio_img">
                                <img class="img-responsive js_input js_input_1 active" alt="" src="/img/balkon/balcon_type-1.png" >
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="calculation_item_wrapp" id="next">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="calculation_item calculation_item_1">
                                <div class="title">
                                    Выберите формат балкона
                                </div>

                                <div class="calculation_item_1_wrapp  js_option" data-name="Формат балкона">

                                    <div class="form_type form_type_1 clearfix">
                                        <input type="radio" name="form_type" id="radio1_1" data-img="form-1_h" value="Прямой" data-calc="balkonFormat" data-title="Формат Балкона" onclick="showFields(null, 2)">
                                        <label for="radio1_1"></label>
                                        <div class="desc">
                                            Прямой
                                        </div>
                                    </div>

                                    <div class="form_type form_type_2">
                                        <input type="radio" name="form_type" id="radio1_2" data-img="form-2_h" value="П-образный" data-calc="balkonFormat" data-title="Формат Балкона" onclick="showFields(1,2,3)">
                                        <label for="radio1_2"></label>
                                        <div class="desc">
                                            П-образный
                                        </div>
                                    </div>

                                    <div class="form_type form_type_3">
                                        <input type="radio" name="form_type" id="radio1_3" data-img="form-3_h" value="Угловой (угол слева)" data-calc="balkonFormat" data-title="Формат Балкона" onclick="showFields(1,2)">
                                        <label for="radio1_3"></label>
                                        <div class="desc">
                                            Угловой (угол слева)
                                        </div>
                                    </div>

                                    <div class="form_type form_type_4">
                                        <input type="radio" name="form_type" id="radio1_4" data-img="form-5_h"value="Угловой (угол справа)" data-calc="balkonFormat" data-title="Формат Балкона" onclick="showFields(null, 2, 3)">
                                        <label for="radio1_4"></label>
                                        <div class="desc">
                                            Угловой (угол справа)
                                        </div>
                                    </div>
                                    <div class="form_type form_type_5">
                                        <input type="radio" name="form_type" id="radio1_5" data-img="form-4_h" value="Эркерный (радиусный)" data-calc="balkonFormat" data-title="Формат Балкона" onclick="showFields( null, 2, null ,4)">
                                        <label for="radio1_5"></label>
                                        <div class="desc">
                                            Эркерный (радиусный)
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-sm-6 col-sm-push-6 clearfix">
                            <div class="calculation_item calculation_item_3">
                                <div class="title">
                                    Введите размеры стен
                                </div>
                                <div class="form_size_wrapp">
                                    <div class="form_size form_size_1 js_option">
                                        <input type="text" name="X" value="" placeholder="Центральная" data-calc="centerSide" data-title="Центральная часть"><span>м</span>
                                    </div>
                                    <div class="form_size form_size_2 js_option" style="display: none;">
                                        <input type="text" name="Y" value="" placeholder="Левая" data-calc="leftSide" data-title="Левая часть">
                                        <span>м</span>
                                    </div>
                                    <div class="form_size form_size_3 js_option" style="display: none;">
                                        <input type="text" name="Z" value="" placeholder="Правая" data-calc="rightSide" data-title="Правая часть"><span>м</span>
                                    </div>
                                    <div class="form_size form_size_4 js_option" style="display: none;" >
                                        <input type="text" name="R" value="" placeholder="Радиус" data-calc="radius" data-title="Радиус"><span>м</span>
                                    </div>

                                    <div class="form_size_img">
                                        <img alt="" src="/img/balkon/plan/balcon_form-1_h.png">
                                    </div>
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
                                            <input type="checkbox" id="t1" class="checkbox" data-calc="balcAccessories" value="Сушка для белья" name="t1" data-title="Дополнительные комплектующие">
                                            <label for="t1">Сушка для белья</label>
                                            <input type="checkbox" id="t2" class="checkbox"
                                            data-calc="balcAccessories" value="Шкафчик" name="t2" data-title="Дополнительные комплектующие">
                                            <label for="t2">Шкафчик</label>
                                            <input type="checkbox" id="t3" class="checkbox"  data-calc="balcAccessories" value="Кладовка" name="t3" data-title="Дополнительные комплектующие">
                                            <label for="t3">Кладовка</label>
                                            <input type="checkbox" id="t4" class="checkbox" data-calc="balcAccessories" value="Складной стол" name="t4" data-title="Дополнительные комплектующие">
                                            <label for="t4">Складной стол</label>
                                            <input type="checkbox" id="t5" class="checkbox" data-calc="balcAccessories" value="Подсветка" name="t5" data-title="Дополнительные комплектующие">
                                            <label for="t5">Подсветка</label>
                                            <input type="checkbox" id="t6" class="checkbox" data-calc="balcAccessories" value="Вынос батареи"  name="t6" data-title="Дополнительные комплектующие">
                                            <label for="t6">Вынос батареи</label>
                                            <input type="checkbox" id="t7" class="checkbox" data-calc="balcAccessories" value="Теплый пол"  name="t7" data-title="Дополнительные комплектующие">
                                            <label for="t7">Теплый пол</label>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                    <div class="button_wrapp">
                        <button class="button button_ico js-button-calculate" type="button" data-toggle="modal" data-target=".modal_calculate">
                            Рассчитать стоимость работ
                        </button>
                    </div>
                </div>
            </div>

        </div>
    </div>
</section>






<section class="rehau" style="background: url(img/rehau_bg.png) no-repeat center;">
    <div class="container">
        <div class="row">
            <div class="col-sm-6">
                <div class="text" style="margin-top: 251px;height: 100%;color: #fff; font-size: 18px;">
                    <h2 style="font-size:35px; font-weight: bold;"> Компания Ваш Вид является авторизрованным партнёром компании Rehau </h2>
                    <p id="bottomAnchor">
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




<section class="production">
    <div class="container">
        <div class="row">
            <div class="main_title">
                Так может выглядеть балкон после <br> перепланировки               
            </div>
            <div class="js_slider_production"> 
                <div class="slick-list">
                    <img src="img/slide_balkon/slide_list_01.jpg" alt="" class="img-responsive">
                </div>
                <div class="slick-list">
                    <img src="/img/slide_balkon/slide_list_02.jpg" alt="" class="img-responsive">
                </div>
                <div class="slick-list">
                    <img src="/img/slide_balkon/slide_list_03.jpg" alt="" class="img-responsive">
                </div>
                <div class="slick-list">
                    <img src="/img/slide_balkon/slide_list_04.jpg" alt="" class="img-responsive">
                </div>
                <div class="slick-list">
                    <img src="/img/slide_balkon/slide_list_05.jpg" alt="" class="img-responsive">
                </div>
                <div class="slick-list">
                    <img src="/img/slide_balkon/slide_list_06.jpg" alt="" class="img-responsive">
                </div>
                <div class="slick-list">
                    <img src="/img/slide_balkon/slide_list_07.jpg" alt="" class="img-responsive">
                </div>
                <div class="slick-list">
                    <img src="/img/slide_balkon/slide_list_08.jpg" alt="" class="img-responsive">
                </div>
                <div class="slick-list">
                    <img src="/img/slide_balkon/slide_list_09.jpg" alt="" class="img-responsive">
                </div>
                <div class="slick-list">
                    <img src="/img/slide_balkon/slide_list_10.jpg" alt="" class="img-responsive">
                </div>
                <div class="slick-list">
                    <img src="/img/slide_balkon/slide_list_11.jpg" alt="" class="img-responsive">
                </div>
                <div class="slick-list">
                    <img src="/img/slide_balkon/slide_list_12.jpg" alt="" class="img-responsive">
                </div>
                <div class="slick-list">
                    <img src="/img/slide_balkon/slide_list_13.jpg" alt="" class="img-responsive">
                </div>
                <div class="slick-list">
                    <img src="/img/slide_balkon/slide_list_01.jpg" alt="" class="img-responsive">
                </div>
                <div class="slick-list">
                    <img src="/img/slide_balkon/slide_list_14.jpg" alt="" class="img-responsive">
                </div>
                <div class="slick-list">
                    <img src="/img/slide_balkon/slide_list_15.jpg" alt="" class="img-responsive">
                </div>
                <div class="slick-list">
                    <img src="/img/slide_balkon/slide_list_16.jpg" alt="" class="img-responsive">
                </div>
                <div class="slick-list">
                    <img src="/img/slide_balkon/slide_list_17.jpg" alt="" class="img-responsive">
                </div>
                <div class="slick-list">
                    <img src="/img/slide_balkon/slide_list_18.jpg" alt="" class="img-responsive">
                </div>
                <div class="slick-list">
                    <img src="/img/slide_balkon/slide_list_19.jpg" alt="" class="img-responsive">
                </div>
                <div class="slick-list">
                    <img src="/img/slide_balkon/slide_list_20.jpg" alt="" class="img-responsive">
                </div>
                <div class="slick-list">
                    <img src="/img/slide_balkon/slide_list_21.jpg" alt="" class="img-responsive">
                </div>
                <div class="slick-list">
                    <img src="/img/slide_balkon/slide_list_22.jpg" alt="" class="img-responsive">
                </div>
                <div class="slick-list">
                    <img src="/img/slide_balkon/slide_list_23.jpg" alt="" class="img-responsive">
                </div>
                <div class="slick-list">
                    <img src="/img/slide_balkon/slide_list_24.jpg" alt="" class="img-responsive">
                </div>
                <div class="slick-list">
                    <img src="/img/slide_balkon/slide_list_25.jpg" alt="" class="img-responsive">
                </div>

            </div>
        </div>
    </div>
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
                    <div class="ajaxForm text-center form-vertical" id="callGager" >
                        <input value="Вызвать замерщика балкона" name="Feedbacks" type="hidden">                   
                        
                        <input required="required" placeholder="Имя" maxlength="100" class="form_input" name="fName" type="text">                    
                        <input required="required" placeholder="Телефон" class="form_input js_mask" name="phone" type="text">          
                        <input placeholder="Email" maxlength="100" name="email" class="form_input" type="text">                    
                        <button class="button  button_sm send-mess" type="submit" data-form="callGager">ВЫЗВАТЬ ЗАМЕРЩИКА</button>
                    </div>
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
            <div class="ajaxForm form-vertical"  id="selectForm2">
                   
                <input value="Рассчитать стоимость  с сайта балконов" name="Feedbacks[subject]" id="Feedbacks_subject" type="hidden">            
                <div class="col-sm-12">
                    <div class="title">Рассчитайте стоимость балкона</div>
                    <div class="sub_title">Получите быстрый расчет стоимости</div>
                    <p>Заполните форму ниже, и мы сделаем бесплатный расчет стоимости за одну минуту</p>
                </div>
                <input type="hidden" name="Feedbacks" value="Расчет стоимости балкона">
                <div class="col-sm-3">
                    <div class="form_item">
                        <span class="placeholder">Габариты</span>
                        <div id="size_select-styler" class="jq-selectbox jqselect">
                            <div class="jq-selectbox__select">
                                <div class="jq-selectbox__select-text">3 метра</div>
                                <div class="jq-selectbox__trigger" >
                                    <div class="jq-selectbox__trigger-arrow"></div>
                                </div>
                            </div>
                            <div class="jq-selectbox__dropdown" style="position: absolute; display: none;">
                                <input type="hidden" class="inputSelect" name="gabarits" value="3 метра">
                                <ul style="position: relative; list-style: none; overflow: auto; overflow-x: hidden">
                                    <li class="selected sel">3 метра</li>
                                    <li>3.5 метра</li><li style="">4.5 метра</li>
                                    <li>5 метров</li>
                                    <li>6 метров</li>
                                    <li>другой</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-3">
                    <div class="form_item">
                        <span class="placeholder">Тип балкона</span>
                        <div id="size_select-styler" class="jq-selectbox jqselect" style=" position: relative; z-index:100">
                            <div class="jq-selectbox__select" style="position: relative">
                                <div class="jq-selectbox__select-text">Прямой</div>
                                <div class="jq-selectbox__trigger">
                                    <div class="jq-selectbox__trigger-arrow"></div>
                                </div>
                            </div>
                            <div class="jq-selectbox__dropdown" style="position: absolute; display: none;">
                                <input type="hidden" class="inputSelect" name="balkonType" value="Прямой">
                                <ul style="position: relative; list-style: none; overflow: auto; overflow-x: hidden">
                                    <li class="selected sel">Прямой</li>
                                    <li>Г-образный</li>
                                    <li>П-образный</li>
                                    <li>Другой</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-sm-3">
                    <div class="form_item">
                        <span class="placeholder">Утепление</span>
                        <div id="size_select-styler"  class="jq-selectbox jqselect" style="  position: relative; z-index:100">
                            <div class="jq-selectbox__select" style="position: relative">
                                <div class="jq-selectbox__select-text">Теплый балкон</div>
                                <div class="jq-selectbox__trigger">
                                    <div class="jq-selectbox__trigger-arrow"></div>
                                </div>
                            </div>
                            <div class="jq-selectbox__dropdown" style="position: absolute; display: none;">
                                <input type="hidden" class="inputSelect" name="balkonType" value="Теплый балкон">
                                <ul style="position: relative; list-style: none; overflow: auto; overflow-x: hidden">
                                    <li class="selected sel" style="">Теплый балкон</li>
                                    <li style="">Холодный балкон</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-3">
                    <button type="button" class="button send_to_form" data-toggle="modal" data-target=".modal_select2" style="width: 100%; margin: 28px 0 15px;">
                        Рассчитать
                    </button>
                </div>
            </div>        
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


<div class="modal modal_main modal_calculate fade in">
    <div class="modal-dialog" role="document">
        <button class="modal_close" type="button" data-dismiss="modal" aria-hidden="true"></button>

        <div class="container">
            <div class="row row_flex">
                <div class="col-sm-6 modal_calculate_wrapp" id="options_result_html">
                    <div class="modal_price">
                        Ваша скидка оставляет:  <span class="js_options_total_discount">0</span> <span> %</span>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="modal_calculate_form">
                        <div class="title">
                            Наш менеджер уже рассчитывает стоимость дверей. Чтобы зафиксировать вашу скидку введите контакты.
                        </div>

                        <div class="ajaxForm form-vertical" id="calculation-form" >
                            <input value="1" name="type" type="hidden">                        
                            <input value="Рассчитать стоимость работ с сайта входные двери" name="Feedbacks" type="hidden">  
                            <input required="required" placeholder="Имя" maxlength="100" class="form_input" name="fName" type="text"> 
                            <input required="required" placeholder="Телефон" class="form_input js_mask" name="phone" type="text">
                            <button class="button js-door-calculate" data-form="calculation-form"><span>Отправить и получить скидку</span></button>
                        </div>
                        <div class="modal_note">Ваши персональные данные не будут опубликованы
                            или переданы третьим лицам.</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="balc modal modal_select fade" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
        <button class="modal_close" data-dismiss="modal" type="button"></button>
        <div class="modal_title">Наш менеджер уже рассчитывает стоимость! Введите номер телефона, по которому с вами можно связаться</div>
       
        <input required="required" placeholder="Телефон" maxlength="100" class="js_mask" name="phone" id="selectForm_phone" type="text">
        
        <button class="button send-mess" type="submit" data-form="selectForm">Рассчитать</button>
        
        
        <div class="modal_note">Ваши персональные данные не будут опубликованы
            или переданы третьим лицам.</div>
    </div>
</div><!--modal_form-->
<div class="balc modal modal_select2 fade" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
        <button class="modal_close" data-dismiss="modal" type="button"></button>
        <div class="modal_title">Наш менеджер уже рассчитывает стоимость! Введите номер телефона, по которому с вами можно связаться</div>
       
        <input required="required" placeholder="Телефон" maxlength="100" class="js_mask" name="phone" type="text" id="selectForm2_phone">
        
        <button class="button send-mess" type="submit" data-form="selectForm2">Рассчитать</button>
        
        
        <div class="modal_note">Ваши персональные данные не будут опубликованы
            или переданы третьим лицам.</div>
    </div>
</div><!--modal_form-->








<div class="modal modal_main modal_ty fade js_modal_result in">
    <div class="modal-dialog" role="document">
        <button class="modal_close" type="button" data-dismiss="modal" aria-hidden="true"></button>

        <div class="js_title title">
            Спасибо
        </div>

        <div class="js_desc desc">
            Мы свяжемся с вами в ближайшее время.
        </div>

    </div>
</div>


<?php include('balconies-sliders.php'); ?>
<?php include('footer.php'); ?>

</body>
</html>