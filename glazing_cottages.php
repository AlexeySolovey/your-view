<?php include('header.php'); ?>



<section class="anons anons_cottage" style="background-image: url('../img/anons_cottage.png')">
    <div class="container">
        <div class="row">
            <div class="col-md-7 col-sm-12">
                <div class="title">
                    Остекление коттеджей <br> с экономией на отоплении до 60%
                </div>
            </div>
            <div class="col-md-4 col-md-offset-1 col-sm-12">
                <form class="main_form ng-pristine ng-valid">
                    <header class="main_form_header">
                        Моментальный расчет стоимости
                    </header>
                    <div class="main_form_body">
                        <div class="form_item" id="syle_select-styler">
                            <div class="name">Тип остекления:</div>
                            <select>
                                <option value="Частный дом">Частный дом</option>
                                <option value="Квартира">Квартира</option>
                                <option value="Балкон">Балкон</option>
                                <option value="Терасса">Терасса</option>
                                <option value="Бассейн">Бассейн</option>
                                <option value="Дверь">Дверь</option>
                                <option value="Отдельное окно">Отдельное окно</option>
                            </select>
                        </div>
                        <div class="form_item" id="material_select-styler">
                            <div class="name">Количество окон:</div>
                            <input type="text">
                        </div>
                        <div class="form_item" id="size_select-styler">
                            <div class="name">Требования к окнам:</div>
                            <select>
                                <option value="Максимальная теплоизоляция">Максимальная теплоизоляция</option>
                                <option value="Оптимальная теплоизоляция">Оптимальная теплоизоляция</option>
                                <option value="Минимальная теплоизоляция">Минимальная теплоизоляция</option>
                            </select>
                        </div>
                        <button type="button" class="button send_to_form" data-toggle="modal" data-target=".modal_call" data-title="Рассчитать стоимость" data-subject="Рассчитать стоимость с сайта коттеджей" data-button="Рассчитать стоимость" data-show=".js_modal_result">Рассчитатьстоимость</button>
                    </div>
                </form>
            </div>

            <div class="col-sm-12">
                <div class="anons_block">
                    <div class="anons_block_item aos-init" data-aos="fade-up" data-aos-delay="100">
                        <div class="img">
                            <img src="img/cotage_ico_1.png" class="img-responsive" alt="">
                        </div>
                        <div class="text">
                            Энергосберегающими <br>
                            окнами Rehau за 15 дней
                        </div>
                    </div>

                    <div class="anons_block_item aos-init" data-aos="fade-up" data-aos-delay="300">
                        <div class="img">
                            <img src="img/cotage_ico_1.png" alt="">
                        </div>
                        <div class="text">
                            Все монтажники прошли <br>
                            обучение в академии Rehau
                        </div>
                    </div>

                    <div class="anons_block_item aos-init" data-aos="fade-up" data-aos-delay="500">
                        <div class="img">
                            <img src="img/cotage_ico_1.png" alt="">
                        </div>
                        <div class="text">
                            Срок эксплуатации <br>
                            окон 30 лет
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>



<section class="diagram diagram_cottage">
    <img class="img-responsive visible_sm" alt="" src="img/diagram01.png">
</section>


<section style="background-color: #ddd; margin-bottom: 100px;">
	<h1>ТУТ БУДЕТ СЛАЙДЕР</h1>
</section>

<!-- <section class="adv-slider">
    <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <div class="main_title">
                    </div>
                <div class="main_desc">
                    </div>
                <div class="js-adv-slider slick-initialized slick-slider slick-dotted" style="display: block;">
                	<div class="slick_prev slick-arrow"></div>
                  	<div class="slick-list draggable">
                  		<div class="slick-track" style="opacity: 1; width: 0px; transform: translate3d(0px, 0px, 0px);">
                  		<div class="slick-slide slick-cloned" data-slick-index="-1" aria-hidden="true" style="width: 0px;" tabindex="-1">
                            <img src="img/946f901jpg.jpg" class="img-responsive" alt="" >
                        </div>

                        <div class="slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" style="width: 0px;" tabindex="0" role="tabpanel" id="slick-slide00" aria-describedby="slick-slide-control00">
                            <img src="img/946f901jpg.jpg" class="img-responsive" alt="" >
                        </div>

                        <div class="slick-slide" data-slick-index="1" aria-hidden="true" style="width: 0px;" tabindex="-1" role="tabpanel" id="slick-slide01" aria-describedby="slick-slide-control01">
                            <img src="img/946f901jpg.jpg" class="img-responsive" alt="" >
                        </div>

                        <div class="slick-slide slick-cloned" data-slick-index="2" aria-hidden="true" style="width: 0px;" tabindex="-1">
                            <img src="img/946f901jpg.jpg" class="img-responsive" alt="" >
                        </div>

                        <div class="slick-slide slick-cloned" data-slick-index="3" aria-hidden="true" style="width: 0px;" tabindex="-1">
                            <img src="img/946f901jpg.jpg" class="img-responsive" alt="">
                        </div>
                    </div>
                </div>
                <div class="slick_next slick-arrow">
                	
                </div>
                    <ul class="slick-dots" role="tablist">
                    	<li class="slick-active" role="presentation">
                    		<button type="button" role="tab" id="slick-slide-control00" aria-controls="slick-slide00" aria-label="1 of 2" tabindex="0" aria-selected="true">1</button>
                    	</li>
                    	<li class="" role="presentation"><button type="button" role="tab" id="slick-slide-control01" aria-controls="slick-slide01" aria-label="2 of 2" tabindex="-1">2</button>
                    	</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>


