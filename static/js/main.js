$(document).ready(function() {

  function handleActive(tag) {
    $('.active').removeClass('active');
    tag.addClass('active');
  }

  $(window).hashchange(function() {
    var hash = window.location.hash;

    hash = hash.substring(2, hash.length - 1);
    hash = hash == '/' ? 'home' : hash;
    handleActive($('#' + hash));
  });
  $(window).hashchange();

});
