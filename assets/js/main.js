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

  var projects = $('#projects');

  var hold = 0;

  projects.click(function(){
    if(hold == 0){
      $('#wrap').animate({bottom:'180px'}, "slow");
      $('#proj').fadeIn(1300);
      hold = 1
    }else if (hold == 1) {
      $('#proj').fadeOut(700);
      $('#wrap').animate({bottom:'0px'}, 1000);
      hold = 0;
    }

  });





});
