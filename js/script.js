$(document).ready(function () {
  var num = 2;

  $('.square').click(function () {
    $.ajax(
      {
        url: "https://flynn.boolean.careers/exercises/api/random/int",
        method: "GET",
        success: function (data, stato) {
          console.log(data.response);
        },
        error: function (richiesta, stato, errori) {
          alert("E' avvenuto un errore. " + errore);
        }
      }
    );
    $(this).text(num);
    if (num <= 5) {
      $(this).addClass('yellow');
    }else {
      $(this).addClass('red');
    }
  });

});
