var $ = require('jquery');

module.exports = function(opts) {
  $(document).ready(function() {
    // hide profile pics until layout complete.
    $('#bottom-info').show();

    // code of conduct message.
    $('#conduct').click(function() {
      vex.dialog.confirm({
        message: $('#conduct-content').html()
      });
    });

    // list of sponsors.
    $('#sponsors').click(function() {
      vex.dialog.confirm({
        message: $('#sponsors-content').html()
      });
    });

    // hover effect on profile pics.
    $('.item').hover(
      function() {
        $(this).children('.profile').show();
      },
      function() {
        $(this).children('.profile').hide();
      }
    );
  });
};
