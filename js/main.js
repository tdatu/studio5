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

            _.each(posts, function(post){
                    if ( post.thumbnail !== "" )
                    {
                        var url = post.thumbnail.split(" ");
                        console.log(url);
                        var cleanUrl = url[3];
                        cleanUrl = cleanUrl.replace('src=\"', '');
                        cleanUrl = cleanUrl.replace('\"', '');
                        post.thumbnailUrl = cleanUrl;

                        //append each template
                        $('div.grid').append(template(post));                        
                    }
            });

            /** 
            var elem = document.querySelector('.grid');
            var msnry = new Masonry( elem, {
                itemSelector: '.grid-item'
            });

            $('.grid-item > img').load(function(){
                console.log('new image loaded');
            });

            **/

            var elem = document.querySelector('.grid');
            var msnry = new Masonry( elem, {
                itemSelector: '.grid-item', 
                gutter: 0
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

})(jQuery);
