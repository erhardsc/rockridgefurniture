<?php
/**
* Enqueues child theme stylesheet, loading first the parent theme stylesheet.
*/
add_action( 'wp_enqueue_scripts', 'themify_custom_enqueue_child_theme_styles', 11 );
function themify_custom_enqueue_child_theme_styles() {
    wp_enqueue_style( 'parent-theme-css', get_template_directory_uri() . '/style.css' );
}

/**
 * Enqueue the style sheet in the dist folder
 *
 *
 * @return string
 */
add_filter( 'stylesheet_uri', 'replace_default_style_sheet', 10, 2 );
function replace_default_style_sheet() {

	return get_stylesheet_directory_uri() . '/dist/styles/style.css';

}

