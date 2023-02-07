    $(function() {

   $.getJSON('../content-data.json', function(data) {
       $.each(data.content, function(i, f) {
          var html = "<div class='content-box'><img src='" + f.image + "'><br><a href='./" + f.page-name + ".html'><h3>" + f.name + "</h3></a><br><span class='text-muted'>" + f.description + "</span></div>"
           $(html).appendTo("#all-content");
     });

   });

});
