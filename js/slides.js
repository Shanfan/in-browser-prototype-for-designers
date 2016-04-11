$("body").keydown(function(e) {

  if (e.keyCode == 34 || e.keyCode == 40 || e.keyCode == 39) {

    $(".active.slide:not(:last-of-type)").fadeOut().removeClass("active")
                                         .next().fadeIn().addClass("active");
  } 
  else if (e.keyCode == 37 || e.keyCode == 38 || e.keyCode == 33) {
    $(".active.slide:not(:first-of-type)").fadeOut().removeClass("active")
                                          .prev().fadeIn().addClass("active");
  }

})