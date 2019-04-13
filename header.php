<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    
    <link rel="stylesheet" href="css/lib.min.css">
    <link rel="stylesheet" href="css/fonts.css">
    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="css/calculation.css">
    <link rel="stylesheet" href="css/responsive.css">



    <title>Ваш Вид</title>
</head>
<body>
    <header class="header">
        <div class="header_desktop hidden-xs">
            <div class="header_line">
                <div class="container">
                    <div class="row">
                        <div class="header_line_wrapp">

                            <div class="navbar-header">
                                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#nav">
                                    <span class="sr-only">Toggle navigation</span>
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                </button>
                            </div>

                            <div class="collapse navbar-collapse" id="nav">
                                <div class="bot_arrow"></div>
                                
          <ul class="">
                            <li>
                    <a href="/" title="Главная" class="current">Главная</a>
                </li>
                                        <li>
                    <a href="/blog.php" title="Блог" class="">Блог</a>
                </li>
                                        <li>
                    <a href="/page/about" title="О нас" class="">О нас</a>
                </li>
                                        <li>
                    <a href="/installment_plan.php" title="Рассрочка" class="">Рассрочка</a>
                </li>
                                        <li>
                    <a href="/mezhkomnatnye-dveri/page/installation" title="Монтаж" class="">Монтаж</a>
                </li>
                                        <li>
                    <a href="/mezhkomnatnye-dveri/page/delivery" title="Доставка" class="">Доставка</a>
                </li>
                                        <li>
                    <a href="/mezhkomnatnye-dveri/page/service" title="Сервис" class="">Сервис</a>
                </li>
                                        <li>
                    <a href="/salon.php" title="Салон" class="">Салон</a>
                </li>
                                        <li>
                    <a href="/contact.php" title="Контакты" class="">Контакты</a>
                </li>
                    </ul>


                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="header_mid_line hidden-xs">
                <div class="container">
                    <div class="row row_flex">
                        <!--col-lg-3 col-md-2 col-sm-2-->
                        <div class="col-lg-3 col-md-2 col-sm-2">
                            <div class="logo">
                                <a href="/"><img src="img/logo_190_67.png" class="img-responsive" alt="Ваш вид"></a>
                            </div>
                        </div>
                        <!--col-lg-5 col-md-6 col-sm-6 -->
                        <div class="col-lg-5 col-md-6 col-sm-6 phone_header">

                            <div class="phone_header-box">
                                <a href="tel:+380443910475" class="phone ct-phone-044">+38 (044) 391-04-75</a>
                                <a href="tel:+380443910475" class="phone ct-phone-067">+38 (067) 380-11-06</a>
                            </div>
                            <button class="button button_red button_ico" data-toggle="modal" data-target=".modal_call" data-title="Заказать звонок" data-subject="Заказать звонок с сайта межкомнатные двери">
                                <span>
                                    Заказать звонок
                                </span>
                            </button>
                        </div>

                        <div class="col-sm-4 header_cart">
                            
                                                        <a href="/profile/documents" class="button button_border button_ico hidden-sm hidden-xs">
                                    <span>
                                        Войти
                                    </span>
                                </a>
                            
                            <a href="/cart" class="button button_border shopping_cart">
                                <span class="price">
                                    <span class="price_num" ng-if="summ" ng-bind-html="summ"></span>
                                    <span class="price_num" ng-if="!summ">Нет товаров</span>
                                </span>
                                <span class="number" ng-bind="goods_count"></span>
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        <div class="header_mob visible-xs">

            <div class="header_line">
                <div class="container">
                    <div class="row">
                        <div class="header_line_wrapp">

                            <div class="navbar-header">
                                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#nav_mob">
                                    <span class="sr-only">Toggle navigation</span>
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                </button>
                            </div>

                            <div class="collapse navbar-collapse" id="nav_mob">
                                <div class="bot_arrow"></div>
                                <ul>
                                    
         <ul class="">
                            <li>
                    <a href="/" title="Главная" class="current">Главная</a>
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
                    <a href="/mezhkomnatnye-dveri/page/installation" title="Монтаж" class="">Монтаж</a>
                </li>
                                        <li>
                    <a href="/mezhkomnatnye-dveri/page/delivery" title="Доставка" class="">Доставка</a>
                </li>
                                        <li>
                    <a href="/mezhkomnatnye-dveri/page/service" title="Сервис" class="">Сервис</a>
                </li>
                                        <li>
                    <a href="/page/salon" title="Салон" class="">Салон</a>
                </li>
                                        <li>
                    <a href="/page/contacts" title="Контакты" class="">Контакты</a>
                </li>
                    </ul>


                                </ul>
                            </div>

                            <div class="logo">
                                <a href="/"><img src="img/logo_190_67.png.pagespeed.ce.BS15qWulYk.png" class="img-responsive" alt="Ваш вид"></a>
                            </div>

                            <a href="tel:+380443910475" class="phone ct-phone-044">+38 (044) 391-04-75</a>
                            <a href="tel:+380443910475" class="phone ct-phone-067">+38 (067) 380-11-06</a>

                        </div>
                    </div>
                </div>

            </div>

            <div class="header_mid_line">
                <div class="container">
                    <div class="row row_flex">

                        <div class="col-lg-5 col-md-6 col-sm-6 phone_header header_cart">

                            <button class="button button_red button_ico">
                                <span>
                                    Заказать звонок
                                </span>
                            </button>

                                                    <a href="/profile/documents" class="button_user visible-sm visible-xs"></a>

                            <a href="/cart" class="button button_border  shopping_cart">
                                <span class="price">
                                    <span class="price_num" ng-if="summ" ng-bind-html="summ"></span>
                                    <span class="price_num" ng-if="!summ">Нет товаров</span>
                                </span>
                                <span class="number">
                                    {{goods_count}}
                                </span>
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        <div class="header_bottom_line">
            <div class="container">
                <div class="row">
                    
                <ul class="">
                    </ul>


                </div>
            </div>
        </div>
    </header>

