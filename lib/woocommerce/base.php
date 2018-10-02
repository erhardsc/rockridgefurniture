<?php

function woocommerce_modify_theme_support() {
	$theme_support = get_theme_support( 'woocommerce' );
	$theme_support = is_array( $theme_support ) ? $theme_support[0] : array();

	$theme_support['single_image_width'] = 800;
	$theme_support['thumbnail_image_width'] = 150;

	remove_theme_support( 'woocommerce' );
	add_theme_support( 'woocommerce', $theme_support );
}

//add_action( 'after_setup_theme', 'woocommerce_modify_theme_support', 10 );
