jQuery(document).ready(function ($) {

  function openProfile(obj) {
    obj.animate({
      height: "350px"
    }, 200, function() {
    });
  };

  function closeProfile(obj) {
    obj.animate({
      height: "50px"
    }, 200, function() {
    });
  };

  $('.teampicname').hover(function() {
    openProfile($(this));
  }, function(){
    closeProfile($(this));
  });

});