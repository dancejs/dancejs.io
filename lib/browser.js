var skrollr = require('skrollr'),
  $ = require('jquery');

module.exports = function(opts) {
  $(document).ready(function() {
    console.log("loaded, let's get our scroll on!");
    skrollr.init();
  });
};
