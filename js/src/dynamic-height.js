jQuery(window).on('resize', function(){
  //var cw = jQuery('.big-block').outerWidth();
  //jQuery('.big-block').css({'height':cw+'px'});
  var cw = jQuery('.farm-item').outerWidth();
  jQuery('.farm-item').css({'height':cw+'px'});
  //jQuery('.post-block article p').each(function(){
  //  $clamp(this, {clamp: 6});
  //});
});

jQuery(document).ready(function(){
  jQuery(window).trigger('resize');
  jQuery(window).trigger('resize');
  jQuery(window).trigger('resize');
});
