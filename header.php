<?php
/**
 * The template for displaying the header
 *
 *
 * @package WordPress
 * @subpackage erik
 * @since erik 1.0
 */

?><!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js">
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="http://gmpg.org/xfn/11">
	<?php if ( is_singular() && pings_open( get_queried_object() ) ) : ?>
	<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
	<?php endif; ?>
	<?php wp_head(); ?>
    <title><?php bloginfo('name'); ?> :: portfolio</title>

</head>

<body id="content" <?php body_class(); ?>>
    <div id="navigation" class="row">
        <div id="site-title" class="col-lg-9 col-md-6 col-sm-6 col-xs-12">
            <a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a>
        </div>
        <div class="col-lg-1 col-md-2 col-sm-2 col-xs-12 nav-item"><a href="#">PORTRAITS</a></div>
        <div class="col-lg-1 col-md-2 col-sm-2 col-xs-12 nav-item"><a href="#">LANDSCAPES</a></div>
        <div class="col-lg-1 col-md-2 col-sm-2 col-xs-12 nav-item"><a href="#">ARTS</a></div>
    </div>