<?php include('header.php'); ?>

<style>
    * {box-sizing: border-box;}

    .img-comp-container {
      position: relative;
      height: 700px; 
    }

    .img-comp-img {
      position: absolute;
      width: auto;
      height: auto;
      overflow:hidden;
       border: 5px solid red;
    }

    .img-comp-img img {
      display:block;
      vertical-align:middle;
    }

    .img-comp-slider {
      position: absolute;
      z-index:9;
      cursor: ew-resize;
      /*set the appearance of the slider:*/
      width: 60px;
      height: 60px;
      border: 5px solid red;
      background-color: #ffffff;
      opacity: 1;
      border-radius: 50%;
    }
</style>

<section class="anons anons_cottage" style="background-image: url('../img/anons_cottage.png')">
    <div class="container">
        <div class="row">
            <div class="col-md-7 col-sm-12">
                <div class="title" style="font-weight: 500;">
                    Остекление коттеджей с экономией на отоплении до 60%
                </div>
            </div>

             <div class="col-md-4 col-sm-12">
                    <form class="main_form ng-pristine ng-valid" action="/" method="post">
                        <header class="main_form_header">
                            Моментальный рассчет стоимости
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
                                    <div class="jq-selectbox__select" style="position: relative;width: 288px;">
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
                                <div class="jq-selectbox jqselect" style="display: inline-block; position: relative; z-index:100     width: 288px;">
                                        <select style="margin: 0px; padding: 0px; position: absolute; left: 0px; top: 0px; width: 100%; height: 100%; opacity: 0;">
                                            <option value="МДФ">МДФ</option>
                                            <option value="Крашенные">Крашенные</option>
                                            <option value="Шпонированные">Шпонированные</option>
                                            <option value="Ясень">Ясень</option>
                                            <option value="Дуб">Дуб</option>
                                            <option value="Ольха">Ольха</option>
                                        </select>
                                    <div class="jq-selectbox__select" style="position: relative; width: 288px">
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


                            <div class="name">Выберите размер:</div>
                                <div class="jq-selectbox jqselect" style="display: inline-block; position: relative; z-index:100">
                                    <select style="margin: 0px; padding: 0px; position: absolute; left: 0px; top: 0px; width: 100%; height: 100%; opacity: 0;">
                                        <option value="600 х 2000 мм">600 х 2000 мм</option>
                                        <option value="700 х 2000 мм">700 х 2000 мм</option>
                                        <option value="800 х 2000 мм">800 х 2000 мм</option>
                                        <option value="900 х 2000 мм">900 х 2000 мм</option>
                                        <option value="Нестандартный">Нестандартный</option>
                                    </select>
                                <div class="jq-selectbox__select" style="position: relative; width: 288px">
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

                            <button type="button" class="button send_to_form" >
                                Рассчитать стоимость
                            </button>
                        </div>
                    </form>
                </div>














<!-- 
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
                        <button type="button" class="button send_to_form" >Рассчитатьстоимость</button>
                    </div>
                </form>
            </div>
 -->
            <div class="col-sm-12">
                <div class="anons_block">
                    <div class="anons_block_item aos-init" data-aos="fade-up" data-aos-delay="100">
                        <div class="img">
                            <img src="img/icon/cotage_ico_1.png" class="img-responsive" alt="">
                        </div>
                        <div class="text">
                            Энергосберегающими <br>
                            окнами Rehau за 15 дней
                        </div>
                    </div>

                    <div class="anons_block_item aos-init" data-aos="fade-up" data-aos-delay="300">
                        <div class="img">
                            <img src="img/icon/cotage_ico_2.png" alt="">
                        </div>
                        <div class="text">
                            Все монтажники прошли <br>
                            обучение в академии Rehau
                        </div>
                    </div>

                    <div class="anons_block_item aos-init" data-aos="fade-up" data-aos-delay="500">
                        <div class="img">
                            <img src="img/icon/cotage_ico_3.png" alt="">
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



<section style="background: #ddd; margin:50px 0px 50px 0px; text-align: center;">
    <h1>ТУТ БУДЕТ СЛАЙДЕР</h1>
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
                                    <img src="/public/common/cottage/calc_block_1.png.pagespeed.ce.QJollPJDJM.png" class="img-responsive" alt="" data-pagespeed-url-hash="2538422879" onload="pagespeed.CriticalImages.checkImageForCriticality(this);">
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
                                    <img src="/public/common/cottage/calc_block_2.png.pagespeed.ce.O4bYA6Qi5h.png" class="img-responsive" alt="" data-pagespeed-url-hash="2832922800" onload="pagespeed.CriticalImages.checkImageForCriticality(this);">
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
                                    <img src="/public/common/cottage/calc_block_3.png.pagespeed.ce.6sk76uQQZN.png" class="img-responsive" alt="" data-pagespeed-url-hash="3127422721" onload="pagespeed.CriticalImages.checkImageForCriticality(this);">
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
                                    <img src="/public/common/cottage/calc_block_4.png.pagespeed.ce.9f4aveHYNt.png" class="img-responsive" alt="" data-pagespeed-url-hash="3421922642" onload="pagespeed.CriticalImages.checkImageForCriticality(this);">
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
                                    <img src="/public/common/cottage/calc_block3_2.png.pagespeed.ce.IMeKANb7TA.png" class="img-responsive" alt="" data-pagespeed-url-hash="3439009111" onload="pagespeed.CriticalImages.checkImageForCriticality(this);">
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
<div style="display:none"><input type="hidden" value="b3cee2809d298f642720dfc4adfb8a1fd1afefcd" name="YII_CSRF_TOKEN" tabindex="-1"></div>
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


