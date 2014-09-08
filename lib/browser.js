var skrollr = require('skrollr'),
  $ = jquery = require('jquery');

module.exports = function(opts) {
  // nifty parallax scrolling lib.
  $(document).ready(function() {
    $('#bottom-info').show();
    skrollr.init();
  });

  // hover effect on profile pics.
  $('.item').hover(
    function() {
      $(this).children('.profile').show();
    },
    function() {
      $(this).children('.profile').hide();
    }
  )
};
