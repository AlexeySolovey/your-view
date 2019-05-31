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

                            <button type="button" class="button send_to_form" >
                                Рассчитать стоимость
                            </button>
                        </div>
                    </form>
                </div>

                <div class="col-sm-12">
                    <div class="anons_block">                      
                        <div class="anons_block_item aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                            <div class="img">
                                <img src="img/sexangle/door_wihte.png" alt="">
                            </div>
                            <div class="text">
                                Экологически <br>
                                чистые материалы                       
                            </div>
                        </div>                 
                        <div class="anons_block_item aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
                            <div class="img">
                                <img src="img/sexangle/point.png" alt="">
                            </div>
                            <div class="text">
                                Сухая древесина <br>
                                (влажность до 8%)                                
                            </div>
                        </div>                  
                        <div class="anons_block_item aos-init aos-animate" data-aos="fade-up" data-aos-delay="500">
                            <div class="img">
                                <img src="img/sexangle/zoom.png" alt="" >
                            </div>
                            <div class="text">
                                Итальянская <br>
                                фурнитура и лаки                                
                            </div>
                        </div>                 
                        <div class="anons_block_item aos-init aos-animate" data-aos="fade-up" data-aos-delay="700">
                            <div class="img">
                                <img src="img/sexangle/card.png" class="img-responsive" alt=""  >
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
                            <div class="js-adv-slider">
                                <div class="">
                                   <img src="img/adv-slide1.jpg" class="img-responsive" alt="">
                                </div>
                                <div class="">
                                   <img src="img/adv-slide2.jpg" class="img-responsive" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <section class="models white_before white_big_after" id="doors">
        <div class="container">
            <div class="row">
                <div class="models_slider">
                    <h2 class="title">Сейчас на складе 637 моделей <br> входных дверей</h2>
                   <!--  <div class="models_note">Цены указаны для стандартного размера 2050* 860, с замками</div> -->
                    <div class="js_slider doors_interroom">
                        <div class="door">
                            <div class="img_wrap">
                                <a href="/dveri/">
                                    <img src="img/doors4/list_homedoor_01.jpg" class="img-responsive" alt="">
                                </a>
                            </div>

                            <div><a href="/dveri/" class="door_model">
                               Модель П-1</a></div>
                        </div>
                        <div class="door">
                            <div class="img_wrap">
                                <a href="/dveri/">
                                    <img src="img/doors4/list_homedoor_02.jpg" class="img-responsive" alt="">
                                </a>
                            </div>

                            <div><a href="/dveri/" class="door_model">
                               Модель П-2</a></div>
                        </div>
                        <div class="door">
                            <div class="img_wrap">
                                <a href="/dveri/">
                                    <img src="img/doors4/list_homedoor_03.jpg" class="img-responsive" alt="">
                                </a>
                            </div>

                            <div><a href="/dveri/" class="door_model">
                               Модель П-3</a></div>
                        </div>
                        <div class="door">
                            <div class="img_wrap">
                                <a href="/dveri/">
                                    <img src="img/doors4/list_homedoor_05.jpg" class="img-responsive" alt="">
                                </a>
                            </div>

                            <div><a href="/dveri/" class="door_model">
                               Модель П-4</a></div>
                        </div>
                        <div class="door">
                            <div class="img_wrap">
                                <a href="/dveri/">
                                    <img src="img/doors4/list_homedoor_06.jpg" class="img-responsive" alt="">
                                </a>
                            </div>

                            <div><a href="/dveri/" class="door_model">
                               Модель П-5</a></div>
                        </div>
                        <div class="door">
                            <div class="img_wrap">
                                <a href="/dveri/">
                                    <img src="img/doors4/list_homedoor_07.jpg" class="img-responsive" alt="">
                                </a>
                            </div>

                            <div><a href="/dveri/" class="door_model">
                               Модель П-6</a></div>
                        </div>
                        <div class="door">
                            <div class="img_wrap">
                                <a href="/dveri/">
                                    <img src="img/doors4/list_homedoor_08.jpg" class="img-responsive" alt="">
                                </a>
                            </div>

                            <div><a href="/dveri/" class="door_model">
                               Модель П-7</a></div>
                        </div>
                        <div class="door">
                            <div class="img_wrap">
                                <a href="/dveri/">
                                    <img src="img/doors4/list_homedoor_09.jpg" class="img-responsive" alt="">
                                </a>
                            </div>

                            <div><a href="/dveri/" class="door_model">
                              Модель П-8</a></div>
                        </div>
                        <div class="door">
                            <div class="img_wrap">
                                <a href="/dveri/">
                                    <img src="img/doors4/list_homedoor_10.jpg" class="img-responsive" alt="">
                                </a>
                            </div>

                            <div><a href="/dveri/" class="door_model">
                               Модель П-9</a></div>
                        </div>
                        <div class="door">
                            <div class="img_wrap">
                                <a href="/dveri/">
                                    <img src="img/doors4/list_homedoor_11.jpg" class="img-responsive" alt="">
                                </a>
                            </div>

                            <div><a href="/dveri/" class="door_model">
                               Модель П-10</a></div>
                        </div>
                        <div class="door">
                            <div class="img_wrap">
                                <a href="/dveri/">
                                    <img src="img/doors4/list_homedoor_12.jpg" class="img-responsive" alt="">
                                </a>
                            </div>

                            <div><a href="/dveri/" class="door_model">
                              Модель П-11</a></div>
                        </div>
                        <div class="door">
                            <div class="img_wrap">
                                <a href="/dveri/">
                                    <img src="img/doors4/list_homedoor_01.jpg" class="img-responsive" alt="">
                                </a>
                            </div>

                            <div><a href="/dveri/" class="door_model">
                               Модель П-12</a></div>
                        </div>
                        <div class="door">
                            <div class="img_wrap">
                                <a href="/dveri/">
                                    <img src="img/doors4/list_homedoor_02.jpg" class="img-responsive" alt="">
                                </a>
                            </div>

                            <div><a href="/dveri/" class="door_model">
                               Модель П-13</a></div>
                        </div>
                        <div class="door">
                            <div class="img_wrap">
                                <a href="/dveri/">
                                    <img src="img/doors4/list_homedoor_03.jpg" class="img-responsive" alt="">
                                </a>
                            </div>

                            <div><a href="/dveri/" class="door_model">
                               Модель П-14</a></div>
                        </div>   
                    </div>

                    <button type="button" class="button button_ico" data-toggle="modal" data-target=".modal_download">
                            <span>
                                Скачать полный каталог
                            </span>
                    </button>
                </div>
            </div>
        </div>
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
                    <div class="order_mk_wrapp_item">
                        <img src="img/zakaz/order_mk_2.jpg" alt="">
                        <div class="name">
                            С 3D фрезеровкой
                        </div>
                        <button class="button get-custom-door" data-toggle="modal" data-target=".make_door" data-subject="
                                Новейшая технология нанесения 3D резьбы одновременно в трёх плоскостях позволяет создавать объёмные модели любых форм и размеров. Двери с 3D фрезеровкой выглядят благородно и изысканно, особенно подходят для классического интерьера.">
                            Подробнее
                        </button>
                    </div>
                    <div class="order_mk_wrapp_item">
                        <img src="img/zakaz/color.jpg" class="img-responsive" alt="">
                        <div class="name">
                            Любого цвета по RAL каталогу
                        </div>
                        <button class="button get-custom-door" data-toggle="modal" data-target=".make_door" data-subject="
                                Специальная технология нанесения двухкомпонентной эмали в несколько этапов позволяет достичь потрясающего эффекта ровной и высококачественной покраски. В каталоге RAL можно подобрать любой цвет из предложенной гаммы.">
                            Подробнее
                        </button>
                    </div>
                    <div class="order_mk_wrapp_item">
                        <img src="img/zakaz/order_mk_4.jpg" alt="">
                        <div class="name">
                            С накладным штапиком
                        </div>
                        <button class="button get-custom-door" data-toggle="modal" data-target=".make_door" data-subject="
                                Двери с накладным штапиком имеют особенный эффект винтажа, так как данный элемент декора придаёт рельефность и объем деревянным конструкциям. Наиболее выигрышно двери выглядят в классическом интерьере, также используются для оформления в стиле кантри.">
                            Подробнее
                        </button>
                    </div>
                    <div class="order_mk_wrapp_item">
                        <img src="img/zakaz/order_mk_5.jpg" alt="">
                        <div class="name">
                            Любой ширины
                        </div>
                        <button class="button get-custom-door" data-toggle="modal" data-target=".make_door" data-subject="
                                Изготавливаем двери любой ширины, что позволяет реализовать все дизайнерские задумки без каких-либо ограничений. Заказав продукцию у нас, вы сможете установить двери в проем нестандартного размера и избавить себя от лишних проблем.">
                            Подробнее
                        </button>
                    </div>
                    <div class="order_mk_wrapp_item">
                        <img src="img/zakaz/order_mk_6.jpg" alt="">
                        <div class="name">
                            1/2/3 створчатые
                        </div>
                        <button class="button get-custom-door" data-toggle="modal" data-target=".make_door" data-subject="
                                В нашем каталоге представлен широкий ассортимент дверей с различным количеством створок. Наиболее выигрышно смотрится интерьер, в котором комбинируются разные варианты дверей, выполненные в едином стиле, но отличающиеся количеством створок.">
                            Подробнее
                        </button>
                    </div>
                    <div class="order_mk_wrapp_item">
                        <img src="img/zakaz/order_mk_7.jpg" alt="" >
                        <div class="name">
                            С фрамугой
                        </div>
                        <button class="button get-custom-door" data-toggle="modal" data-target=".make_door" data-subject="
                                Если у вас в помещении слишком высокий проем, но крупногабаритные двери не входят в ваши планы, можно заказать вариант с фрамугой. Такие двери выглядят по-особому стильно и благородно, красиво смотрятся в ретро-интерьерах.">
                            Подробнее
                        </button>
                    </div>
                    <div class="order_mk_wrapp_item">
                        <img src="img/zakaz/order_mk_8.jpg" class="img-responsive" alt="" >
                        <div class="name">
                            Арочные двери
                        </div>
                        <button class="button get-custom-door" data-toggle="modal" data-target=".make_door" data-subject="
                                Такие двери могут украсить как жилые, так и общественные помещения, бывают трёх-, двух-, одностворчатыми, имеют свой стиль и особенности изготовления. Процесс производства арочных дверей является нестандартным и трудоёмким, но в некоторых случаях данный вариант единственно приемлем.">
                            Подробнее
                        </button>
                    </div>
                    <div class="order_mk_wrapp_item">
                        <img src="img/zakaz/order_mk_9.jpg" class="img-responsive" alt="" >
                        <div class="name">
                            Со стеклопакетом
                        </div>
                        <button class="button get-custom-door" data-toggle="modal" data-target=".make_door" data-subject="
                                Двери со стеклопакетами обычно заказываются для входных конструкций, часто комбинируются с ковкой и другими декоративными элементами. Такие двери не только выглядят красиво и благородно, но и обладают высокой прочностью и хорошими защитными свойствами.">
                            Подробнее
                        </button>
                    </div>
                    <div class="order_mk_wrapp_item">
                        <img src="img/zakaz/order_mk_10.jpg" class="img-responsive" alt="">
                        <div class="name">
                            С витражом или
                            стеклом Тиффани
                        </div>
                        <button class="button get-custom-door" data-toggle="modal" data-target=".make_door" data-subject="
                                Витражные элементы, добавленные в дверные конструкции, придают интерьеру необычный и даже сказочный вид. Солнечный свет, преломляемый витражом, создаёт в помещении красивую цветовую атмосферу и хорошее настроение.">
                            Подробнее
                        </button>
                    </div>
                    <div class="order_mk_wrapp_item">
                        <img src="img/zakaz/order_mk_11.jpg" class="img-responsive" alt="">
                        <div class="name">
                            Двери триплекс
                        </div>
                        <button class="button get-custom-door" data-toggle="modal" data-target=".make_door" data-subject="
                                Используются в современных интерьерах, подчёркивают стиль хай-тек. Основу двери триплекс составляет высокопрочное качественное стекло, на которое с помощью специальных технологий могут наноситься различные узоры.">
                            Подробнее
                        </button>
                    </div>
                    <div class="order_mk_wrapp_item">
                        <img src="img/zakaz/order_mk_12.jpg" class="img-responsive" alt="">
                        <div class="name">
                            С декорированным
                            наличником
                        </div>
                        <button class="button get-custom-door" data-toggle="modal" data-target=".make_door" data-subject="
                                Одна из последних тенденций в мебельном производстве. Двери могут выполняться в стандартном стиле, тогда как основное внимание уделяется оформлению наличников, которые декорируются различными вкраплениями и элементами.">
                            Подробнее
                        </button>
                    </div>
                    <div class="order_mk_wrapp_item">
                        <img src="img/zakaz/order_mk_13.jpg" class="img-responsive" alt="">
                        <div class="name">
                            Порталы
                        </div>
                        <button class="button get-custom-door" data-toggle="modal" data-target=".make_door" data-subject="
                                Красивые деревянные порталы украсят любое межкомнатные пространство. В зависимости от стиля интерьера, бывают как сложными дизайнерскими конструкциями, так и более простыми вариантами. В основном, служат для декоративных целей и зонирования помещений.">
                            Подробнее
                        </button>
                    </div>
                    <div class="order_mk_wrapp_item">
                        <img src="img/zakaz/order_mk_14.jpg" class="img-responsive" alt="">
                        <div class="name">
                            Патинирование /
                            старение
                        </div>
                        <button class="button get-custom-door" data-toggle="modal" data-target=".make_door" data-subject="
                                Во многих стилях интерьера очень органично смотрятся двери с патинированием. С помощью специальных технологий материалам придаётся эффект состаривания, затем двери покрываются защитными составами.">
                            Подробнее
                        </button>
                    </div>
                    <div class="order_mk_wrapp_item">
                        <img src="img/zakaz/order_mk_15.jpg" class="img-responsive" alt="">
                        <div class="name">
                            С порогами
                        </div>
                        <button class="button get-custom-door" data-toggle="modal" data-target=".make_door" data-subject="
                                В большинстве случаев в помещениях устанавливаются двери без порогов, однако для повышения шумоизоляции, защиты от влаги, дыма и других внешних воздействий возможно изготовление и монтаж конструкций с порогами.">
                            Подробнее
                        </button>
                    </div>
                    <div class="order_mk_wrapp_item">
                        <img src="img/zakaz/order_mk_16.jpg" class="img-responsive" alt="">
                        <div class="name">
                            Со скрытым монтажом
                        </div>
                        <button class="button get-custom-door" data-toggle="modal" data-target=".make_door" data-subject="
                                Такие двери особенно популярны в современных интерьерах. За счёт использования специальных алюминиевых коробов при производстве дверей, после установки подобной конструкции дверь становится «невидимкой» и не привлекает к себе внимания.">
                            Подробнее
                        </button>
                    </div>
                    <div class="order_mk_wrapp_item">
                        <img src="img/zakaz/order_mk_17.jpg" class="img-responsive" alt="">
                        <div class="name">
                            Четвертные двери
                        </div>
                        <button class="button get-custom-door" data-toggle="modal" data-target=".make_door" data-subject="
                                Двери с притвором часто используются в классических интерьерах. Технология изготовления четвертных дверей требует дополнительных усилий и времени, что неизбежно влияет на стоимость готовой продукции.">
                            Подробнее
                        </button>
                    </div>
                    <div class="order_mk_wrapp_item">
                        <img src="img/zakaz/order_mk_18.jpg" class="img-responsive" alt="">
                        <div class="name">
                            Матовые или глянцевые
                        </div>
                        <button class="button get-custom-door" data-toggle="modal" data-target=".make_door" data-subject="
                                Двери с глянцевым покрытием красиво смотрятся в ярких современных интерьерах, в сочетании с металлическими декоративными элементами. Если вы являетесь приверженцем классики, рекомендуется использовать стандартные матовые варианты.">
                            Подробнее
                        </button>
                    </div>
                    <div class="order_mk_wrapp_item">
                        <img src="img/zakaz/order_mk_19.jpg" class="img-responsive" alt="">
                        <div class="name">
                            С художественной
                            росписью
                        </div>
                        <button class="button get-custom-door" data-toggle="modal" data-target=".make_door" data-subject="
                                Расписные двери могут по достоинству оценить только ценители искусства и высокого стиля. При этом многое зависит от вида художественной росписи, которая должна быть выполнена со вкусом и безупречным качеством.">
                            Подробнее
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="models white_before white_big_after" id="doors">
        <div class="container">
            <div class="row">
                <div class="models_slider">
                    <h2 class="title">За 9 лет работы более 3000<br> удачно реализованных проектов</h2>
                    <div class="models_note">Цены указаны для стандартного размера 2050* 860, с замками</div>
                    <div class="js_slider doors_interroom_02">
                        <div class="door">
                            <div class="img_wrap">
                                <a href="/dveri/">
                                    <img src="img/doors3/doors_list_01.jpg" class="img-responsive" alt="">
                                </a>
                            </div>

                            <div><a href="/dveri/" class="door_model" style="color: #6666ff;">
                               Двери в стиле модерн </a></div>
                        </div>
                        <div class="door">
                            <div class="img_wrap">
                                <a href="/dveri/">
                                    <img src="img/doors3/doors_list_02.jpg" class="img-responsive" alt="">
                                </a>
                            </div>

                            <div><a href="/dveri/" class="door_model" style="color: #6666ff;">
                               Белая деревянная раздвижная дверь</a></div>
                        </div>
                        <div class="door">
                            <div class="img_wrap">
                                <a href="/dveri/">
                                    <img src="img/doors3/doors_list_03.jpg" class="img-responsive" alt="">
                                </a>
                            </div>

                            <div><a href="/dveri/" class="door_model" style="color: #6666ff;">
                                Светлая деревянная дверь со стеклом</a></div>
                        </div>
                        <div class="door">
                            <div class="img_wrap">
                                <a href="/dveri/">
                                    <img src="img/doors3/doors_list_04.jpg" class="img-responsive" alt="">
                                </a>
                            </div>

                            <div><a href="/dveri/" class="door_model" style="color: #6666ff;">
                               Белая дверь в классическом стиле с резным наличником </a></div>
                        </div>
                        <div class="door">
                            <div class="img_wrap">
                                <a href="/dveri/">
                                    <img src="img/doors3/doors_list_05.jpg" class="img-responsive" alt="">
                                </a>
                            </div>

                            <div><a href="/dveri/" class="door_model" style="color: #6666ff;">
                                Белые двери в стиле модерн </a></div>
                        </div>
                        <div class="door">
                            <div class="img_wrap">
                                <a href="/dveri/">
                                    <img src="img/doors3/doors_list_06.jpg" class="img-responsive" alt="">
                                </a>
                            </div>

                            <div><a href="/dveri/" class="door_model" style="color: #6666ff;">
                                 Белая дверь раздвижная </a></div>
                        </div>
                        <div class="door">
                            <div class="img_wrap">
                                <a href="/dveri/">
                                    <img src="img/doors3/doors_list_07.jpg" class="img-responsive" alt="">
                                </a>
                            </div>

                            <div><a href="/dveri/" class="door_model" style="color: #6666ff;">
                               Межкомнатная перегородка раздвижная</a></div>
                        </div>
                        <div class="door">
                            <div class="img_wrap">
                                <a href="/dveri/">
                                    <img src="img/doors3/doors_list_08.jpg" class="img-responsive" alt="">
                                </a>
                            </div>

                            <div><a href="/dveri/" class="door_model" style="color: #6666ff;">
                             Светлые двери в стиле прованс</a></div>
                        </div>
                        <div class="door">
                            <div class="img_wrap">
                                <a href="/dveri/">
                                    <img src="img/doors3/doors_list_09.jpg" class="img-responsive" alt="">
                                </a>
                            </div>

                            <div><a href="/dveri/" class="door_model" style="color: #6666ff;">
                                Белые двери в классическом стиле с резьбой</a></div>
                        </div>
                        <div class="door">
                            <div class="img_wrap">
                                <a href="/dveri/">
                                    <img src="img/doors3/doors_list_11.jpg" class="img-responsive" alt="">
                                </a>
                            </div>

                            <div><a href="/dveri/" class="door_model" style="color: #6666ff;">
                                Белые деревянные двери без стекла</a></div>
                        </div>
                        <div class="door">
                            <div class="img_wrap">
                                <a href="/dveri/">
                                    <img src="img/doors3/doors_list_12.jpg" class="img-responsive" alt="">
                                </a>
                            </div>

                            <div><a href="/dveri/" class="door_model" style="color: #6666ff;">
                               Двери в классическом стиле</a></div>
                        </div>
                        <div class="door">
                            <div class="img_wrap">
                                <a href="/dveri/">
                                    <img src="img/doors3/doors_list_14.jpg" class="img-responsive" alt="">
                                </a>
                            </div>

                            <div><a href="/dveri/" class="door_model" style="color: #6666ff;">
                              Белая дверь раздвижная</a></div>
                        </div>
                        <div class="door">
                            <div class="img_wrap">
                                <a href="/dveri/">
                                    <img src="img/doors3/doors_list_01.jpg" class="img-responsive" alt="">
                                </a>
                            </div>

                            <div><a href="/dveri/" class="door_model" style="color: #6666ff;">
                               Двери в классическом стиле</a></div>
                        </div>
                        <div class="door">
                            <div class="img_wrap">
                                <a href="/dveri/">
                                    <img src="img/doors3/doors_list_02.jpg" class="img-responsive" alt="">
                                </a>
                            </div>

                            <div><a href="/dveri/" class="door_model" style="color: #6666ff;">
                               Белая дверь раздвижная</a></div>
                        </div>   
                    </div>

                    <button type="button" class="button button_ico" data-toggle="modal" data-target=".modal_download">
                        <span>
                            Скачать полный каталог
                        </span>
                    </button>
                </div>
            </div>
        </div>
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
                    <div class="col-md-5 best_block" style="background-color: #f33237;">
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
                    <div class="col-md-5 best_block" style="background-color: #f33237;">
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

    <section class="service service_mk_wrapp">

        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <div class="main_title">
                        При производстве дверей используем <br>
                        исключительно экологически чистые материалы                
                    </div>
                </div>
            </div>
        </div>

                    
    <!--            -->
        <div class="full_width_item full_width_item_left aos-init aos-animate" data-aos="fade-up" style="background-image: url(img/75920.png)">
            <div class="container">
                <div class="row">

                    <img src="img/75920.png" class="img-responsive visible-xs" alt="">

                    <div class="col-sm-6 full_width_box col-sm-offset-6">
                        <div class="title" style="margin: 35px 0px 35px 0px;">
                            Натуральное дерево                            
                        </div>
                        <div class="desc">
                            <p>
                                Наши двери производятся из дерева, заготовленного в экологически чистых районах Украины. Двери и комплектующие имеют все необходимые сертификаты качества и безопасны для применения в жилых помещениях.                                
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        <div class="full_width_item full_width_item_right aos-init" data-aos="fade-up" style="background-image: url(img/cffb.png)">
            <div class="container">
                <div class="row">
                    <img src="img/cffb.png" class="img-responsive visible-xs" alt="">
                    <div class="col-sm-6 full_width_box ">
                        <div class="title" style="margin: 35px 0px 35px 0px;">
                            Итальянский лак
                        </div>
                        <div class="desc">
                            <p>
                                Все двери покрыты грунтом, вскрыты в три слоя качественным итальянским лаком на водной основе. За счет твердости лака двери обладают высокой прочностью, не боятся ударов, сколов, царапин, устойчивы к температурным изменениям и имеют исключительный внешний вид.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div class="full_width_item full_width_item_left aos-init" data-aos="fade-up" style="background-image: url(img/daace.png)">
            <div class="container">
                <div class="row">

                    <img src="img/daace.png" class="img-responsive visible-xs" alt="">

                    <div class="col-sm-6 full_width_box col-sm-offset-6">
                        <div class="title" style="margin: 35px 0px 35px 0px;">
                            Только качественная фурнитура
                        </div>
                        <div class="desc">
                            <p>
                                Мы используем механизмы и скрытые петли AGB (Италия), ручки Colombo (Италия). Врезка фурнитуры происходит в заводских условиях. Срок эксплуатации такой фурнитуры - 10 лет.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <section class="can_also">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <div class="main_title">У нас Вы также можете заказать</div>
                </div>
                <div class="col-sm-3 col-xs-6">
                    <div class="can_also_item">
                        <div class="img">
                            <img src="img/can_also.png" class="img-responsive" alt="">
                        </div>
                        <div class="title">
                            Порталы
                        </div>
                    </div>
                </div>
                <div class="col-sm-3 col-xs-6">
                    <div class="can_also_item">
                        <div class="img">
                            <img src="img/can_also_2.png" class="img-responsive" alt="" >
                        </div>
                        <div class="title">
                            Плинтусы
                        </div>
                    </div>
                </div>
                <div class="col-sm-3 col-xs-6">
                    <div class="can_also_item">
                        <div class="img">
                            <img src="img/can_also_3.png" class="img-responsive" alt="" >
                        </div>
                        <div class="title">
                            Наличники
                        </div>
                    </div>
                </div>
                <div class="col-sm-3 col-xs-6">
                    <div class="can_also_item">
                        <div class="img">
                            <img src="img/can_also_4.png" class="img-responsive" alt="" >
                        </div>
                        <div class="title">
                            Накладки на входные двери
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


