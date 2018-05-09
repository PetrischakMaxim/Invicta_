$(document).ready(function() {


    /*Menu toggler*/
    $(function() {
      var toggler = $('.js-menu-toggler');
      var menu = $('.js-menu');

      toggler.on('click', function(event) {
        $(this).toggleClass('js-menu-toggler--active');
        menu.slideToggle();
      });
    });

    /*Youtube video https://www.jqueryscript.net/other/Simple-Responsive-Youtube-Video-Modal-Plugin-With-jQuery-YU2FVL.html*/
    $(function() {
      $('.js-popup-youtube').modalVideo({
          allowFullScreen: true,
          animationSpeed: 300,
          classNames: {
            modalVideo: 'modal-video',
            modalVideoClose: 'modal-video-close',
            modalVideoBody: 'modal-video-body',
            modalVideoInner: 'modal-video-inner',
            modalVideoIframeWrap: 'modal-video-movie-wrap',
            modalVideoCloseBtn: 'modal-video-close-btn'
          },
          aria: {
            openMessage: 'You just openned the modal video',
            dismissBtnMessage: 'Close the modal by clicking here'
          }
      });
    });

    /*Popup */
    $(function() {
      var popup = $('.js-modal');
      var overlay = $('.overlay');

      $('.js-popup-btn').on('click', function(event) {
      event.preventDefault();
      var currentModal = $(this).attr("href");

      $(currentModal).fadeIn();
      $('body')
        .append('<div class="overlay"></div>');
    });

    $('.popup-close').on('click', function(event) {
      event.preventDefault();
      popup.fadeOut();
      $('.overlay').remove();
    });

    $('body').on('click', '.overlay', function(event) {
        popup.fadeOut();
        $('.overlay').remove();
      });
    });

    /*Slick slider  https://github.com/kenwheeler/slick*/
    $(function() {
      var slider = $('.js-slider-slick');
      slider.slick ({
        mobileFirst: true,
        autoplay: true,
        dots: true,
        adaptiveHeight: true,
        arrows: false,

        responsive: [

          {
            breakpoint: 760,
            settings: {
            slidesToShow: 2,
            dots: true
            }
          },

          {
            breakpoint: 992,
            settings: {
            slidesToShow: 3,
            dots: true,
            arrows: true
            }
          }

        ]
      });

    });

    /*To top arrow*/
    $(function() {
      var toTopArrow = $('.js-top-btn');

      $(window).scroll(function() {
        if($(this).scrollTop() != 0) {
          toTopArrow.fadeIn();
        } else {
          toTopArrow.fadeOut();
        }
      });

      toTopArrow.click(function() {
        $('body,html').animate({scrollTop:0},600);
      });

    });

    /*Form validation https://github.com/jquery-validation/jquery-validation*/
    $(function() {
      //$('form').validate();
      $('.js-page-form').validate({
        focusCleanup: true,
        focusInvalid: false,
        rules: {
          user_name: {
            required: true,
            minlength: 3
          },

          user_phone: {
            required: true,
          }
        }
      });
      $('.js-page-form2').validate({
        focusCleanup: true,
        focusInvalid: false,
        rules: {
          user_name: {
            required: true,
            minlength: 3
          },

          user_phone: {
            required: true,
          }
        }
      });
      $('.js-popup-form').validate({
        focusCleanup: true,
        focusInvalid: false,
        rules: {
          user_name: {
            required: true,
            minlength: 3
          },

          user_phone: {
            required: true,
          }
        }
      });

    });

    /*jQuery Masked Input https://github.com/digitalBush/jquery.maskedinput*/
    $(function() {
        $('input[name*="user_phone"]').mask("+38(099)999-99-99");
    });

    /*Smooth page scroll*/
    $(function() {
      $('.js-menu a').on('click', function(event) {
        event.preventDefault();
        var currentBlock = $(this).attr('href');
        var currentBlockOffset = $(currentBlock).offset().top;
        $('html, body').animate({
          scrollTop: currentBlockOffset
          }, 750);
        });
    });
});
