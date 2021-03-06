<?php

/**
* Initialize the theme's constants.
*
* @return void
*/
function init_constants() {

$child_theme = wp_get_theme();

define( 'CHILD_THEME_NAME', $child_theme->get( 'Name' ) );
define( 'CHILD_THEME_URL', $child_theme->get( 'ThemeURI' ) );
define( 'CHILD_THEME_VERSION', $child_theme->get( 'Version' ) );
define( 'CHILD_TEXT_DOMAIN', $child_theme->get( 'TextDomain' ) );

define( 'CHILD_THEME_DIR', get_stylesheet_directory() );

}

init_constants();