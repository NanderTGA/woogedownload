    $(function() {

   $.getJSON('../content-data.json', function(data) {
       $.each(data.game, function(i, f) {
          var html = "<h1>" + f.name + "</h1>"
           $(html).appendTo("#all-content");
     });

   });

});
