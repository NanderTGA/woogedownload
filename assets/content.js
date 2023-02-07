$(function() {

    $.getJSON('../content-data.json', function(data) {
        $.each(data.content, function(i, f) {
           var html = `<div id="content-box"><img src="${f.image}" class="thumb"><br><a href="./${f.pagename}.html"><h1>${f.name}</h1></a><span class="text-muted">${f.description}</span></div>`
            $(html).appendTo("#all-content");
      });
 
    });
 
 });
 
