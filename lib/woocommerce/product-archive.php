<?php

// Remove the result count from WooCommerce
//remove_action( 'woocommerce_before_shop_loop' , 'themify_hide_shop_features', 1 );

add_action( 'themify_sidebar_start', 'woocommerce_insert_desktop_shop_page_title', 1 );
function woocommerce_insert_desktop_shop_page_title() {
	include CHILD_THEME_DIR . '/lib/views/archive-top.php';
}

add_action( 'woocommerce_before_shop_loop_item_title', 'woocommerce_archive_show_product_available_in_store', 2 );
function woocommerce_archive_show_product_available_in_store() {
	$isAvailable = has_term('see-it-in-store', 'product_tag');
	if ($isAvailable) {
		echo '<img class="see-in-store" src="/wp-content/themes/themify-shoppe-child/assets/images/see-it-in-store.svg">';
	}

}