<section class="calc_price">
    <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <div class="title calc_price_title">
                    Рассчитайте стоимость <br>
                    остекления коттеджа
                </div>

                <div class="calc_price_slider slick-initialized slick-slider"><div class="slick_prev slick-arrow slick-disabled" aria-disabled="true" style="display: block;"></div>

                    <div class="slick-list draggable" style="height: 674px;"><div class="slick-track" style="opacity: 1; width: 8190px; transform: translate3d(0px, 0px, 0px);"><div class="calc_item js_option slick-slide slick-current slick-active" data-name="Что вы хотите остеклить" data-slick-index="0" aria-hidden="false" style="width: 1170px;" tabindex="0">

                        <div class="calc_header">
                            <div class="title">
                                    <span>
                                        01
                                    </span>
                                Что вы хотите остеклить?
                            </div>
                        </div>

                        <div class="calc_body">

                            <div class="block">
                                <input type="radio" name="glaze_1" id="glaze_1" data-val="Дом" tabindex="0">
                                <label for="glaze_1" class="calc_block">
                                    <img src="img/calc_block_1.png" class="img-responsive" alt="" >
                                    <span class="title">
                                        Дом
                                    </span>
                                    <span class="check_block">
                                        Выбрать
                                    </span>
                                </label>
                            </div>

                            <div class="block">
                                <input type="radio" name="glaze_1" id="glaze_2" data-val="Бассейн" tabindex="0">
                                <label for="glaze_2" class="calc_block">
                                    <img src="img/calc_block_1.png" class="img-responsive" alt="" >
                                    <span class="title">
                                        Бассейн
                                    </span>
                                    <span class="check_block">
                                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="14px" height="11px">
                                            <path fill-rule="evenodd" fill="rgb(255, 255, 255)" d="M13.984,2.202 L5.373,10.980 L5.373,10.979 L5.372,10.980 L-0.009,5.493 L2.143,3.299 L5.373,6.592 L11.832,0.007 L13.984,2.202 Z"></path>
                                        </svg>
                                        Выбрать
                                    </span>
                                </label>
                            </div>

                            <div class="block">
                                <input type="radio" name="glaze_1" id="glaze_3" data-val="Дверь" tabindex="0">
                                <label for="glaze_3" class="calc_block">
                                    <img src="img/calc_block_1.png" class="img-responsive" alt="" >
                                    <span class="title">
                                            Дверь
                                        </span>
                                    <span class="check_block">
                                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="14px" height="11px">
                                            <path fill-rule="evenodd" fill="rgb(255, 255, 255)" d="M13.984,2.202 L5.373,10.980 L5.373,10.979 L5.372,10.980 L-0.009,5.493 L2.143,3.299 L5.373,6.592 L11.832,0.007 L13.984,2.202 Z"></path>
                                        </svg>
                                        Выбрать
                                    </span>
                                </label>
                            </div>

                            <div class="block">
                                <input type="radio" name="glaze_1" id="glaze_4" data-val="Терасса" tabindex="0">
                                <label for="glaze_4" class="calc_block">
                                    <img src="img/calc_block_1.png" class="img-responsive" alt="" >
                                    <span class="title">
                                            Терасса
                                        </span>
                                    <span class="check_block">
                                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="14px" height="11px">
                                            <path fill-rule="evenodd" fill="rgb(255, 255, 255)" d="M13.984,2.202 L5.373,10.980 L5.373,10.979 L5.372,10.980 L-0.009,5.493 L2.143,3.299 L5.373,6.592 L11.832,0.007 L13.984,2.202 Z"></path>
                                        </svg>
                                        Выбрать
                                    </span>
                                </label>
                            </div>
                        </div>

                        <div class="calc_footer">

                            <button class="button js_btn_next" tabindex="0">
                                Далее
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 11" width="20px" height="11px">
                                    <path fill-rule="evenodd" fill="rgb(255, 255, 255)" d="M20.004,5.257 L14.350,-0.006 L12.937,1.211 L16.178,4.217 L0.015,4.217 L0.015,6.175 L16.178,6.175 L12.937,9.516 L14.350,10.985 L20.004,5.257 Z"></path>
                                </svg>
                            </button>
                        </div>

                    </div><div class="calc_item js_option slick-slide" data-name="Вид профиля" data-slick-index="1" aria-hidden="true" style="width: 1170px;" tabindex="-1">

                        <div class="calc_header">
                            <div class="title">
                                    <span>
                                        02
                                    </span>
                                Какой вид профиля вам необходим
                            </div>
                        </div>

                        <div class="calc_body">

                            <div class="block">
                                <input type="radio" name="color_1" id="glaze2_1" data-val="Белый" tabindex="-1">
                                <label for="glaze2_1" class="calc_block">
                                    <img src="/public/common/cottage/calc_block2_1.png.pagespeed.ce.QIv39qPAyQ.png" class="img-responsive" alt="" data-pagespeed-url-hash="112905005" onload="pagespeed.CriticalImages.checkImageForCriticality(this);">
                                    <span class="title">
                                            Белый
                                        </span>
                                    <span class="check_block">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="14px" height="11px">
                                                <path fill-rule="evenodd" fill="rgb(255, 255, 255)" d="M13.984,2.202 L5.373,10.980 L5.373,10.979 L5.372,10.980 L-0.009,5.493 L2.143,3.299 L5.373,6.592 L11.832,0.007 L13.984,2.202 Z"></path>
                                            </svg>
                                            Выбрать
                                        </span>
                                </label>
                            </div>

                            <div class="block">
                                <input type="radio" name="color_1" id="glaze2_2" data-val="Под дерево" tabindex="-1">
                                <label for="glaze2_2" class="calc_block">
                                    <img src="/public/common/cottage/calc_block2_2.png.pagespeed.ce.ma09lDl4TM.png" class="img-responsive" alt="" data-pagespeed-url-hash="407404926" onload="pagespeed.CriticalImages.checkImageForCriticality(this);">
                                    <span class="title">
                                            Под дерево
                                        </span>
                                    <span class="check_block">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="14px" height="11px">
                                                <path fill-rule="evenodd" fill="rgb(255, 255, 255)" d="M13.984,2.202 L5.373,10.980 L5.373,10.979 L5.372,10.980 L-0.009,5.493 L2.143,3.299 L5.373,6.592 L11.832,0.007 L13.984,2.202 Z"></path>
                                            </svg>
                                            Выбрать
                                        </span>
                                </label>
                            </div>

                            <div class="block">
                                <input type="radio" name="color_1" id="glaze2_3" data-val="Крашенный" tabindex="-1">
                                <label for="glaze2_3" class="calc_block">
                                    <img src="/public/common/cottage/calc_block2_3.png.pagespeed.ce.AhinhLPc1Y.png" class="img-responsive" alt="" data-pagespeed-url-hash="701904847" onload="pagespeed.CriticalImages.checkImageForCriticality(this);">
                                    <span class="title">
                                            Крашенный
                                        </span>
                                    <span class="check_block">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="14px" height="11px">
                                                <path fill-rule="evenodd" fill="rgb(255, 255, 255)" d="M13.984,2.202 L5.373,10.980 L5.373,10.979 L5.372,10.980 L-0.009,5.493 L2.143,3.299 L5.373,6.592 L11.832,0.007 L13.984,2.202 Z"></path>
                                            </svg>
                                            Выбрать
                                        </span>
                                </label>
                            </div>

                        </div>

                        <div class="calc_footer">

                            <button class="button js_btn_prev" tabindex="-1">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 11" width="20px" height="11px">
                                    <path fill-rule="evenodd" fill="rgb(255, 255, 255)" d="M20.004,5.257 L14.350,-0.006 L12.937,1.211 L16.178,4.217 L0.015,4.217 L0.015,6.175 L16.178,6.175 L12.937,9.516 L14.350,10.985 L20.004,5.257 Z"></path>
                                </svg>
                                Назад
                            </button>

                            <button class="button js_btn_next" tabindex="-1">
                                Далее
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 11" width="20px" height="11px">
                                    <path fill-rule="evenodd" fill="rgb(255, 255, 255)" d="M20.004,5.257 L14.350,-0.006 L12.937,1.211 L16.178,4.217 L0.015,4.217 L0.015,6.175 L16.178,6.175 L12.937,9.516 L14.350,10.985 L20.004,5.257 Z"></path>
                                </svg>
                            </button>
                        </div>

                    </div><div class="calc_item js_option slick-slide" data-name="Уровень энергосбережения" data-slick-index="2" aria-hidden="true" style="width: 1170px;" tabindex="-1">

                        <div class="calc_header">
                            <div class="title">
                                    <span>
                                        03
                                    </span>
                                Какой уровень энергосбережения вам необходим?
                            </div>
                        </div>

                        <div class="calc_body">

                            <div class="block">
                                <input type="radio" name="level_1" id="glaze3_1" data-val="Максимальный" tabindex="-1">
                                <label for="glaze3_1" class="calc_block">
                                    <img src="/public/common/cottage/calc_block3_1.png.pagespeed.ce.Feo1vER4-P.png" class="img-responsive" alt="" data-pagespeed-url-hash="3144509190" onload="pagespeed.CriticalImages.checkImageForCriticality(this);">
                                    <span class="title">
                                            Максимальный
                                        </span>
                                    <span class="check_block">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="14px" height="11px">
                                                <path fill-rule="evenodd" fill="rgb(255, 255, 255)" d="M13.984,2.202 L5.373,10.980 L5.373,10.979 L5.372,10.980 L-0.009,5.493 L2.143,3.299 L5.373,6.592 L11.832,0.007 L13.984,2.202 Z"></path>
                                            </svg>
                                            Выбрать
                                        </span>
                                </label>
                            </div>

                            <div class="block">
                                <input type="radio" name="level_1" id="glaze3_2" data-val="Средний" tabindex="-1">
                                <label for="glaze3_2" class="calc_block">
                                    <img src="" class="img-responsive" alt="">
                                    <span class="title">
                                        Средний
                                    </span>
                                    <span class="check_block">
                                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="14px" height="11px">
                                            <path fill-rule="evenodd" fill="rgb(255, 255, 255)" d="M13.984,2.202 L5.373,10.980 L5.373,10.979 L5.372,10.980 L-0.009,5.493 L2.143,3.299 L5.373,6.592 L11.832,0.007 L13.984,2.202 Z"></path>
                                        </svg>
                                        Выбрать
                                    </span>
                                </label>
                            </div>

                            <div class="block">
                                <input type="radio" name="level_1" id="glaze3_3" data-val="Оптимальный" tabindex="-1">
                                <label for="glaze3_3" class="calc_block">
                                    <img src="/public/common/cottage/calc_block3_3.png.pagespeed.ce.PHg0Xl60V5.png" class="img-responsive" alt="" data-pagespeed-url-hash="3733509032" onload="pagespeed.CriticalImages.checkImageForCriticality(this);">
                                    <span class="title">
                                            Оптимальный
                                        </span>
                                    <span class="check_block">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="14px" height="11px">
                                                <path fill-rule="evenodd" fill="rgb(255, 255, 255)" d="M13.984,2.202 L5.373,10.980 L5.373,10.979 L5.372,10.980 L-0.009,5.493 L2.143,3.299 L5.373,6.592 L11.832,0.007 L13.984,2.202 Z"></path>
                                            </svg>
                                            Выбрать
                                        </span>
                                </label>
                            </div>

                        </div>

                        <div class="calc_footer">

                            <button class="button js_btn_prev" tabindex="-1">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 11" width="20px" height="11px">
                                    <path fill-rule="evenodd" fill="rgb(255, 255, 255)" d="M20.004,5.257 L14.350,-0.006 L12.937,1.211 L16.178,4.217 L0.015,4.217 L0.015,6.175 L16.178,6.175 L12.937,9.516 L14.350,10.985 L20.004,5.257 Z"></path>
                                </svg>
                                Назад
                            </button>

                            <button class="button js_btn_next" tabindex="-1">
                                Далее
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 11" width="20px" height="11px">
                                    <path fill-rule="evenodd" fill="rgb(255, 255, 255)" d="M20.004,5.257 L14.350,-0.006 L12.937,1.211 L16.178,4.217 L0.015,4.217 L0.015,6.175 L16.178,6.175 L12.937,9.516 L14.350,10.985 L20.004,5.257 Z"></path>
                                </svg>
                            </button>
                        </div>

                    </div><div class="calc_item calc_item_4 js_option slick-slide" data-name="Тип стеклопакета" data-slick-index="3" aria-hidden="true" style="width: 1170px;" tabindex="-1">

                        <div class="calc_header">
                            <div class="title">
                                    <span>
                                        04
                                    </span>
                                Какой тип стеклопакета
                            </div>
                        </div>

                        <div class="calc_body">

                            <div class="block">
                                <input type="radio" name="type_1" id="glaze4_1" data-val="Защита от ультрафиолета" tabindex="-1">
                                <label for="glaze4_1" class="calc_block">
                                    <img src="/public/common/cottage/calc_block4_1.png.pagespeed.ce.qyFjtNDz5Q.png" class="img-responsive" alt="" data-pagespeed-url-hash="1881146079" onload="pagespeed.CriticalImages.checkImageForCriticality(this);">
                                    <span class="title">
                                            Защита от ультрафиолета
                                        </span>
                                    <span class="check_block">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="14px" height="11px">
                                                <path fill-rule="evenodd" fill="rgb(255, 255, 255)" d="M13.984,2.202 L5.373,10.980 L5.373,10.979 L5.372,10.980 L-0.009,5.493 L2.143,3.299 L5.373,6.592 L11.832,0.007 L13.984,2.202 Z"></path>
                                            </svg>
                                            Выбрать
                                        </span>
                                </label>
                            </div>

                            <div class="block">
                                <input type="radio" name="type_1" id="glaze4_2" data-val="Энергосберегаемость" tabindex="-1">
                                <label for="glaze4_2" class="calc_block">
                                    <img src="/public/common/cottage/calc_block4_2.png.pagespeed.ce.LtOz6mW35V.png" class="img-responsive" alt="" data-pagespeed-url-hash="2175646000" onload="pagespeed.CriticalImages.checkImageForCriticality(this);">
                                    <span class="title">
                                            Энергосберегаемость
                                        </span>
                                    <span class="check_block">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="14px" height="11px">
                                                <path fill-rule="evenodd" fill="rgb(255, 255, 255)" d="M13.984,2.202 L5.373,10.980 L5.373,10.979 L5.372,10.980 L-0.009,5.493 L2.143,3.299 L5.373,6.592 L11.832,0.007 L13.984,2.202 Z"></path>
                                            </svg>
                                            Выбрать
                                        </span>
                                </label>
                            </div>

                            <div class="block">
                                <input type="radio" name="type_1" id="glaze4_3" data-val="Шумоизолирующий" tabindex="-1">
                                <label for="glaze4_3" class="calc_block">
                                    <img src="/public/common/cottage/calc_block4_3.png.pagespeed.ce.iuNvWEhMND.png" class="img-responsive" alt="" data-pagespeed-url-hash="2470145921" onload="pagespeed.CriticalImages.checkImageForCriticality(this);">
                                    <span class="title">
                                            Шумоизолирующий
                                        </span>
                                    <span class="check_block">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="14px" height="11px">
                                                <path fill-rule="evenodd" fill="rgb(255, 255, 255)" d="M13.984,2.202 L5.373,10.980 L5.373,10.979 L5.372,10.980 L-0.009,5.493 L2.143,3.299 L5.373,6.592 L11.832,0.007 L13.984,2.202 Z"></path>
                                            </svg>
                                            Выбрать
                                        </span>
                                </label>
                            </div>

                        </div>

                        <div class="calc_footer">

                            <button class="button js_btn_prev" tabindex="-1">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 11" width="20px" height="11px">
                                    <path fill-rule="evenodd" fill="rgb(255, 255, 255)" d="M20.004,5.257 L14.350,-0.006 L12.937,1.211 L16.178,4.217 L0.015,4.217 L0.015,6.175 L16.178,6.175 L12.937,9.516 L14.350,10.985 L20.004,5.257 Z"></path>
                                </svg>
                                Назад
                            </button>

                            <button class="button js_btn_next" tabindex="-1">
                                Далее
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 11" width="20px" height="11px">
                                    <path fill-rule="evenodd" fill="rgb(255, 255, 255)" d="M20.004,5.257 L14.350,-0.006 L12.937,1.211 L16.178,4.217 L0.015,4.217 L0.015,6.175 L16.178,6.175 L12.937,9.516 L14.350,10.985 L20.004,5.257 Z"></path>
                                </svg>
                            </button>
                        </div>

                    </div><div class="calc_item js_option slick-slide" data-name="Дополнительная комплектация" data-slick-index="4" aria-hidden="true" style="width: 1170px;" tabindex="-1">

                        <div class="calc_header">
                            <div class="title">
                                    <span>
                                        05
                                    </span>
                                Дополнительная комплектация
                            </div>
                        </div>

                        <div class="calc_body">

                            <div class="block">
                                <input type="radio" name="dop_1" id="glaze5_1" data-val="Термо-подоконник" tabindex="-1">
                                <label for="glaze5_1" class="calc_block">
                                    <img src="/public/common/cottage/calc_block5_1.png.pagespeed.ce.4mSIN_E_sU.png" class="img-responsive" alt="" data-pagespeed-url-hash="617782968" onload="pagespeed.CriticalImages.checkImageForCriticality(this);">
                                    <span class="title">
                                            Термо-подоконник
                                        </span>
                                    <span class="check_block">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="14px" height="11px">
                                                <path fill-rule="evenodd" fill="rgb(255, 255, 255)" d="M13.984,2.202 L5.373,10.980 L5.373,10.979 L5.372,10.980 L-0.009,5.493 L2.143,3.299 L5.373,6.592 L11.832,0.007 L13.984,2.202 Z"></path>
                                            </svg>
                                            Выбрать
                                        </span>
                                </label>
                            </div>

                            <div class="block">
                                <input type="radio" name="dop_2" id="glaze5_2" data-val="Раздвижные стены" tabindex="-1">
                                <label for="glaze5_2" class="calc_block">
                                    <img src="/public/common/cottage/calc_block5_2.png.pagespeed.ce.OxOOTb15dE.png" class="img-responsive" alt="" data-pagespeed-url-hash="912282889" onload="pagespeed.CriticalImages.checkImageForCriticality(this);">
                                    <span class="title">
                                            Раздвижные стены
                                        </span>
                                    <span class="check_block">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="14px" height="11px">
                                                <path fill-rule="evenodd" fill="rgb(255, 255, 255)" d="M13.984,2.202 L5.373,10.980 L5.373,10.979 L5.372,10.980 L-0.009,5.493 L2.143,3.299 L5.373,6.592 L11.832,0.007 L13.984,2.202 Z"></path>
                                            </svg>
                                            Выбрать
                                        </span>
                                </label>
                            </div>

                            <div class="block">
                                <input type="radio" name="dop_3" id="glaze5_3" data-val="Антивзлом" tabindex="-1">
                                <label for="glaze5_3" class="calc_block">
                                    <img src="/public/common/cottage/calc_block5_3.png.pagespeed.ce.RvHY3n-CQZ.png" class="img-responsive" alt="" data-pagespeed-url-hash="1206782810" onload="pagespeed.CriticalImages.checkImageForCriticality(this);">
                                    <span class="title">
                                            Антивзлом
                                        </span>
                                    <span class="check_block">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="14px" height="11px">
                                                <path fill-rule="evenodd" fill="rgb(255, 255, 255)" d="M13.984,2.202 L5.373,10.980 L5.373,10.979 L5.372,10.980 L-0.009,5.493 L2.143,3.299 L5.373,6.592 L11.832,0.007 L13.984,2.202 Z"></path>
                                            </svg>
                                            Выбрать
                                        </span>
                                </label>
                            </div>

                            <div class="block">
                                <input type="radio" name="dop_4" id="glaze5_4" data-val="Зимнее проветривание" tabindex="-1">
                                <label for="glaze5_4" class="calc_block">
                                    <img src="/public/common/cottage/calc_block5_4.png.pagespeed.ce.HgVPNMbDvT.png" class="img-responsive" alt="" data-pagespeed-url-hash="1501282731" onload="pagespeed.CriticalImages.checkImageForCriticality(this);">
                                    <span class="title">
                                            Зимнее проветривание
                                        </span>
                                    <span class="check_block">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="14px" height="11px">
                                                <path fill-rule="evenodd" fill="rgb(255, 255, 255)" d="M13.984,2.202 L5.373,10.980 L5.373,10.979 L5.372,10.980 L-0.009,5.493 L2.143,3.299 L5.373,6.592 L11.832,0.007 L13.984,2.202 Z"></path>
                                            </svg>
                                            Выбрать
                                        </span>
                                </label>
                            </div>

                            <div class="block">
                                <input type="radio" name="dop_5" id="glaze5_5" data-val="Противоударные стекла" tabindex="-1">
                                <label for="glaze5_5" class="calc_block">
                                    <img src="/public/common/cottage/calc_block5_5.png.pagespeed.ce.OyEb8A2eco.png" class="img-responsive" alt="" data-pagespeed-url-hash="1795782652" onload="pagespeed.CriticalImages.checkImageForCriticality(this);">
                                    <span class="title">
                                            Противоударные стекла
                                        </span>
                                    <span class="check_block">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="14px" height="11px">
                                                <path fill-rule="evenodd" fill="rgb(255, 255, 255)" d="M13.984,2.202 L5.373,10.980 L5.373,10.979 L5.372,10.980 L-0.009,5.493 L2.143,3.299 L5.373,6.592 L11.832,0.007 L13.984,2.202 Z"></path>
                                            </svg>
                                            Выбрать
                                        </span>
                                </label>
                            </div>

                        </div>

                        <div class="calc_footer">

                            <button class="button js_btn_prev" tabindex="-1">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 11" width="20px" height="11px">
                                    <path fill-rule="evenodd" fill="rgb(255, 255, 255)" d="M20.004,5.257 L14.350,-0.006 L12.937,1.211 L16.178,4.217 L0.015,4.217 L0.015,6.175 L16.178,6.175 L12.937,9.516 L14.350,10.985 L20.004,5.257 Z"></path>
                                </svg>
                                Назад
                            </button>

                            <button class="button js_btn_next" tabindex="-1">
                                Далее
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 11" width="20px" height="11px">
                                    <path fill-rule="evenodd" fill="rgb(255, 255, 255)" d="M20.004,5.257 L14.350,-0.006 L12.937,1.211 L16.178,4.217 L0.015,4.217 L0.015,6.175 L16.178,6.175 L12.937,9.516 L14.350,10.985 L20.004,5.257 Z"></path>
                                </svg>
                            </button>
                        </div>

                    </div><div class="calc_item slick-slide" data-slick-index="5" aria-hidden="true" style="width: 1170px;" tabindex="-1">

                        <div class="calc_header">
                            <div class="calc_form_image">
                                <img src="/public/common/cottage/calc_block7.png.pagespeed.ce.Bb7Nbt-UXf.png" class="img-responsive " alt="" data-pagespeed-url-hash="2069464692" onload="pagespeed.CriticalImages.checkImageForCriticality(this);">
                            </div>
                        </div>

                        <div class="calc_body calc_body_form">

                            <div class="block_form">

                                <div class="block_form_box block_form_box_first js_option" data-name="количество окон" data-append="шт">
                                    <div class="name">
                                        Укажите требуемое количество окон:
                                    </div>

                                    <input type="text" class="input_sm" tabindex="-1">
                                    <span class="form_span">шт</span>
                                </div>

                                <div class="block_form_box js_option" data-name="осткеляемя площадь" data-append="м<sup>2</sup>">
                                    <div class="name">
                                        Или осткеляемую площадь:
                                    </div>

                                    <input type="text" class="input_md" tabindex="-1">
                                    <span class="form_span">м<sup>2</sup></span>

                                </div>

                            </div>

                            <div class="block_form">

                                <div class="block_form_box block_form_textarea js_option" data-name="Дополнительное примечание">
                                    <div class="name">
                                        Дополнительное примечание:
                                    </div>

                                    <textarea></textarea>

                                </div>
                            </div>


                        </div>

                        <div class="calc_footer">

                            <button class="button js_btn_prev" tabindex="-1">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 11" width="20px" height="11px">
                                    <path fill-rule="evenodd" fill="rgb(255, 255, 255)" d="M20.004,5.257 L14.350,-0.006 L12.937,1.211 L16.178,4.217 L0.015,4.217 L0.015,6.175 L16.178,6.175 L12.937,9.516 L14.350,10.985 L20.004,5.257 Z"></path>
                                </svg>
                                Назад
                            </button>

                            <button class="button js_btn_next" tabindex="-1">
                                Далее
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 11" width="20px" height="11px">
                                    <path fill-rule="evenodd" fill="rgb(255, 255, 255)" d="M20.004,5.257 L14.350,-0.006 L12.937,1.211 L16.178,4.217 L0.015,4.217 L0.015,6.175 L16.178,6.175 L12.937,9.516 L14.350,10.985 L20.004,5.257 Z"></path>
                                </svg>
                            </button>
                        </div>

                    </div><div class="calc_item slick-slide" data-slick-index="6" aria-hidden="true" style="width: 1170px;" tabindex="-1">

                        <div class="calc_header">
                            <div class="title">
                            </div>
                        </div>

                        <form class="ajaxForm block_form_box form-vertical ng-pristine ng-valid" data-show=".js_modal_result" id="yw0" action="/default/feedbacks/index" method="post">
