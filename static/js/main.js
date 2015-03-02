$(document).ready(function() {

  (function() {
    var hash = window.location.hash;

    hash = hash.substring(2, hash.length - 1);
    if (hash !== 'home' && hash.trim().length > 0)
      handleActive($('#' + hash));
  })();

  function handleActive(tag) {
    $('.active').removeClass('active');
    tag.addClass('active');
  }

  $('#drafts').click(function() {
    handleActive($('#drafts'));
  });

  $('#home').click(function() {
    handleActive($('#home'));
  });

  $('#tags').click(function() {
    handleActive($('#tags'));
  });

  $('.navbar-brand').click(function() {
    handleActive($('#home'));
  });

});
