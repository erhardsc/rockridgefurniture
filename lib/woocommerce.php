<?php

//SINGLE PRODUCT PAGE

// Remove the additional information tab
add_filter( 'woocommerce_product_tabs', 'woo_remove_product_tabs', 98 );
function woo_remove_product_tabs( $tabs ) {
	unset( $tabs['additional_information'] );

	return $tabs;
}

add_filter( 'woocommerce_after_product_summary', 'show_product_dimensions_loop', 5 );
function show_product_dimensions_loop() {

	global $product;

	$dimensions = $product->get_dimensions();

	if ( ! empty( $dimensions ) ) {
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

