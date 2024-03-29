(function() {
  'use strict';
  $(document).ready(function() {
    var handleActive;
    handleActive = function(tag) {
      $('.active').removeClass('active');
      tag.addClass('active');
    };
    $(window).hashchange(function() {
      var hash;
      hash = window.location.hash;
      hash = hash.substring(2, hash.length - 1);
      hash = hash !== '/' ? hash : 'home';
      handleActive($('#' + hash));
    });
    $(window).hashchange();
  });

}).call(this);
