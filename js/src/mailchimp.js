
  function handle_mailchimp(){
    jQuery.get('https://heroku-mailgun.herokuapp.com/mailchimp-api/list?first=bob&last=hamilton&email=bob.hamilton@offtheeatenpath.bike');
    console.log('called function');
    event.preventDefault();
    return false;
  }
  
