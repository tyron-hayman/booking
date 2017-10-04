(function($) {

  var $win = $(window);
  var $doc = $(document);
  var winWidth, winheight;

  $doc.ready(function() {

    $('#install_db_btn').on("click", function() {
      $(this).css({ display : "none" });
      $(this).parent().find('.loader').css({ display : "block" });

      $.ajax({
          url :  siteURL + 'welcome/run_initial_setup',
          type: "POST",
          success: function(data) {

              $('#welcome_content').fadeOut(500, function() {
                $('#welcome_content').html("<p>" + data + "</p>");
                $('#welcome_content').fadeIn(500);
              });


              console.log(data);
          },
          error: function() {
          }
      });


    return false;
    });

  });

  $win.load(function() {

    winWidth = $win.width();
    winheight = $win.height();
    var welcomeWidth = $('#welcome-container').width();
    var welcomeHeight = $('#welcome-container').height();

    $('#welcome-container').css({
      left : ( winWidth - welcomeWidth ) / 2 + "px",
      top : ( winheight - welcomeHeight ) / 2 + "px"
    });

  });

  $win.resize(function() {

    winWidth = $win.width();
    winheight = $win.height();
    var welcomeWidth = $('#welcome-container').width();
    var welcomeHeight = $('#welcome-container').height();

    $('#welcome-container').css({
      left : ( winWidth - welcomeWidth ) / 2 + "px",
      top : ( winheight - welcomeHeight ) / 2 + "px"
    });

  });

})(jQuery);
