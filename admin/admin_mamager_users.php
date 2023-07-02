<?php 
	ini_set('error_reporting', E_ALL);
	ini_set('display_errors', 1);
	ini_set('display_startup_errors', 1);
	$link = mysqli_connect("localhost", "chat", "123", "chat" ); //(сервер, логин, пароль, база)
	if ($link == false)
	{
	    $arr = array('a' => mysqli_connect_error(), 'b' => $_POST['something2'], 'c' => mysqli_connect_error(), 'd' => 4, 'e' => 5);
		echo json_encode($arr);
	    print("Ошибка: Невозможно подключиться к MySQL " . mysqli_connect_error());
	}
	else 
	{
		if( isset($_POST['name']) && isset($_POST['email']) && isset($_POST['department']))
		{

			// создание нового пользователя в таблице user (выполняется 1 раз)
			$sql = 'insert into admin_manager_users (name, email, status) values("'.$_POST['name'].'", "'.$_POST['email'].'", "'.$_POST['department'].'")'; 
			$result = mysqli_query($link, $sql);

	}
?>  
<!DOCTYPE html>
<html>
<head>
	<title>
		chat
	</title>
	<meta charset="utf-8">
	<link rel="stylesheet" type="text/css" href="css/checkUser/checkUser.css">
	<link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
</head>  
<body>
	<script type="text/javascript" src="js/functions.js"></script>
	<script type="text/javascript" src="js/module.js"></script>
	<script type="text/javascript" src="js/checkUser.js"></script>
</body>