<?php

//SINGLE PRODUCT PAGE

add_action( 'woocommerce_single_product_summary', 'woocommerce_show_product_available_in_store', 2 );
function woocommerce_show_product_available_in_store() {
	$isAvailable = has_term('see-it-in-store', 'product_tag');
	if ($isAvailable) {
		include CHILD_THEME_DIR . '/lib/views/see-in-store.php';
	}

}


add_filter( 'woocommerce_product_tabs', 'woo_remove_product_tabs', 98 );
function woo_remove_product_tabs( $tabs ) {
	unset( $tabs['additional_information'] ); // Remove the additional information tab
	return $tabs;
}

add_filter( 'woocommerce_product_tabs', 'woo_rename_tabs', 98 );
function woo_rename_tabs( $tabs ) {
	global $product;
	if( $product->has_attributes() || $product->has_dimensions() || $product->has_weight() ) { // Check if product has attributes, dimensions or weight
		$tabs['description']['title'] = __( 'Product Information', 'themify-shoppe-child' );	// Rename the additional information tab
	}
	return $tabs;
}

add_filter( 'woocommerce_product_tabs', 'woo_custom_description_tab', 98 );
function woo_custom_description_tab( $tabs ) {
	$tabs['description']['callback'] = 'woo_custom_description_tab_content'; // Custom description callback
	return $tabs;
}

function woo_custom_description_tab_content() {
	global $product;
	$description = $product->get_description();

	echo '<div  class="description">';
	echo $description;
	echo '</div>';

	if ( $product->has_dimensions() ) {
		echo '<div  class="dimensions">';
		echo '<div class="dimensions-wrap">';
		echo '<h6>Product Dimensions</h6>';
		echo '<b>Height:</b> ' . $product->get_height() . get_option( 'woocommerce_dimension_unit' );
		echo '<br><b>Width:</b> ' . $product->get_width() . get_option( 'woocommerce_dimension_unit' );
		echo '<br><b>Depth:</b> ' . $product->get_length() . get_option( 'woocommerce_dimension_unit' );
		echo '</div>';
		echo '</div>';

	}
}