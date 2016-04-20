$(function(){  
  //init();
  showSlide();
});

/*---- Key Code ----
(space)       32
page up       33
page down     34
left arrow    37
up arrow      38
right arrow   39
down arrow    40
enter         13
---------------------*/

var init = function(){
  var count = 1;
  $(".slide").each(function(){
    $(this).attr({"data-id": count, "data-hidden": true});
    count++;
  });

  $("#cover").attr({"data-hidden": false});
  
  showSlide();

};


$("body").keydown(function(e) {
  if (e.keyCode == 34 || e.keyCode == 40 || e.keyCode == 39) {    
    
    if ($(".slide[data-hidden='false'] .delay").length) {
      
      $(".slide[data-hidden='false'] .delay").first().animate({"opacity": 1}).removeClass("delay");
    
    } else {
    
      $(".slide[data-hidden='false']:not(:last-of-type)").nextSlide();

    } 

  } 
  
  if (e.keyCode == 37 || e.keyCode == 38 || e.keyCode == 33) {
    $(".slide[data-hidden='false']:not(:first-of-type)").prevSlide();
  }

});


var showSlide = function(){
  $(".slide").each(function(){
    if ($(this).data("hidden") == false) {
      $(this).show();
    } else {
      $(this).hide();
    }
  });
};

$.fn.extend({ 
  nextSlide: function() {
    this.attr({"data-hidden": true}).fadeOut()
    .next().attr({"data-hidden": false}).fadeIn();
  },
  prevSlide: function() {
    this.attr({"data-hidden": true}).fadeOut()
    .prev().attr({"data-hidden": false}).fadeIn();
  }
});

// Tools Comparison
$("#tools .tools-list img").each(function(){
  var graph = "g#graph-" + $(this).attr("id").slice(8);
  $(graph).data({"hidden": true});
  
  $(this).click(function(){
    if ($(graph).data("hidden")) {    
      $(graph).animate({"opacity": 0.5});
      $("g#graph-base").animate({"opacity": 0});
      $(this).addClass("on");
      $(graph).data({"hidden": false});
    } else {
      $(graph).animate({"opacity": 0});
      $(this).removeClass("on");      
      $(graph).data({"hidden": true});    
    }
  });

  $(this).hover(function(){
      $(graph).animate({"opacity": 1});
      if ($("#tools .tools-list .on").length != 0) {
        $("g#graph-base").animate({"opacity": 0});  
      } else {
        $("g#graph-base").animate({"opacity": 0.5});  
      }
      
    }, function(){
      if (!$(this).hasClass("on")){
        $(graph).animate({"opacity": 0});  
      } else {
        $(graph).animate({"opacity": 0.5});
      }    
    });  
});