$(document).ready(function(){

  // botón volver arriba
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $('#back-to-top').fadeIn();
    } else {
      $('#back-to-top').fadeOut();
    }
  });
  $('#back-to-top').click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 400);
    return false;
  });

  //pop-ups imágenes galería autos (modals)
  $("img").on("click", function() {
    var img = $(this).attr('src');
    $("#show-img").attr('src',img);
    $("#modal").modal('show');
  });
});