<div style="display:none"><input type="hidden" value="beb0ee5f4a46fb11c47de39062f93db10fa835b3" name="YII_CSRF_TOKEN" tabindex="-1"></div>
                        <div class="calc_body calc_body_form calc_body_form_ty">

                            <div class="pic">
                                <img src="/public/common/cottage/cottage_operator.png.pagespeed.ce.QLDIgQfojD.png" class="img-responsive" alt="" data-pagespeed-url-hash="26099606" onload="pagespeed.CriticalImages.checkImageForCriticality(this);">
                            </div>
                            <div class="text">
                                <div class="title">
                                    Спасибо!
                                </div>
                                <div class="desc">
                                    Менеджер уже расчитывает стоимость <br>
                                    остекления по вашим параметрам
                                </div>

                                <div class="block_form_box">
                                    <p>Оставьте ваши контакты для связи</p>
                                    <input value="1" name="Feedbacks[type]" id="Feedbacks_type" type="hidden" tabindex="-1">                                    <input value="Рассчитать стоимость работ с сайта коттеджей" name="Feedbacks[subject]" id="Feedbacks_subject" type="hidden" tabindex="-1">                                    <input id="options_result_str" name="Feedbacks[content]" type="hidden" tabindex="-1">                                    <input required="required" placeholder="Имя" maxlength="100" name="Feedbacks[name]" id="Feedbacks_name" type="text" tabindex="-1">                                    <input required="required" placeholder="Телефон" maxlength="100" class="js_mask" name="Feedbacks[phone]" id="Feedbacks_phone" type="text" tabindex="-1">                                    <button class="button" type="submit" tabindex="-1">
                                        Отправить
                                    </button>
                                </div>

                            </div>

                        </div>

                        </form>
                    </div></div></div>

                    

                    

                    

                    

                    

                    

                <div class="slick_next slick-arrow" style="display: block;" aria-disabled="false"></div></div>
            </div>
        </div>
    </div>
