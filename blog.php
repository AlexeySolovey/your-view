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
	<?php include('pagination.php'); ?>
 

	<section class="blog">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <div class="main_title">
                        Блог
                    </div>
                </div>

                <div class="navbar-header">
                    <button type="button" class="navbar-toggle filter_toogle" data-toggle="collapse" data-target="#filter">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <p>Фильтр</p>
                    </button>
                </div>

                <div class="col-md-3 col-sm-4 filter">
                    <div class="collapse navbar-collapse" id="filter">
                        <div class="catalog_filter_item">
                            <div class="title">
                                Рубрики:
                            </div>
                            <form action="" class="filter_form ng-pristine ng-valid">
                                <div class="check">
									<input type="checkbox" id="b1_1" class="checkbox" name="b1_1" value="1">

                                    <label for="b1_1">
                                        Межкомнатные двери
                                    </label>
                                    <input type="checkbox" id="b1_2" class="checkbox" name="b1_2" value="2">
                                    <label for="b1_2">
                                        Входные двери
                                    </label>
                                    <input type="checkbox" id="b1_3" class="checkbox" name="b1_3" value="3">
                                    <label for="b1_3">
                                        Фурнитура
                                    </label>
                                    <button class="button" id="all_categories"><span>Все</span></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div class="col-md-9 col-sm-8 blog_item_wrapp">
                    <div class="col-md-6 blog_item aos-init aos-animate">
                        <div class="img">
                            <a href="/article.php">
                                <img src="img/blog/blog_01.png" class="img-responsive" alt="">
                            </a>
                        </div>
                        <div class="date">05/07/2018</div>
                        <div class="content_blog">
                            <div class="title">
                                <a href="/article.php">
                                    Какой должна быть толщина металла входной двери?                                        
                                </a>
                            </div>
                            <div class="desc">
                                Если вы решили купить входную дверь из металла, то вполне очевидно, что безопасность конструкции для вас является одним из приоритетов. Модели, изготовленные из стального листа, хорошо противостоят и силовым воздействиям, и попыткам взлома замков.                                    
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6 blog_item aos-init aos-animate">
                        <div class="img">
                            <a href="/article.php">
                                <img src="img/blog/blog_02.jpg" class="img-responsive" alt="">
                            </a>
                        </div>
                        <div class="date">05/07/2018</div>
                        <div class="content_blog">
                            <div class="title">
                                <a href="/article.php">
                                    Что нужно знать о расширении дверного проема?                                        
                                </a>
                            </div>
                            <div class="desc">
                                Если вы решили купить входную дверь из металла, то вполне очевидно, что безопасность конструкции для вас является одним из приоритетов. Модели, изготовленные из стального листа, хорошо противостоят и силовым воздействиям, и попыткам взлома замков.                                    
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 blog_item aos-init aos-animate" data-aos="fade-up">
                        <div class="img">
                            <a href="/article.php">
                                <img src="img/blog/blog_03.jpg" class="img-responsive" alt="">
                            </a>
                        </div>
                        <div class="date">05/07/2018</div>
                        <div class="content_blog">
                            <div class="title">
                                <a href="/article.php">
                                    Какое наполнение металлической двери лучше?                                       
                                </a>
                            </div>
                            <div class="desc">
                                Если вы решили купить входную дверь из металла, то вполне очевидно, что безопасность конструкции для вас является одним из приоритетов. Модели, изготовленные из стального листа, хорошо противостоят и силовым воздействиям, и попыткам взлома замков.                                    
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 blog_item aos-init aos-animate" data-aos="fade-up">
                        <div class="img">
                            <a href="/article.php">
                                <img src="img/blog/blog_04.jpg" class="img-responsive" alt="">
                            </a>
                        </div>
                        <div class="date">05/07/2018</div>
                        <div class="content_blog">
                            <div class="title">
                                <a href="/article.php">
                                   Стоит ли экономить на установке дверей?                                       
                                </a>
                            </div>
                            <div class="desc">
                                Если вы решили купить входную дверь из металла, то вполне очевидно, что безопасность конструкции для вас является одним из приоритетов. Модели, изготовленные из стального листа, хорошо противостоят и силовым воздействиям, и попыткам взлома замков.                                    
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 blog_item aos-init aos-animate" data-aos="fade-up">
                        <div class="img">
                            <a href="/article.php">
                                <img src="img/blog/blog_05.jpg" class="img-responsive" alt="">
                            </a>
                        </div>
                        <div class="date">05/07/2018</div>
                        <div class="content_blog">
                            <div class="title">
                                <a href="/article.php">
                                    Немного о дверных ручках                                        
                                </a>
                            </div>
                            <div class="desc">
                                Если вы решили купить входную дверь из металла, то вполне очевидно, что безопасность конструкции для вас является одним из приоритетов. Модели, изготовленные из стального листа, хорошо противостоят и силовым воздействиям, и попыткам взлома замков.                                    
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 blog_item aos-init aos-animate" data-aos="fade-up">
                        <div class="img">
                            <a href="/article.php">
                                <img src="img/blog/blog_06.jpg" class="img-responsive" alt="">
                            </a>
                        </div>
                        <div class="date">05/07/2018</div>
                        <div class="content_blog">
                            <div class="title">
                                <a href="/article.php">
                                    Как заменить цилиндр (личинку) врезного замка двери?                                        
                                </a>
                            </div>
                            <div class="desc">
                                Если вы решили купить входную дверь из металла, то вполне очевидно, что безопасность конструкции для вас является одним из приоритетов. Модели, изготовленные из стального листа, хорошо противостоят и силовым воздействиям, и попыткам взлома замков.                                    
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 blog_item aos-init aos-animate" data-aos="fade-up">
                        <div class="img">
                            <a href="/article.php">
                                <img src="img/blog/blog_07.jpg" class="img-responsive" alt="">
                            </a>
                        </div>
                        <div class="date">05/07/2018</div>
                        <div class="content_blog">
                            <div class="title">
                                <a href="/article.php">
                                    Власти установили памятник вандалам - вандалы в растерянности                                        
                                </a>
                            </div>
                            <div class="desc">
                                Если вы решили купить входную дверь из металла, то вполне очевидно, что безопасность конструкции для вас является одним из приоритетов. Модели, изготовленные из стального листа, хорошо противостоят и силовым воздействиям, и попыткам взлома замков.                                    
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 blog_item aos-init aos-animate" data-aos="fade-up">
                        <div class="img">
                            <a href="/article.php">
                                <img src="img/blog/blog_08.png" class="img-responsive" alt="">
                            </a>
                        </div>
                        <div class="date">05/07/2018</div>
                        <div class="content_blog">
                            <div class="title">
                                <a href="/article.php">
                                    Важные свойства входных дверей                                        
                                </a>
                            </div>
                            <div class="desc">
                                Если вы решили купить входную дверь из металла, то вполне очевидно, что безопасность конструкции для вас является одним из приоритетов. Модели, изготовленные из стального листа, хорошо противостоят и силовым воздействиям, и попыткам взлома замков.                                    
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6 blog_item aos-init aos-animate" data-aos="fade-up">
                        <div class="img">
                            <a href="/article.php">
                                <img src="img/blog/blog_09.jpg" class="img-responsive" alt="">
                            </a>
                        </div>
                        <div class="date">05/07/2018</div>
                        <div class="content_blog">
                            <div class="title">
                                <a href="/article.php">
                                    Кролики это не только ценный мех, а входная дверь это не только защита от взлома                                        
                                </a>
                            </div>
                            <div class="desc">
                                Если вы решили купить входную дверь из металла, то вполне очевидно, что безопасность конструкции для вас является одним из приоритетов. Модели, изготовленные из стального листа, хорошо противостоят и силовым воздействиям, и попыткам взлома замков.                                    
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6 blog_item aos-init aos-animate" data-aos="fade-up">
                        <div class="img">
                            <a href="/article.php">
                                <img src="img/blog/blog_10.jpg" class="img-responsive" alt="">
                            </a>
                        </div>
                        <div class="date">05/07/2018</div>
                        <div class="content_blog">
                            <div class="title">
                                <a href="/article.php">
                                   Как усложнить жизнь взломщику - комбинируем разные типы замков                                        
                                </a>
                            </div>
                            <div class="desc">
                                Если вы решили купить входную дверь из металла, то вполне очевидно, что безопасность конструкции для вас является одним из приоритетов. Модели, изготовленные из стального листа, хорошо противостоят и силовым воздействиям, и попыткам взлома замков.                                    
                            </div>
                        </div>
                    </div>
                    
                        


             
                    <div class="col-sm-12 text-center">
                        <ul class="pagination" id=""><li class="hidden hidden"><a href="/blog">&lt;&lt; Первая</a></li>
							<li class="prev hidden"><a href="/blog"><span></span></a></li>
							<li class=" active"><a href="/blog">1</a></li>
							<li class=""><a href="/blog02.php">2</a></li>
							<li class="next"><a href="/blog02.php"><span></span></a></li>
							<li class="hidden"><a href="/blog02.php">Последняя &gt;&gt;</a></li>
						</ul>                    
					</div>
                </div>
            </div>
        </div>
    </section>
</div>





<?php include('footer.php'); ?>