<section>
    <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <div class="title default_title" style="font-family: inherit;font-size: 45px;font-weight: 700;color: inherit;text-align: center;line-height: 1;margin-bottom: 30px;">
                    Энергоэффективные стеклопакеты <br>
                    ClimaScreen® FULL
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-xl-12">
               <div class="img-comp-container">
                  <div class="img-comp-img">
                    <img src="img/hot.png">
                  </div>
                  <div class="img-comp-img img-comp-overlay">
                    <img src="img/cold.png..png">
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
                    <p>
                       Наша компания является авторизированным партнером немецкого производителя оконных профилей Rehau. Все наши монтажники проходят обязательную стажировку и сертификацию, а при монтаже мы следуем всем стандартам Rehau. Это позволяет нам давать гарантию 5 лет на оконные профили и монтаж. 
                    </p> 
                    <button type="button" class="button send_to_form">Узнать подробнее</button>         
                </div>
            </div>
            <div class="col-sm-6">
                <img class="img-responsive" alt="" src="img/sertficat.jpg"  style="box-shadow: 0 0 51px 0 rgba(0,0,0,.46);">
            </div>
        </div>
    </div>
</section>


<section class="production">
    <div class="container">
        <div class="row">
            <div class="main_title">
                Портальные, оконные и дверные системы               
            </div>
            <div class="js_slider_production"> 
                <div class="slick-list">
                    <img src="img/slide_cottages/cottades_list_01.jpg" alt="" class="img-responsive">
                </div>
                <div class="slick-list">
                    <img src="img/slide_cottages/cottades_list_02.jpg" alt="" class="img-responsive">
                </div>
                <div class="slick-list">
                    <img src="img/slide_cottages/cottades_list_03.jpg" alt="" class="img-responsive">
                </div>
                <div class="slick-list">
                    <img src="img/slide_cottages/cottades_list_04.jpg" alt="" class="img-responsive">
                </div>
                <div class="slick-list">
                    <img src="img/slide_cottages/cottades_list_05.jpg" alt="" class="img-responsive">
                </div>
                <div class="slick-list">
                    <img src="img/slide_cottages/cottades_list_06.jpg" alt="" class="img-responsive">
                </div>
                <div class="slick-list">
                    <img src="img/slide_cottages/cottades_list_07.jpg" alt="" class="img-responsive">
                </div>
                <div class="slick-list">
                    <img src="img/slide_cottages/cottades_list_08.jpg" alt="" class="img-responsive">
                </div>
                <div class="slick-list">
                    <img src="img/slide_cottages/cottades_list_09.jpg" alt="" class="img-responsive">
                </div>
                <div class="slick-list">
                    <img src="img/slide_cottages/cottades_list_10.jpg" alt="" class="img-responsive">
                </div>
                <div class="slick-list">
                    <img src="img/slide_cottages/cottades_list_11.jpg" alt="" class="img-responsive">
                </div>
                <div class="slick-list">
                    <img src="img/slide_cottages/cottades_list_13.jpg" alt="" class="img-responsive">
                </div>
                <div class="slick-list">
                    <img src="img/slide_cottages/cottades_list_14.jpg" alt="" class="img-responsive">
                </div>
                <div class="slick-list">
                    <img src="img/slide_cottages/cottades_list_16.jpg" alt="" class="img-responsive">
                </div>
                <div class="slick-list">
                    <img src="img/slide_cottages/cottades_list_17.jpg" alt="" class="img-responsive">
                </div>
                <div class="slick-list">
                    <img src="img/slide_cottages/cottades_list_18.jpg" alt="" class="img-responsive">
                </div>
                <div class="slick-list">
                    <img src="img/slide_cottages/cottades_list_19.jpg" alt="" class="img-responsive">
                </div>
                <div class="slick-list">
                    <img src="img/slide_cottages/cottades_list_20.jpg" alt="" class="img-responsive">
                </div>
                <div class="slick-list">
                    <img src="img/slide_cottages/cottades_list_21.jpg" alt="" class="img-responsive">
                </div>
                <div class="slick-list">
                    <img src="img/slide_cottages/cottades_list_22.jpg" alt="" class="img-responsive">
                </div>
                <div class="slick-list">
                    <img src="img/slide_cottages/cottades_list_24.jpg" alt="" class="img-responsive">
                </div>
                <div class="slick-list">
                    <img src="img/slide_cottages/cottades_list_25.jpg" alt="" class="img-responsive">
                </div>
                <div class="slick-list">
                    <img src="img/slide_cottages/cottades_list_26.jpg" alt="" class="img-responsive">
                </div>
                <div class="slick-list">
                    <img src="img/slide_cottages/cottades_list_27.jpg" alt="" class="img-responsive">
                </div>
                <div class="slick-list">
                    <img src="img/slide_cottages/cottades_list_28.jpg" alt="" class="img-responsive">
                </div>
            </div>
        </div>
    </div>
