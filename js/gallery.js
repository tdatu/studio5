(function($){

    var app = {}; //namespace

    app.Model = Backbone.Model.extend({

    });

    app.Collection = Backbone.Collection.extend({
        model : app.Model,
        url : '/wp-admin/admin-ajax.php'
    });

    app.ItemView = Backbone.View.extend({
        
        events: {
            'click .grid-item' : 'focusImage'
        },
        template: _.template($('#grid-item-template').html()),
        initialize: function(){
            _.bindAll(this, 'render', 'focusImage');
        }, 
        render: function(){
            //console.log(this.model);
            return this.template({post: this.model});
        }, 
        focusImage: function(){
            console.log(this.model);
        }
    });

    app.GalleryView = Backbone.View.extend({

        el: $('div#photoApp'),

        initialize: function(){
            _.bindAll(this, 'render');
            //this.collection = new app.Collection();
            this.collection = new wp.api.collections.Media();
            this.render();
        }, 

        render: function(){
            
            var self = this;

            this.collection.fetch({
     /**           data: { 
                    action: 'get_images'
                },
                
                type: 'POST',
    **/
                data: { per_page: 40 },

                success : function(media){
                    
                   _.each(media.models, function(m){
                        console.log(m);
                        var gridItemView = new app.ItemView({
                            model: m
                        });
                        $('.grid').append(gridItemView.render());

                    /**
                       if(m.get('source_url') !== ""){
                           //Clean and get only the url attributes

                           /**
                           var url = post.get('thumbnail').split(" ");
                           var cleanUrl = url[3];
                           cleanUrl = cleanUrl.replace('src=\"', '');
                           cleanUrl = cleanUrl.replace('\"', '');
                            **/

                           //post.set('thumbnailUrl', cleanUrl);
                           
                   //    }

                   });


                //Setting up masonry 
                var $grid = $('.grid').masonry({
                    itemSelector: '.grid-item',
                    gutter: 0
                });

                $('.grid-item > img').load(function(){
                    $grid.imagesLoaded().progress( function() {
                        $grid.masonry('layout');
                    });
                });

                //End masonry
                
                },
                error : function(e){
                    console.log(e);
                }
            });
            
            return this;
        }

    });

    var GalleryRoutes = Backbone.Router.extend({

        routes: {
            "portraits" : "portraits",
            "streets" : "streets",
            "events" : "events",
            "weddings" : "weddings"
        },

        portraits: function(){
            console.log("portraits");
        },

        events: function(){
            console.log('events');
        },

        weddings: function(){
            console.log('weddings');
        }


    });

    Backbone.history.start();

    var routes = new GalleryRoutes();
    var Gallery = new app.GalleryView();


})(jQuery);