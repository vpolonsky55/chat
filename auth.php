<?php
require_once 'google-api-php-client--PHP5.6/vendor/autoload.php';
 
// init configuration
$clientID = '750553492509-1dign9pfurg6k9r9mt0jm85tbqsasaqa.apps.googleusercontent.com';
$clientSecret = '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';
$redirectUri = 'http://localhost/chat/auth.php';
  
// create Client Request to access Google API
$client = new Google_Client();
$client->setClientId($clientID);
$client->setClientSecret($clientSecret);
$client->setRedirectUri($redirectUri);
$client->addScope("email");
$client->addScope("profile");
 

echo $client->fetchAccessTokenWithAuthCode($_GET['code']);
// authenticate code from Google OAuth Flow
if (isset($_GET['code'])) {
  $token = $client->fetchAccessTokenWithAuthCode($_GET['code']);
  $client->setAccessToken($token['access_token']);
  // get profile info
  $google_oauth = new Google_Service_Oauth2($client);
  $google_account_info = $google_oauth->userinfo->get();
  $email =  $google_account_info->email;
  $name =  $google_account_info->name;
  echo "code";
  // now you can use this profile info to create account in your website and make user logged in.
} else {
  echo "<a href='".$client->createAuthUrl()."'>Google Login</a>";
}
?>