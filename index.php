<?php get_header(); ?>

<div class="grid row">


</div>

<!-- underscore js templates -->
<script type="text/template" id="grid-item-template">
    <% _.each(data, function(post){  
        if(post.thumbnail){    
    %>
        <div class="grid-item"><%= post.thumbnail %></div> 
    <%  } else { } }); %>
    
</script>
<!-- end underscore js templates -->

<?php get_footer(); ?>