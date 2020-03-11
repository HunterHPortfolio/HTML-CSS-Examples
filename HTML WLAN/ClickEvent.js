$('html').click(function() {
   $('#menucontainer').hide(); 
});

$('#menuwrap').click(function(event){
     event.stopPropagation();
});

$('#menutoggle').click(function(event){
     $('#menucontainer').toggle();
});