<section class="produced_mk">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="main_title">
                    Все двери производятся на современном австрийском оборудовании в Украине
                </div>
            </div>
            <div class="col-sm-12">
                <div class="video hidden">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/E4JhvzPEq0M" frameborder="0" allowfullscreen=""></iframe>
                </div>
                <div class="video">
                    <img alt="" src="img/lol.jpg" style="max-width: 100%;">
                </div>

                <div class="produced_mk_wrapp clearfix">
                    <div class="col-sm-4">
                        <img src="img/zav.jpg" class="img-responsive" alt="">
                        <div class="produced_mk_item item_1">
                            <div class="title">
                                Высокие производственные мощности
                            </div>
                            <div class="desc">
                                Мы располагаем собственным производством, с современным высокотехнологичным оборудованием
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <img src="img/zav02.jpg" class="img-responsive" alt="">
                        <div class="produced_mk_item item_2">
                            <div class="title">
                                Оборудование с мировым именем
                            </div>
                            <div class="desc">
                                Вся мебель производится на австрийском оборудовании FELDER-GROUP, которое известно во всём мире и зарекомендовало себя как надёжного производителя качественной продукции                            
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <img src="img/zav03.jpg" class="img-responsive" alt="">
                        <div class="produced_mk_item item_3">
                            <div class="title">
                                Команда профессионалов                            
                            </div>
                            <div class="desc">
                                В нашем штате работает 57 столяров с большим опытом работы и высоким уровнем профессионализма. Все сотрудники обладают достаточной квалификацией                            
                            </div>
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


