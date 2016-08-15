function subscribeSomeoneToMailChimpList()
{
  var options =
  {
    "apikey": "9619b797a9fa70f0a28156dd986d34e9-us10",
    "id": "c9e0d2fad6",
    "email":
    {
      "email": "me@example.com"
    },
    "send_welcome": false
  };
  var mcSubscribeRequest = UrlFetchApp.fetch("https://us10.api.mailchimp.com/2.0/lists/subscribe.json", options);
  var mcListObject = Utilities.jsonParse(mcSubscribeRequest.getContentText());
}