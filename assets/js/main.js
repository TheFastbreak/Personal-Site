$(document).ready(function () {
  var con = $('#content');

  $('#phone').mouseenter( function(){
    con.css('width','120px')
    con.text("267-994-5033");
    con.css('margin-left','235px');
    con.fadeIn();
  }).mouseleave(function(){
    con.fadeOut();
    con.text("");
  });

  $('#email').mouseenter( function(){
    con.css('width','200px')
    con.text("michael.e.davisjr@gmail.com");
    con.css('margin-left','282px');
    con.fadeIn();
  }).mouseleave(function(){
    con.text("");
    con.fadeOut();
  });


});
