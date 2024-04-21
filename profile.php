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
<body class="profileBody">

	<!-- Тип кодирования данных, enctype, ДОЛЖЕН БЫТЬ указан ИМЕННО так -->
		
	<!-- загрузка файлов методом Post 
		следует убедиться, что форма загрузки имеет атрибут enctype="multipart/form-data" , в противном случае загрузка файлов на сервер не произойдёт. -->
	<form enctype="multipart/form-data" action="" method="POST" class="profileForm">
	    <div class="profileFormBlock">
	    	<img class="profileImg" src="  ">
		  	<input type="hidden" name="MAX_FILE_SIZE" value="3000000" />
		   	<label for="input__file" class="input__file_button">
		    	<span class="input__file_button_text">Выберите файл</span>
		   	</label>
		   	<input type="file" name="avatarImage" class="input__file" id="input__file">

	    </div>
		<p class="profileTxtLogin"></p>
		<p class="profileTxtAbout">Тут должно быть инфо о пользователе</p>
		<textarea class="selfDescription" type="text" name="description" placeholder="Расскажите о себе"></textarea>	
		<input class="ProfileChangeButton" type="submit" value="Изменить" name="bt">
	</form>
	

	<!-- 
	</form>  -->

<!-- обеспечиваем процесс загрузки -->


<?php
	// куда загрузить
	$uploaddir = 'img/avatar/';
	echo '<pre>';
	if (isset($_POST['description']) && $_POST['description'] != "") {
		$login = $_COOKIE["login"];
		$user_id = -1;
		$sql = 'SELECT id FROM `user` WHERE login="'.$login.'"';
		$result = mysqli_query($link, $sql);
		while ($row = mysqli_fetch_assoc($result)) {
				$user_id = $row["id"];
		}
		$sql = 'UPDATE `user_info` SET `description`="%s" WHERE user=%d'; 
		$query=sprintf($sql, $_POST['description'], $user_id);
		$result = mysqli_query($link, $query);
	}
	if (isset($_FILES['avatarImage']['type']) && $_FILES['avatarImage']['type']=="image/png"){
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
		echo $_FILES['avatarImage']['tmp_name']=="image.png";

		if (move_uploaded_file($_FILES['avatarImage']['tmp_name'], $uploadfile)) 
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
		echo "Можно загружать изображения только с расширением *.png";
	}
	print "</pre>";
	

}
?>

<script type="text/javascript" src="js/modules/MVC/view/DOM/Tag.js"></script>
<script type="text/javascript" src="js/modules/MVC/view/DOM/Div.js"></script>
<script type="text/javascript" src="js/modules/MVC/view/DOM/Elem.js"></script> <!--Необходимо откорректировать (файлы: Avatar.js, )-->
<script type="text/javascript" src="js/modules/MVC/view/DOM/Img.js"></script>
<script type="text/javascript" src="js/modules/MVC/view/DOM/Link.js"></script>


<script type="text/javascript" src="js/modules/MVC/view/UI/Avatar.js"></script>
<script type="text/javascript" src="js/modules/MVC/view/UI/ProfileAvatar.js"></script>

<script type="text/javascript" src="js/functions.js"></script>
<script type="text/javascript" src="js/variables.js"></script>
<script type="text/javascript" src="js/profile.js"></script>

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