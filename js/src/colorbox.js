(function($){
  //Settings for lightbox
  $(document).ready(function(){
    var cbSettings = {
      rel:'color-box-grid',
      maxWidth: '60%',
      height: 'auto',
      //maxWidth: '660',
      maxHeight: '80%',
    };
    $('.farm-item a').colorbox(cbSettings);
    $(window).on('resize', function() {
        $.colorbox.resize({
        width: window.innerWidth > parseInt(cbSettings.maxWidth) ? cbSettings.maxWidth : cbSettings.width
      }); 
    });
  });
})(jQuery);