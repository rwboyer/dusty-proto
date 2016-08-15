
function handle_mailchimp(){
  jQuery.ajax({
    url: 'https://heroku-mailgun.herokuapp.com/mailchimp-api/list?first=' + 
    jquery('#sign-up #first-name').value() +
    '&last=' +
    jquery('#sign-up #last-name').value() +
    '&email=' +
    jquery('#sign-up #email').value(),
    dataType: "jsonp",
    success: function (data) {
      console.log(data)
      alert(data);
    }
  });
  console.log('sign-up');
  event.preventDefault();
  alert('Thank You');
  return false;
}
  
