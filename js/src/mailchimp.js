
function handle_mailchimp(){
  jQuery.ajax({
    url: 'https://heroku-mailgun.herokuapp.com/mailchimp-api/list?first=' + 
    jQuery('#sign-up #first-name').val() +
    '&last=' +
    jQuery('#sign-up #last-name').val() +
    '&email=' +
    jQuery('#sign-up #email').val(),
    dataType: "jsonp",
    success: function (data) {
      console.log(data);
      alert(data);
    }
  });
  console.log('sign-up');
  event.preventDefault();
  jQuery(".modal-state#modal-3").prop("checked", true).change();
  return false;
}
  
