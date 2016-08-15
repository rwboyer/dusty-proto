
  function handle_mailchimp(){
    jQuery.get('http:chimp.offtheeatenpath.bike/mailchimp-api/list?first=bob&last=hamilton&email=bob.hamilton@offtheeatenpath.bike');
    console.log('called function');
    event.preventDefault();
    return false;
  }
  