</section>

 -->







<!-- <section class="service" id="service">
    <div class="container">
        <div class="title">Почему наш сервис лучший в Украине</div>
        <div class="row">
            <div class="col-md-4 col-xs-12">
                <div class="service_one">
                    <div class="num">5<span class="num_text">лет гарантии</span></div>
                    <div>на наши работы и пожизненное обслуживание</div>
                </div>
            </div>
            <div class="col-md-4 col-xs-12">
                <div class="service_one experience">
                    <div class="num">11<span class="num_text">лет</span></div>
                    <div>опыта работы</div>
                </div>
            </div>
            <div class="col-md-4 col-xs-12">
                <div class="service_one count">
                    <div class="num">1117</div>
                    <div>Реализованых объектов</div>
                </div>
            </div>
        </div>
    </div>
</section> -->

<section class="clima" id="trigger">
    <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <div class="title default_title">
                    Энергоэффективные стеклопакеты <br>
                    ClimaScreen® FULL
                </div>
            </div>

            <div class="col-sm-12">
		        <div class="twentytwenty-wrapper twentytwenty-horizontal"><div class="move_slider twentytwenty-container" style="height: 627px;">
			                <!-- <img src="img/cold.png..png"  class="twentytwenty-before" style="clip: rect(0px, 0px, 627px, 0px);"> -->
			                <img src="img/cold.png..png"  class="twentytwenty-after" style="clip: rect(0px, 1169px, 627px, 0px);">
			            <div class="twentytwenty-overlay">
			            	<div class="twentytwenty-before-label" data-content="Before">
			            		
			            	</div>

			            	<div class="twentytwenty-after-label" data-content="After">
			            		
			            	</div>
			            </div>
			            <div class="twentytwenty-handle" style="left: 0px;">
			            	<span class="twentytwenty-left-arrow"></span>
			            	<span class="twentytwenty-right-arrow"></span>
			            </div>
			        </div>
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