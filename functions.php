<?php

require_once ('email/mail.php');

function theme_styles() {
	$css_url = get_bloginfo('stylesheet_directory') . '/css';
    wp_enqueue_style( 'mystyle.css', get_stylesheet_uri() );
    wp_enqueue_style('customScrollbar-css', $css_url. '/jquery.mCustomScrollbar.css');
}
add_action('wp_enqueue_scripts', 'theme_styles', 99999);



function addOwnScript(){
    // Remove the Default JavaScript    
    wp_dequeue_script( 'dp-js' );

    // Add your own script  
    $js_url = get_bloginfo('stylesheet_directory') . '/js';

    wp_enqueue_script( 'customScrollbar-concat-js', "$js_url/jquery.mCustomScrollbar.concat.min.js");
    wp_enqueue_script('dp',"$js_url/common.js"); 
} 
add_action( 'wp_enqueue_scripts', 'addOwnScript' );