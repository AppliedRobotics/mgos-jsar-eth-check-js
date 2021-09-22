load('api_http.js');

let user_url = 'http://wikipedia.org';

HTTP.query({
  url: user_url,
  success: function(){ print('Connect to ' + user_url + ' - Done!'); },
  error:   function(){ print('Connect to ' + user_url + ' - False!');},
});