</section>



<section class="" id="service">
    <div class="container">
        <div class="title" style="text-align: center; font-weight: 700;">Почему наш сервис лучший в Украине</div>
        <div class="row">
            <div class="col-md-4 col-xs-12">
                <img src="img/service1.png" alt="">
                <div class="box">
                    <div class="num">5<span class="num_text">лет гарантии</span></div>
                    <div>на наши работы и пожизненное обслуживание</div>
                </div>
            </div>
            <div class="col-md-4 col-xs-12">
                <img src="img/service2.png" alt="">
                <div class="box">
                    <div class="num">11<span class="num_text">лет</span></div>
                    <div>опыта работы</div>
                </div>
            </div>
            <div class="col-md-4 col-xs-12">
                <img src="img/service3.png" alt="">
                <div class="box">
                    <div class="num">2384</div>
                    <div>переоборудованного балкона</div>
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



<script>
function initComparisons() {
  var x, i;
  /*find all elements with an "overlay" class:*/
  x = document.getElementsByClassName("img-comp-overlay");
  for (i = 0; i < x.length; i++) {
    /*once for each "overlay" element:
    pass the "overlay" element as a parameter when executing the compareImages function:*/
    compareImages(x[i]);
  }
  function compareImages(img) {
    var slider, img, clicked = 0, w, h;
    /*get the width and height of the img element*/
    w = img.offsetWidth;
    h = img.offsetHeight;
    /*set the width of the img element to 50%:*/
    img.style.width = (w / 2) + "px";
    /*create slider:*/
    slider = document.createElement("DIV");
    slider.setAttribute("class", "img-comp-slider");
    /*insert slider*/
    img.parentElement.insertBefore(slider, img);
    /*position the slider in the middle:*/
    slider.style.top = (h / 2) - (slider.offsetHeight / 2) + "px";
    slider.style.left = (w / 2) - (slider.offsetWidth / 2) + "px";
    /*execute a function when the mouse button is pressed:*/
    slider.addEventListener("mousedown", slideReady);
    /*and another function when the mouse button is released:*/
    window.addEventListener("mouseup", slideFinish);
    /*or touched (for touch screens:*/
    slider.addEventListener("touchstart", slideReady);
    /*and released (for touch screens:*/
    window.addEventListener("touchstop", slideFinish);
    function slideReady(e) {
      /*prevent any other actions that may occur when moving over the image:*/
      e.preventDefault();
      /*the slider is now clicked and ready to move:*/
      clicked = 1;
      /*execute a function when the slider is moved:*/
      window.addEventListener("mousemove", slideMove);
      window.addEventListener("touchmove", slideMove);
    }
    function slideFinish() {
      /*the slider is no longer clicked:*/
      clicked = 0;
    }
    function slideMove(e) {
      var pos;
      /*if the slider is no longer clicked, exit this function:*/
      if (clicked == 0) return false;
      /*get the cursor's x position:*/
      pos = getCursorPos(e)
      /*prevent the slider from being positioned outside the image:*/
      if (pos < 0) pos = 0;
      if (pos > w) pos = w;
      /*execute a function that will resize the overlay image according to the cursor:*/
      slide(pos);
    }
    function getCursorPos(e) {
      var a, x = 0;
      e = e || window.event;
      /*get the x positions of the image:*/
      a = img.getBoundingClientRect();
      /*calculate the cursor's x coordinate, relative to the image:*/
      x = e.pageX - a.left;
      /*consider any page scrolling:*/
      x = x - window.pageXOffset;
      return x;
    }
    function slide(x) {
      /*resize the image:*/
      img.style.width = x + "px";
      /*position the slider:*/
      slider.style.left = img.offsetWidth - (slider.offsetWidth / 2) + "px";
    }
  }
}
</script>

<script>
/*Execute a function that will execute an image compare function for each element with the img-comp-overlay class:*/
initComparisons();
</script>
<?php include('footer.php'); ?>