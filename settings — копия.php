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
			<div class="property">
				<p class="property__text">Установить фон</p>
				<button class="property__button">Изменить</button>
			</div>
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
		$format="avatar_%d_%s.png";
		$user_id = -1;
		$sql = 'SELECT id FROM `user` WHERE login="'.$login.'"';
		$result = mysqli_query($link, $sql);
		while ($row = mysqli_fetch_assoc($result)) {
				$user_id = $row["id"];
		}
		
		$uploadfile = $uploaddir . sprintf($format, $user_id, $login);

		// проверка загрузиться ли файл и если так, то он перекидывается в директорию с тем названием, которое вытащила функция  basename
		echo $_FILES['bg']['tmp_name']=="image.png";

		if (move_uploaded_file($_FILES['bg']['tmp_name'], $uploadfile)) 
		{
		    echo "Файл корректен и был успешно загружен.\n";
		    $sql = 'UPDATE `user_info` SET `url`="%s" WHERE user=%d'; 
		    $query=sprintf($sql, $uploadfile, $user_id);
		    echo $query;
			$result = mysqli_query($link, $query);

		} 
		else 
		{
		    echo "Возможная атака с помощью файловой загрузки!\n";
		}

		echo 'Некоторая отладочная информация:';
		print_r($_FILES);
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




<script type="text/javascript">
	let logName = document.cookie.split("=")[0]
	data = 'login='+logName+'&getUserId=1 ', 
	sendMessage = send('POST', 'http://localhost/chat/responsejs.php', data);
	sendMessage.then(function(id)
		{
			let post = 'login='+logName+'&getUserUrl='+id+'', 
			getMessage = send('POST', 'http://localhost/chat/responsejs.php', post, "html");

			getMessage.then(function(url)
				{
					// console.log(url)
					document.querySelector(".profileImg").src=url
					// console.log(document.querySelector(".profileImg").src)
				}
			)
		}
	)

	sendMessage.then(function(id)
		{
			let post = 'login='+logName+'&getUserDescription='+id+'', 
			getMessage = send('POST', 'http://localhost/chat/responsejs.php', post, "html");

			getMessage.then(function(description)
				{
					console.log(description)
					document.querySelector(".profileTxtAbout").innerText=description
					console.log(document.querySelector(".profileTxtAbout").innerText)
				}
			)
		}
	)



</script>
</body>
</html>