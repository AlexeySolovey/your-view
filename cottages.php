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
                        <button type="button" class="button send_to_form" >Рассчитатьстоимость</button>
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



<section style="background: #ddd; margin:50px 0px 50px 0px; text-align: center;">
    <h1>ТУТ БУДЕТ СЛАЙДЕР</h1>
</section>


<section>
    <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <div class="title default_title">
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
                <img class="img-responsive" alt="" src="img/sertficat.jpg" >
            </div>
        </div>
    </div>
</section>


<section style="background: #ddd; margin:50px 0px 50px 0px; text-align: center;">
    <h1>ТУТ БУДЕТ СЛАЙДЕР</h1>
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