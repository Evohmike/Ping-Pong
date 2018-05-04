var userNumber;
$(document).ready(function() {
  $('form.pingpongform').click(function(event) {
    var userNumber = parseInt($('input#numb').val());
    $('ul.numbersList').empty();
    for (var startPoint = 1; startPoint<=userNumber; startPoint += 1) {
      if (startPoint%3==0) {
        $("ul#ponk").append("<li>ping</li>");
      }
      else if(startPoint%5==0){
        $("ul#ponk").append("<li>pong</li>");
      }
      else if(startPoint%15==0){
        $("ul#ponk").append("<li>pingpong</li>");
      }
      else {
        $("ul#ponk").append("<li> '+startPoint+'</li>");
      }
    }
    $("#numb").val('')
    event.preventDefault();

  });
});
