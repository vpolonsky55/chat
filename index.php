<!DOCTYPE html>
<html>
<head>
	<title>
		chat
	</title>
	<meta charset="utf-8">
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
</head>  
<body>
	<form method="POST">
		<input type="text" name="something">
		<input type="text" name="something2">
		<input type="button" value="click" name="bt">
	</form>
	<?php
		// setcookie('TestCookie', null);
		setcookie('login', null);
		echo $_COOKIE['TestCookie'];

		echo $_POST['something'].'  '.$_POST['something2'].' '.$_POST['bt'];
	?>
	<div class="content">
		
	</div>
<script type="text/javascript" src="js/module.js"></script>
<script type="text/javascript" src="js/functions.js"></script>
<script type="text/javascript" src="js/variables.js"></script>
<script type="text/javascript" src="js/start.js"></script>
<script type="text/javascript" src="js/chatUpdate.js"></script>
<script type="text/javascript" src="js/chat.js"></script>
<script type="text/javascript" src="js/profile.js"></script>
</body>
</html>