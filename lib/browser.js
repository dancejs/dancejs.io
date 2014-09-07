var skrollr = require('skrollr'),
  $ = jquery = require('jquery');

module.exports = function(opts) {
  $(document).ready(function() {
    skrollr.init();
  });
};
