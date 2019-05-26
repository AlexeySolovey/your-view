<?php
/**
 * Product attributes
 *
 * Used by list_attributes() in the products class.
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/single-product/product-attributes.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce/Templates
 * @version 3.6.0
 */

defined( 'ABSPATH' ) || exit;

if ( ! $product_attributes ) {
	return;
}
?>
<!-- <table class="woocommerce-product-attributes shop_attributes">
	<?php foreach ( $product_attributes as $product_attribute_key => $product_attribute ) : ?>
		<tr class="woocommerce-product-attributes-item woocommerce-product-attributes-item--<?php echo esc_attr( $product_attribute_key ); ?>">
			<th class="woocommerce-product-attributes-item__label"><?php echo wp_kses_post( $product_attribute['label'] ); ?></th>
			<td class="woocommerce-product-attributes-item__value"><?php echo wp_kses_post( $product_attribute['value'] ); ?></td>
		</tr>
	<?php endforeach; ?>
</table> -->
<section class="characteristic">
    <div class="container">
        <div class="row">
            <div class="characteristic_wrapp clearfix" style="border: none;">
                <div class="main_title" id="characteristic">
                    Характеристики
                </div>

               <div>
                   <div class="characteristic_item aos-init" data-aos="fade-up">
                      <div class="title">
                          Производство:                        
                      </div>
                      <div class="desc">
                          Украина                        
                      </div>
                  </div>
	               <?php foreach ( $product_attributes as $product_attribute_key => $product_attribute ) : ?>
                       <div class="characteristic_item aos-init" data-aos="fade-up">
                           <div class="title">
                               <?php echo wp_kses_post( $product_attribute['label'] ); ?>                      
                           </div>     
                            <div class="desc">
                                <?php echo wp_kses_post( $product_attribute['value'] ); ?>                     
                           </div>
                       </div>
                    <?php endforeach; ?>                                          
        		</div>
            </div>
        </div>
    </div>
<link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
<script src="https://unpkg.com/aos@next/dist/aos.js"></script>
</section>
    <script>
    AOS.init();
  </script>