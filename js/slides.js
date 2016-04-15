$(function(){  
  
  //init();
  showSlide();

});

$("body").keydown(function(e) {

  if (e.keyCode == 34 || e.keyCode == 40 || e.keyCode == 39) {
    
    $(".slide[data-hidden='false']:not(:last-of-type)").nextSlide();
    
  } 
  else if (e.keyCode == 37 || e.keyCode == 38 || e.keyCode == 33) {
    $(".slide[data-hidden='false']:not(:first-of-type)").prevSlide();
  }

});

var init = function(){
  var count = 1;
  $(".slide").each(function(){
    $(this).attr({"data-id": count, "data-hidden": true});
    count++;
  });

  $("#cover").attr({"data-hidden": false});
  
  showSlide();

};

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
