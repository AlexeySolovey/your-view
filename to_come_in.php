<?php include('header.php'); ?>

<header class="header">
    <div class="header_bottom_line">
        <div class="container">
            <div class="row">
                <ul class="">
                    <li>
                        <a href="/entrance_doors.php" title="Входные двери" class="">Входные двери</a>
                    </li>

                    <li>
                        <a href="/mezhkomnatnye-dveri" title="Межкомнатные двери" class="">Межкомнатные двери</a>
                    </li>

                    <li>
                        <a href="/balconies.php" title="Балконы" class="">Балконы</a>
                    </li>

                    <li>
                        <a href="/glazing_cottages.php" title="Остекление коттеджей" class="">Остекление коттеджей</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</header>


<div class="content">
    <div class="breadcrumb_wrapp">
        <div class="container">
            <ol class="breadcrumb" itemscope="" itemtype="https://schema.org/BreadcrumbList">
				<li itemprop="itemListElement" itemscope="" itemtype="https://schema.org/ListItem">
					<a itemprop="item" href="/" class="active">
						<span itemprop="name">Главная</span>
					</a>  
				</li>  
				<li itemprop="itemListElement" itemscope="" itemtype="https://schema.org/ListItem" class="active">
					<span itemprop="name">Авторизация</span>
				</li>
			</ol>        
		</div>
    </div>

    <section class="form_client">
        <div class="container">

            <div class="authorization">
                <div class="title">
                    Авторизация
                </div>

                <form class="form-vertical ng-pristine ng-valid" id="yw0" action="/user/auth/index" method="post">
					<div style="display:none">
						<input type="hidden"  name="YII_CSRF_TOKEN">
					</div>
       				<input placeholder="E-mail" name="LoginForm[email]" id="LoginForm_email" type="email">                
       				<input placeholder="Пароль" name="LoginForm[password]" id="LoginForm_password" type="password">
	                <div class="check">
	                    <input type="checkbox" id="a_1" class="checkbox" name="a_1" value="Стать партнером">
	                    <label for="a_1">Стать партнером</label>
	                </div>
	                <div class="text-center">
	                    <button class="button">
	                        <span>
	                            Войти
	                        </span>
	                    </button>
	                </div>
                </form>
            </div>
        </div>
    </section>
</div>



<footer class="footer section_border">
    <div class="container">
        <div class="row">
            <div class="col-sm-4">
                <a href="/index.php"><img src="img/logo_190_67.png" class="img-responsive logo_footer" alt="" data-pagespeed-url-hash="28445216" ></a>
            </div>

            <div class="col-sm-4 footer_class">
                <ul class="footer_list">
                    <li>
                        <a href="/index.php" title="Главная" class="">Главная</a>
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