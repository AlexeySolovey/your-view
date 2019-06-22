<?php
/**
 * After Container template.
 *
 * @package OceanWP WordPress theme
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
} ?>

			</article><!-- #post -->

			<?php do_action( 'ocean_after_content_inner' ); ?>

		</div><!-- #content -->

		<?php do_action( 'ocean_after_content' ); ?>

	</div><!-- #primary -->

	<?php do_action( 'ocean_after_primary' ); ?>

</div><!-- #content-wrap -->

<?php do_action( 'ocean_after_content_wrap' ); ?>



<!-- модальное окно для хедера и футера "заказать звонок -->

<div class="modal modal_main modal_call fade in">
    <div class="modal-dialog" role="document">
        <button class="modal_close" type="button" data-dismiss="modal" aria-hidden="true"></button>
        <div class="js_title title">Заказать звонок</div>
        <div class="js_desc desc">
            Оставьте ваши контакты, и наш менеджер свяжется
            с вами в ближайшее время
        </div>

        <div class="form-vertical" id='form-feedback'>
            <input value="1" name="type" type="hidden">        
            <input value="Заказать звонок со страницы Входные двери" name="Feedbacks" type="hidden">        
            <input required="required" placeholder="Имя" maxlength="100" class="form_input" name="fName" type="text"> 
            <input required="required" placeholder="Телефон" class="form_input js_mask" name="phone" type="text">        
            <button class="button send-mess" data-form="form-feedback">
                <span>Сохранить</span>
            </button>
        </div> 
        <div class="modal_note">
            Ваши персональные данные не будут опубликованы
            или переданы третьим лицам.
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



<!--NEXTEL - Коллтрекинг и виджеты Балконы-->
<script async src="https://cstat.nextel.com.ua:8443/tracking/script/24/59"></script>
<script
  src="https://code.jquery.com/jquery-3.4.0.min.js"
  integrity="sha256-BJeo0qm959uMBGb65z40ejJYGSgR7REI4+CW1fNKwOg="
  crossorigin="anonymous"></script>
<script src="/wp-content/themes/oceanwpchild/js/libs.js"></script>
<script src="/wp-content/themes/oceanwpchild/js/woocom-js.js"></script>