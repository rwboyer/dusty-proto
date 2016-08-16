(function($) {
  $(document).ready(function(){
    $('li.mobile-menu').click(function(){
      $('ul.menu').toggle(1000);
      $('nav.side #sponsors').toggle(1000);
    });
  });
})(jQuery);
