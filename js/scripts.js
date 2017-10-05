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
                $('#welcome_content').html(data);
                $('#welcome_content').fadeIn(500);
              });


              console.log(data);
          },
          error: function(data) {
            $('#welcome_content').fadeOut(500, function() {
              $('#welcome_content').html(data);
              $('#welcome_content').fadeIn(500);
            });
          }
      });


        return false;
      }); // install

      $('#user_setup_btn').on("click", function() {

        var isGood;
        var name = $("#name").val();
        var email = $("#email").val();
        var password = $("#password").val();
        var password_conf = $("#password_conf").val();
        var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;

        if ( name == "" || email == "" || password == "" ) {
          alertUser("Please fill in all required fields.");
          isGood = "no";
        }

        if ( password != password_conf ) {
          alertUser("Password and password confirmation do not match.");
          isGood = "no";
        }

        if( !isValidEmailAddress(email) ) {
          alertUser("Please use a valid email address.");
          isGood = "no";
        }

        if ( isGood == "no" ) {
          return false;
        } else {
          $('#welcome_content_last form').css({ display : "none" });
          $('#welcome_content_last').find('.loader').css({ display : "block" });

            $.ajax({
                url :  siteURL + 'welcome/run_user_setup',
                type: "POST",
                data: { name : name, email : email, password : password },
                success: function(data) {

                    $('#welcome_content_last').fadeOut(500, function() {
                      $('#welcome_content_last').html(data);
                      $('#welcome_content_last').fadeIn(500);
                    });


                    console.log(data);
                },
                error: function(data) {
                  $('#welcome_content_last').fadeOut(500, function() {
                    $('#welcome_content_last').html(data);
                    $('#welcome_content_last').fadeIn(500);
                  });
                }
            });

        }

        return false;
      }); // Setup user & DB

      $('#loginbtn').on("click", function() {

        var isGood;
        var email = $("#email").val();
        var password = $("#password").val();

        if ( email == "" ) {
          alertUser("Please file in your email address.");
          isGood = "no";
        }

        if ( password == "" ) {
          alertUser("Please file in your password.");
          isGood = "no";
        }

        if ( isGood == "no" ) {

        } else {
          $('#login_form form').css({ display : "none" });
          $('#welcome-container').find('.loader').css({ display : "block" });

          $.ajax({
              url :  siteURL + 'VerifyLogin/check_database',
              type: "POST",
              data: { email : email, password : password },
              success: function(data) {

                  $('#login_form').fadeOut(500, function() {
                    $('#login_form form').hide();
                    $('#login_form').append("Login successful, redirecting....");
                    $('#login_form').fadeIn(500);
                  });

                  setTimeout(function() {
                    window.open(siteURL + "home", '_self')
                  }, 1000);

                  console.log(data);
              },
              error: function(data) {
                $('#login_form').fadeOut(500, function() {
                  $('#login_form form').hide();
                  $('#login_form').append("There was an error login....");
                  $('#login_form').fadeIn(500);
                });
              }
          });
        }

        return false;
      }); // Login form


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

    runPageLoadAnimations();

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

  function isValidEmailAddress(emailAddress) {
    var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return pattern.test(emailAddress);
  };

  function runPageLoadAnimations() {

    var toggleThis = $('.toggleThis');

    if ( toggleThis.length > 0 ) {
      toggleThis.each(function(index){
        var $this = $(this);
        setTimeout(function() {
          $this.addClass('toggled');
        }, 100 * index);
      });
    }

  }

  function alertUser(data) {

    var obj = $('<p class="alerts">' + data + '</p>');

		obj.appendTo('#user_alerts').animate({
			opacity : 1
		}, 500, function() {
			setTimeout(function() {
				obj.fadeOut(500);
			}, 1000);
		});

  }

})(jQuery);
