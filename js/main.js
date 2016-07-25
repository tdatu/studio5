(function($){

    /*** GRID SECTION ***/

    /** 
    var h = $('.grid-item').width();
    $('.grid-item').height(h);


    //re-adjust div height when browser was resized
    $(window).resize(function(){
        var h = $('.grid-item').width();
        $('.grid-item').height(h);
    });

    **/ 



    $.ajax({
        type: "POST", 
        url: ajax_obj.url, 
        data: { action: 'get_images'},
        success: function(posts){

            var template = _.template($('#grid-item-template').html());
            $('div.grid').html(template({data: posts}));

            var elem = document.querySelector('.grid');
            var msnry = new Masonry( elem, {
                itemSelector: '.grid-item'
            });

            $('.grid-item > img').load(function(){
                console.log('new image loaded');
       
            });
        }
    });

/**
    $(document).ready(function(){

        var elem = document.querySelector('.grid');
        var msnry = new Masonry( elem, {
            itemSelector: '.grid-item'
        });

        $('.grid-item > img').load(function(){
            console.log('new image loaded');
            $msnry.imagesLoaded().progress( function() {
                $grid.masonry('layout');
            });
        });


    });
 */

})(jQuery, jQuery-Masonry);
