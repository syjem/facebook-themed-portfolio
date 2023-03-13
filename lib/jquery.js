
$(function() {

    // Search History Modal
    $("#search").on("focus", function() {
        setTimeout(function() {
            $("#search-history-box").show();
        }, 200);
    });
    $(document).on("click", function(event) {
        let modal = $("#search-history-box");
        if(!modal.is(event.target) && modal.has(event.target).length === 0) {
            modal.hide();
        }
    });


    //Filter by search 
    $("#search").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $(".projects").each(function() {
          var hasMatch = false;
          $(this).find('.project-name, .project-status').each(function() {
            if($(this).text().toLowerCase().indexOf(value) > -1) {
              hasMatch = true;
            }
          });
          $(this).toggle(hasMatch);
        });
      });


    // All images set to un-draggable
    $('img').attr('draggable', 'false');


    // Add a border to post button
    $("#share").css("border", "1px solid #054453")


    // Slider images
    var slideIndex = 1;
    showSlides(slideIndex);
    
    // Next/previous controls
    $("#prev").on("click", function() {
        showSlides(slideIndex -= 1);
    });
    $("#next").on("click", function() {
        showSlides(slideIndex += 1);
    });
    
    function showSlides(n) {
        var i;
        var slides = $("#images-slider img");
        if (n > slides.length) {
        slideIndex = 1
        }
        if (n < 1) {
        slideIndex = slides.length
        }
        slides.hide();
        slides.eq(slideIndex - 1).show();
    }


    // Open slider when clicked
    $(".photos-text, .see-all").on("click", function() {
        $("#slider-box").show();
        $(".new-chat-container").hide();
    });

    $(".mini").on("click", function() {
        var index = $(this).index();
        slideIndex = index + 1;
        $("#slider-box").show();
        showSlides(slideIndex);
        $(".new-chat-container").hide();
        $(".new-message").show();
    });

    $("#x-mark").on("click", function() {
        $("#slider-box").hide();
    });


    // Main link active class
    $(".home").on("click", function() {
        setTimeout(function() {
            $(".home").addClass("active");
            $(".about").removeClass("active");
            $(".portfolio").removeClass("active");

            // $(".about-feed").hide();
            // $(".portfolio-feed").hide();
            $(".home-feed").show();
        }, 300);
    });

    $(".about").on("click", function() {
        setTimeout(function() {
            $(".home").removeClass("active");
            $(".portfolio").removeClass("active");
            $(".about").addClass("active");

            $(".home-feed").hide();
            // $(".portfolio-feed").hide();
            // $(".about-feed").show();
        }, 300);
    });

    $(".portfolio").on("click", function() {
        setTimeout(function() {
            $(".home").removeClass("active");
            $(".about").removeClass("active");
            $(".portfolio").addClass("active");

            // $(".home-feed").hide();
            // $(".about-feed").hide();
            // $(".portfolio-feed").show();
        }, 300);
    });


    // New message modal

    $(".new-message").on("click", function() {
        $(this).hide();
        $(".new-chat-container").show();
    });

    $(".fa-xmark").on("click", function() {
        $(".new-chat-container").hide();
        $(".new-message").show();
    });


    // Auto Textarea

    const $chatArea = $('.chat-area');
    const $textarea = $('#chat-input');

    $textarea.on('input', function() {
        const $this = $(this);
        $this.css('height', 'auto');
        $this.css('height', this.scrollHeight + 'px');
        if ($this.outerHeight() >= parseInt($this.css('max-height'))) {
            $this.css('max-height', $chatArea.innerHeight() - $chatArea.offset().top + 'px');
            $textarea.css('overflow-y', 'scroll');
            $textarea.scrollTop($chatArea.prop('scrollHeight'));
        } else {
            $textarea.css('overflow-y', 'hidden');
          }
    });


    // Send Messages

    $textarea.on('keydown', function(event) {
        if (event.keyCode === 13 && !event.shiftKey) {
          event.preventDefault();
          const message = $textarea.val();

          if($("#from").val().trim() === "") {
                $("#from").css("border", "1px solid red");
                $(".from").css("color", "#DF2E38");
            return;
          }
            // Add code to send the message to the chat area
            $(".messages").append("<span class='msg'>" + message + "</span>");
            $textarea.val('');
            $("#from").css("border", "1px solid #23bbe1");
            $(this).css('height', '');
            $(this).css('overflow-y', 'hidden');
        }
      });

      $("#from").on("keydown", function() {
        $(".from").css("color", "#23bbe1");
        $("#from").css("border", "1px solid #23bbe1");
        $(".from").css("font-weight", "500");
      });

      $("#chat-input").on("focus", function() {
        $(".chat-info").css("color", "#23bbe1");
        $("#close-chat").css("color", "#23bbe1");
        $("#from").css("border", "1px solid #23bbe1");
      });

      $(document).on("click", function(event) {
        let $chat_box = $(".new-chat-container");
        if(!$chat_box.is(event.target) && $chat_box.has(event.target).length === 0 ) {
            $(".chat-info").css("color", "#a8a897");
            $("#close-chat").css("color", "#a8a897");
            $("#from").css("border", "1px solid #a8a897");
            $(".from").css("color", "white");
        }
      });


      $('#like-emoji').on('click', function() {
        $(".chat-info").css("color", "#23bbe1");
        $("#close-chat").css("color", "#23bbe1");
        $("#from").css("border", "1px solid #23bbe1");
        $(".messages").append("<i class='fa-solid fa-thumbs-up like-chat'>" + "</i>");
      });

  
});

