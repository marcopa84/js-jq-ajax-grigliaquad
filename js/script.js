$(document).ready(function () {
  for (var i = 0; i < 36; i++) {
    $('.js_made').append('<div class="square"></div>');
  }
  $('.square').click(function () {
    var selected = $(this);
    $.ajax(
      { url: "https://flynn.boolean.careers/exercises/api/random/int",
        method: "GET",
        success: function (data, stato)
        {
          console.log(data.response);
          game(data.response);
        },
        error: function (richiesta, stato, errore)
        {
          alert("E' avvenuto un errore. " + errore);
        }
      }
    );
    function game(numero) {
      selected.text(numero);
      if (numero <= 5) {
        selected.removeClass('green');
        selected.addClass('yellow');
      }else if (numero > 5) {
        selected.removeClass('yellow');
        selected.addClass('green');
      }
    };

  });

});
