
// botón volver arriba
$(document).ready(function(){
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
});

//pop-ups imágenes galería autos (modals)
let modalId = $('#image-gallery');

$(document).ready(function () {
  //cargar galería de imágenes
    loadGallery(true, 'a.thumbnail');
  //deshabilitar botones de adelante/atrás cuando corresponda  
    function disableButtons(counter_max, counter_current) {
      $('#show-previous-image, #show-next-image').show();
      if (counter_max === counter_current) {
        $('#show-next-image').hide();
      } else if (counter_current === 1) {
        $('#show-previous-image').hide();
      }
    }
    //navegar entre las imágenes
    function loadGallery(setIDs, setClickAttr) {
      let current_image, selector, counter = 0;
      $('#show-next-image, #show-previous-image').click(function () {
          if ($(this).attr('id') === 'show-previous-image') {
            current_image--;
          } else {
            current_image++;
          }
          selector = $('[data-image-id="' + current_image + '"]');
          updateGallery(selector);
        });
      //incorporar la imagen adecuada a cada pop up  
      function updateGallery(selector) {
        let $sel = selector;
        current_image = $sel.data('image-id');
        $('#image-gallery-image')
          .attr('src', $sel.data('image'));
        // disableButtons(counter, $sel.data('image-id'));
      }
      if (setIDs == true) {
        $('[data-image-id]')
          .each(function () {
            counter++;
            $(this)
              .attr('data-image-id', counter);
          });
      }
      $(setClickAttr)
        .on('click', function () {
          updateGallery($(this));
        });
    }
  });
//usar el teclado para moverse entre imágenes
$(document).keydown(function (e) {
    switch (e.which) {
      case 37: // tecla izquierda
        if ((modalId.data('bs.modal') || {})._isShown && $('#show-previous-image').is(":visible")) {
          $('#show-previous-image').click();
        }
        break;
      case 39: // tecla derecha
        if ((modalId.data('bs.modal') || {})._isShown && $('#show-next-image').is(":visible")) {
          $('#show-next-image').click();
        }
        break;
      default:
        return; 
    }
    e.preventDefault(); 
  });

// Validación de campos del formulario
(function() {
  'use strict';
  window.addEventListener('load', function() {
    var forms = document.getElementsByClassName('needs-validation');
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();