var skrollr = require('skrollr'),
  $ = jquery = require('jquery');

module.exports = function(opts) {
  $(document).ready(function() {
  /*  $('#photos').masonry({
      columnWidth: 200,
      itemSelector: '.item'
    });*/
    skrollr.init();
  });
};
