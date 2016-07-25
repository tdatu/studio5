<?php

function load_scripts()
{
    //main stylesheet
    wp_enqueue_style('main-style', get_stylesheet_uri());

    //boostrap style
    wp_enqueue_style('bootstrap', get_template_directory_uri() . '/bower_components/bootstrap/dist/css/bootstrap.min.css');

    //imagesloaded
    wp_enqueue_script('images-loaded', get_template_directory_uri() . '/bower_components/imagesloaded/imagesloaded.js', array('masonry', 'jquery'));

    //main js 
    wp_enqueue_script('main-js', get_template_directory_uri() . '/js/main.js', array('jquery', 'jquery-masonry', 'underscore', 'backbone', 'wp-api', 'images-loaded'), "1.0", true);

    //dashicons
    wp_enqueue_style( 'dashicons' );

    wp_localize_script('main-js', 'ajax_obj', array(
        'url' => admin_url('admin-ajax.php')
    ));


}

add_action('wp_enqueue_scripts', 'load_scripts');

function add_fonts(){
?>
    <style>
        @font-face {
            font-family: 'quicksand-reg';
            src: url('<?php echo get_template_directory_uri() . '/fonts/Quicksand-Regular.otf'; ?>');
        }
    </style>

<?php
}

add_action('wp_head', 'add_fonts');


function casa_images()
{
    global $wpdb;
    $posts = array();

    $result = $wpdb->get_results( 
        "
        SELECT * 
        FROM $wpdb->posts
        WHERE post_status = 'publish' 
        "
    );

    if($result){
        foreach($result as $post){
            $post->thumbnail = get_the_post_thumbnail($post->ID, 'medium');
           array_push($posts, $post);
        }
    }

    wp_send_json($posts);
}

add_action('wp_ajax_nopriv_get_images', 'casa_images');
add_action('wp_ajax_get_images', 'casa_images');

add_theme_support( 'post-thumbnails' ); 