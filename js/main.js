$(function() {
  console.log( "ready!" );
  $('.our-problem').hide();
  $('.our-problem-text').hide();
  $('.our-mission').hide();
  $('.our-mission-text').hide();
  $('.the-team-title').hide();
  $('.edward').hide();
  $('.pavan').hide();
  $('.bradley').hide();
  var options = [
  {selector: '.the-problem', offset: 300, callback: function() {
    console.log("fading in");
    $('.our-problem').fadeIn(500);
    $('.our-problem-text').fadeIn(2500);
  }},
  {selector: '.the-mission', offset: 300, callback: function() {
    console.log("fading in");
    $('.our-mission').fadeIn(500);
    $('.our-mission-text').fadeIn(2500);
  }},
  {selector: '.the-team', offset: 300, callback: function() {
    console.log("the-team fading in");
    $('.the-team-title').fadeIn(500);
    $('.edward').fadeIn(1000);
    $('.pavan').fadeIn(2000);
    $('.bradley').fadeIn(3000);
  }}
  ];
  Materialize.scrollFire(options);
});