<section class="service_mk service_mk_new" style="background-image: url('../img/6d.jpg');">
    <div class="container">
        <div class="row">
            <div class="col-sm-6 col-xs-12">
                <div class="title">
                    Даем гарантию 1,5 года и бессрочное обслуживание                
                </div>
                <p>
                    Мы единственные, кто дает 1,5 года гарантии на все работы.<br>
                    <br>
                    И даже после ее окончания наш сервисный центр будет следить за состоянием ваших дверей. Один звонок, и через пару часов наш мастер будет у вас.
                </p>
            </div>
            <div class="col-sm-6 col-xs-12">
                <img class="img-responsive pull-right service_mk_image" alt="" src="img/pag.png">
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


</div>








<div class="modal make_door fade" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
        <button class="modal_close" data-dismiss="modal" type="button"></button>
        <div class="row">
            <div class="col-sm-6 col-xs-12">
                <div class="modal_text">
                    <div class="modal_title">Создайте свою идеальную дверь</div>
                    <div class="inner" id="new_style_make_door">
                        
                    </div>
                    <div class="text-center">
                        <b>Специалисты компании ВашВид с радостью проконсультируют и сориентируют Вас в стоимости. </b>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 col-xs-12 border">
                <div class="modal_title">Закажите консультацию специалиста </div>

                <div class="form-vertical" id='form-price'>
                    <input value="1" name="type" type="hidden">        
                    <input value="Дверь на заказ с сайта межкомнатные двери" name="Feedbacks" type="hidden">        
                    <input required="required" placeholder="Имя" maxlength="100" class="form_input" name="fName" type="text"> 
                    <input required="required" placeholder="Телефон" class="form_input js_mask" name="phone" type="text">        
                    <button class="button send-mess" data-form="form-price">
                        <span>Сохранить</span>
                    </button>
                </div> 

                <div class="modal_note">Ваши персональные данные не будут опубликованы
                    или переданы третьим лицам.</div>
            </div>
        </div>
    </div>
</div>


<div class="modal modal_main modal_download fade" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
        <button class="modal_close" data-dismiss="modal" type="button"></button>
        <div class="modal_wrapp">
            <div class="download_img">
                <img class="img-responsive" alt="" src="/img/modal_mk.png">
            </div>

            <div class="download_form">
                <div class="js_title title" >Скачать полный каталог</div>
                <div class="js_desc desc">
                    Оставьте ваши контакты, и наш менеджер
                    свяжется с вами в ближайшее время.
                </div>

                <div class="form-vertical" id='form-katalog'>
                    <input value="1" name="type" type="hidden">        
                    <input value="Скачать полный каталог с сайта межкомнатные двери" name="Feedbacks" type="hidden">        
                    <input required="required" placeholder="Имя" maxlength="100" class="form_input" name="fName" type="text"> 
                    <input required="required" placeholder="Телефон" class="form_input js_mask" name="phone" type="text">        
                    <button class="button send-mess" data-form="form-katalog">
                        <span>Скачать каталог</span>
                    </button>
                </div>

                <div class="modal_note">Ваши персональные данные не будут опубликованы
                    или переданы третьим лицам.</div>
            </div>
        </div>

    </div>
</div>



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


<?php include('footer.php'); ?>