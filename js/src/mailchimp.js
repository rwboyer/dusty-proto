
function handle_mailchimp(){
  jQuery.ajax({
    url: 'https://heroku-mailgun.herokuapp.com/mailchimp-api/list?first=bob&last=hamilton&email=bob.hamilton@offtheeatenpath.bike',
    dataType: "jsonp",
    success: function (data) {
      console.log(data)
      alert(data);
    }
  });
  console.log('called function');
  event.preventDefault();
  return false;
}
  
