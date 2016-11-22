jQuery(document).ready(function ($) {

  setInterval(function () {
    moveRight();
  }, 3000);
  
  var slideCount = $('#slider ul li').length;
  var slideWidth = $('#slider ul li').width();
  var slideHeight = $('#slider ul li').height();
  var sliderUlWidth = slideCount * slideWidth;

  $('#slider').css({ width: slideWidth, height: slideHeight });
  $('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
  $('#slider ul li:last-child').prependTo('#slider ul');
  $('#slider-control ul li:last-child').prependTo('#slider-control ul');
  $('#slider-control ul li:first-child').addClass('selected-slider-image');

  function moveLeft() {
    var oldselected = $('.selected-slider-image');
    var newselectednumber = ($('#slider-control ul li').index(oldselected) + 5) % 6;
    oldselected.removeClass('selected-slider-image');
    $('#slider-control ul').children().eq(newselectednumber).addClass('selected-slider-image');
    $('#slider ul').animate({
      left: + slideWidth
    }, 1000, function () {
      $('#slider ul li:last-child').prependTo('#slider ul');
      $('#slider ul').css('left', '');
    });
  };

  function moveRight() {
    var oldselected = $('.selected-slider-image');
    var newselectednumber = ($('#slider-control ul li').index(oldselected) + 1) % 6;
    oldselected.removeClass('selected-slider-image');
    $('#slider-control ul').children().eq(newselectednumber).addClass('selected-slider-image');
    $('#slider ul').animate({
      left: - slideWidth
    }, 200, function () {
      $('#slider ul li:first-child').appendTo('#slider ul');
      $('#slider ul').css('left', '');
    });
  };

});