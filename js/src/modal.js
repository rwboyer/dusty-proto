(function( $ ){

  $(function() {
    $('input[id^="modal-"]').on("change", function() {
      if ($(this).is(":checked")) {
        $("body").addClass("modal-open");
      } else {
        $("body").removeClass("modal-open");
      }
    });
  
    $(".modal-fade-screen, .modal-close").on("click", function() {
      $(".modal-state:checked").prop("checked", false).change();
    });
  
    $(".modal-inner").on("click", function(e) {
      e.stopPropagation();
    });
  });
  
  function getQueryVariable(variable) {
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
            var pair = vars[i].split("=");
            if(pair[0] == variable){return pair[1];}
       }
       return(false);
  }
  
  $(function() {
    if (window.location.search) {
         var showModal = getQueryVariable('showModal');
         if (showModal == 'yes') {
              $(".modal-state#modal-1").prop("checked", true).change();
         }
    }
  });

})(jQuery);
