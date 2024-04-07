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
	<form class="startForm" method="POST">
		<div>
			<label>Введите логин:</label>
			<input type="text" name="something">
		</div>
		<div>
			<label>Введите google-аккаунт:</label>
			<input type="text" name="something2">
		</div>
		
		<input class="frmBtn" type="button" value="click" name="bt">
	</form>
	<?php
		// setcookie('TestCookie', null);

		// setcookie('login', null);
		
		
		echo $_COOKIE['TestCookie'];

		echo $_POST['something'].'  '.$_POST['something2'].' '.$_POST['bt'];
		if (count($_COOKIE) == 0)
		{
			header("Location: http://localhost/chat/auth.php"); 
			exit();

		}
	?>
	<div class="content">
		
	</div>
	<script type="text/javascript" src="js/variables.js"></script>
	<script type="text/javascript" src="js/functions.js"></script>

	<script type="text/javascript" src="js/modules/MVC/view/DOM/Tag.js"></script>
	<script type="text/javascript" src="js/modules/MVC/view/DOM/Div.js"></script>
	<script type="text/javascript" src="js/modules/MVC/view/DOM/Elem.js"></script> <!--Необходимо откорректировать (файлы: Avatar.js, )-->
	<script type="text/javascript" src="js/modules/MVC/view/DOM/Form.js"></script>
	<script type="text/javascript" src="js/modules/MVC/view/DOM/Img.js"></script>
	<script type="text/javascript" src="js/modules/MVC/view/DOM/Input.js"></script>
	<script type="text/javascript" src="js/modules/MVC/view/DOM/Button.js"></script>
	<script type="text/javascript" src="js/modules/MVC/view/DOM/Link.js"></script>
	<script type="text/javascript" src="js/modules/MVC/view/DOM/P.js"></script>
	<script type="text/javascript" src="js/modules/MVC/view/DOM/Select.js"></script>
	<script type="text/javascript" src="js/modules/MVC/view/DOM/Textarea.js"></script>

	<script type="text/javascript" src="js/modules/MVC/view/UI/Avatar.js"></script>
	<script type="text/javascript" src="js/modules/MVC/view/UI/ProfileAvatar.js"></script>
	<script type="text/javascript" src="js/modules/MVC/view/UI/ButtonAddNewUser.js"></script>
	<script type="text/javascript" src="js/modules/MVC/view/UI/ButtonChangeUser.js"></script>
	<script type="text/javascript" src="js/modules/MVC/view/UI/Modal.js"></script>
	<script type="text/javascript" src="js/modules/MVC/view/UI/SideBar.js"></script>
	<script type="text/javascript" src="js/modules/MVC/view/UI/TopBar.js"></script>


	<!-- <script type="text/javascript" src="js/module.js"></script> -->
	<script type="text/javascript" src="js/start.js"></script>
	<script type="text/javascript" src="js/chatUpdate.js"></script>
	<script type="text/javascript" src="js/chat.js"></script>
	<script type="text/javascript" src="js/profile.js"></script>
</body>
</html>