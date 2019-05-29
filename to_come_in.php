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
                        <a href="/vhodnie-dveri.php" title="Межкомнатные двери" class="">Межкомнатные двери</a>
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





<?php include('footer.php'); ?>