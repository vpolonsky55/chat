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

	
?>
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
<body class="settingsBody">

	<div class="settings">
		<div class="settings__wraper">
			<h2 class="settings__title">Внешний вид</h2>
			<form class="property" method="POST" action="" enctype="multipart/form-data">
				<p class="property__text">Установить фон</p>
				<input type="hidden" name="MAX_FILE_SIZE" value="300000000000" />
				<input type="file" name="bg">
				<input type="submit" name="sub" class="property__button" onclick="getBackgrounds()">
			</form>
			<div class="modal__bg">

				<!-- <img class="modal__bg_img" src=""> -->
				
			</div>
		</div>
		<div class="settings_wraper"></div>
		<div class="settings_wraper"></div>
	</div>

	<!-- <form enctype="multipart/form-data" action="" method="POST" class="settingsForm">
	    <div class="settingsFormBlock">
	    	<img class="profileImg" src="  ">
		  	<input type="hidden" name="MAX_FILE_SIZE" value="3000000" />
		   	
		   	<label for="input__file" class="input__file_button">
		    	<span class="input__file_button_text">Выберите файл</span>
		   	</label>
		   	<input type="file" name="bg" class="input__file" id="input__file">

	    </div>
		<p class="profileTxtLogin"></p>
		<p class="profileTxtAbout">Тут должно быть инфо о пользователе</p>
		<textarea class="selfDescription" type="text" name="description" placeholder="Расскажите о себе"></textarea>	
		<input type="submit" value="Изменить" name="bt">
	</form> -->






<?php
	// куда загрузить
	$uploaddir = 'img/bg/';
	echo '<pre>';
	if (isset($_FILES['bg']['type']) && $_FILES['bg']['type']=="image/png"){

		$login = $_COOKIE["login"];
		$format="%d_bg_%d.png"; //На будущее необх. расш. кол-во расшиирений
		$user_id = -1;
		$sql = 'SELECT id FROM `user` WHERE login="'.$login.'"';
		$result = mysqli_query($link, $sql);
		while ($row = mysqli_fetch_assoc($result)) {
				$user_id = $row["id"];
		}

		$number_img = -1;
		$sql = 'SELECT count(id) as id FROM `backgrounds` WHERE user= "'.$user_id.'"';
		$result = mysqli_query($link, $sql);
		while ($row = mysqli_fetch_assoc($result)) {
				$number_img = $row["id"] + 1;
		}
		echo $number_img;

		//небохдимо в эту переменную записать количество изображений которые находятся в таблице backgrounds на текущем пользователе
		$name = sprintf($format, $user_id, $number_img);
		$uploadfile = $uploaddir . $name;


		
		echo $_FILES['bg']['tmp_name']=="image.png";

		if (move_uploaded_file($_FILES['bg']['tmp_name'], $uploadfile)) 
		{
			$sql = 'INSERT INTO `backgrounds`(`user`, `name`, `checked`) VALUES (%d, "%s", 0)';
			$query = sprintf($sql, $user_id, $name);
			$result = mysqli_query($link, $query);
			echo $query;

		} 
		else 
		{
		    echo "Возможная атака с помощью файловой загрузки!\n";
		}

		
	} 
	else
	{
		echo "Можно загружать изображения только с расширением *.jpg";
	}
	print "</pre>";
	

}
?>


<script type="text/javascript" src="js/module.js"></script>
<script type="text/javascript" src="js/functions.js"></script>

<script type="text/javascript" src="js/variables.js"></script>
<!-- <script type="text/javascript" src="js/start.js"></script> -->
<!-- <script type="text/javascript" src="js/chatUpdate.js"></script> -->
<!-- <script type="text/javascript" src="js/chat.js"></script> -->
<script type="text/javascript" src="js/profile.js"></script>
<script type="text/javascript" src="js/settings.js"></script>





</body>
</html>