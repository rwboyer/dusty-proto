(function( $ ){
  $(window).on('resize', function(){
    //var cw = $('.content').outerHeight();
    //$('.main').css({'height':cw+'px'});
    if($('nav.side').outerHeight() < $(window).height()){
      $('nav.side').css({'height':$(window).height()+'px'});
    }
    //$('.big-block').css({'height':cw+'px'});
    //cw = $('.post-block').outerWidth();
    //$('.post-block').css({'height':cw+'px'});
    //$('.post-block article p').each(function(){
      //$clamp(this, {clamp: 6});
    //});
  });
})(jQuery);

jQuery(document).ready(function(){
  jQuery(window).trigger('resize');
  jQuery(window).trigger('resize');
  jQuery(window).trigger('resize');
});
