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
                    Новейшая технология нанесения 3D резьбы одновременно в трёх плоскостях позволяет создавать объёмные модели любых форм и размеров. Двери с 3D фрезеровкой выглядят благородно и изысканно, особенно подходят для классического интерьера.                           "-->
                    <!--                        >-->
                    <!--                            Подробнее-->
                    <!--                        </button>-->
                    <!--                    </div>-->
                    <div class="order_mk_wrapp_item">
                        <img src="img/zakaz/order_mk_2.jpg" alt="">
                        <div class="name">
                            С 3D фрезеровкой
                        </div>
                        <button class="button get-custom-door" data-toggle="modal" data-target=".make_door">
                            Подробнее
                        </button>
                    </div>
                    <div class="order_mk_wrapp_item">
                        <img src="img/zakaz/color.jpg" class="img-responsive" alt="">
                        <div class="name">
                            Любого цвета по
                            RAL каталогу
                        </div>
                        <button class="button get-custom-door" data-toggle="modal">
                            Подробнее
                        </button>
                    </div>
                    <div class="order_mk_wrapp_item">
                        <img src="img/zakaz/order_mk_4.jpg" alt="">
                        <div class="name">
                            С накладным штапиком
                        </div>
                        <button class="button get-custom-door" data-toggle="modal">
                            Подробнее
                        </button>
                    </div>
                    <div class="order_mk_wrapp_item">
                        <img src="img/zakaz/order_mk_5.jpg" alt="">
                        <div class="name">
                            Любой ширины
                        </div>
                        <button class="button get-custom-door" data-toggle="modal">
                            Подробнее
                        </button>
                    </div>
                    <div class="order_mk_wrapp_item">
                        <img src="img/zakaz/order_mk_6.jpg" alt="">
                        <div class="name">
                            1/2/3 створчатые
                        </div>
                        <button class="button get-custom-door" data-toggle="modal">
                            Подробнее
                        </button>
                    </div>
                    <div class="order_mk_wrapp_item">
                        <img src="img/zakaz/order_mk_7.jpg" alt="" >
                        <div class="name">
                            С фрамугой
                        </div>
                        <button class="button get-custom-door" data-toggle="modal">
                            Подробнее
                        </button>
                    </div>
                    <div class="order_mk_wrapp_item">
                        <img src="img/zakaz/order_mk_8.jpg" class="img-responsive" alt="" >
                        <div class="name">
                            Арочные двери
                        </div>
                        <button class="button get-custom-door" data-toggle="modal">
                            Подробнее
                        </button>
                    </div>
                    <div class="order_mk_wrapp_item">
                        <img src="img/zakaz/order_mk_9.jpg" class="img-responsive" alt="" >
                        <div class="name">
                            Со стеклопакетом
                        </div>
                        <button class="button get-custom-door" data-toggle="modal">
                            Подробнее
                        </button>
                    </div>
                    <div class="order_mk_wrapp_item">
                        <img src="img/zakaz/order_mk_10.jpg" class="img-responsive" alt="">
                        <div class="name">
                            С витражом или
                            стеклом Тиффани
                        </div>
                        <button class="button get-custom-door" data-toggle="modal" >
                            Подробнее
                        </button>
                    </div>
                    <div class="order_mk_wrapp_item">
                        <img src="img/zakaz/order_mk_11.jpg" class="img-responsive" alt="">
                        <div class="name">
                            Двери триплекс
                        </div>
                        <button class="button get-custom-door" data-toggle="modal">
                            Подробнее
                        </button>
                    </div>
                    <div class="order_mk_wrapp_item">
                        <img src="img/zakaz/order_mk_12.jpg" class="img-responsive" alt="">
                        <div class="name">
                            С декорированным
                            наличником
                        </div>
                        <button class="button get-custom-door" data-toggle="modal">
                            Подробнее
                        </button>
                    </div>
                    <div class="order_mk_wrapp_item">
                        <img src="img/zakaz/order_mk_13.jpg" class="img-responsive" alt="">
                        <div class="name">
                            Порталы
                        </div>
                        <button class="button get-custom-door" data-toggle="modal">
                            Подробнее
                        </button>
                    </div>
                    <div class="order_mk_wrapp_item">
                        <img src="img/zakaz/order_mk_14.jpg" class="img-responsive" alt="">
                        <div class="name">
                            Патинирование /
                            старение
                        </div>
                        <button class="button get-custom-door" data-toggle="modal">
                            Подробнее
                        </button>
                    </div>
                    <div class="order_mk_wrapp_item">
                        <img src="img/zakaz/order_mk_15.jpg" class="img-responsive" alt="">
                        <div class="name">
                            С порогами
                        </div>
                        <button class="button get-custom-door" data-toggle="modal">
                            Подробнее
                        </button>
                    </div>
                    <div class="order_mk_wrapp_item">
                        <img src="img/zakaz/order_mk_16.jpg" class="img-responsive" alt="">
                        <div class="name">
                            Со скрытым монтажом
                        </div>
                        <button class="button get-custom-door" data-toggle="modal">
                            Подробнее
                        </button>
                    </div>
                    <div class="order_mk_wrapp_item">
                        <img src="img/zakaz/order_mk_17.jpg" class="img-responsive" alt="">
                        <div class="name">
                            Четвертные двери
                        </div>
                        <button class="button get-custom-door" data-toggle="modal">
                            Подробнее
                        </button>
                    </div>
                    <div class="order_mk_wrapp_item">
                        <img src="img/zakaz/order_mk_18.jpg" class="img-responsive" alt="">
                        <div class="name">
                            Матовые или глянцевые
                        </div>
                        <button class="button get-custom-door" data-toggle="modal">
                            Подробнее
                        </button>
                    </div>
                    <div class="order_mk_wrapp_item">
                        <img src="img/zakaz/order_mk_19.jpg" class="img-responsive" alt="">
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
                        <div class="title">
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

                        
    <!--            -->
        <div class="full_width_item full_width_item_right aos-init" data-aos="fade-up" style="background-image: url(img/cffb.png)">
            <div class="container">
                <div class="row">

                    <img src="img/cffb.png" class="img-responsive visible-xs" alt="">

                    <div class="col-sm-6 full_width_box ">
                        <div class="title">
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

                        
    <!--            -->
        <div class="full_width_item full_width_item_left aos-init" data-aos="fade-up" style="background-image: url(img/daace.png)">
            <div class="container">
                <div class="row">

                    <img src="img/daace.png" class="img-responsive visible-xs" alt="">

                    <div class="col-sm-6 full_width_box col-sm-offset-6">
                        <div class="title">
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


</div>








<?php include('footer.php'); ?>