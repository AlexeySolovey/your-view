<?php

require_once ('email/mail.php');

function theme_styles() {
    wp_enqueue_style( 'mystyle.css', get_stylesheet_uri() );
}
add_action('wp_enqueue_scripts', 'theme_styles', 99999);
