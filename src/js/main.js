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

});
