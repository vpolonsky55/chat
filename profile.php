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
	<!-- загрузка файлов методом Post 
		следует убедиться, что форма загрузки имеет атрибут enctype="multipart/form-data" , в противном случае загрузка файлов на сервер не произойдёт. -->
	<form class="profileForm" method="POST" enctype="multipart/form-data">
		<div class="profileFormBlock">
			<img class="profileImg" src="">
			<input type="hidden" name="MAX_FILE_SIZE" value="300000" />
			<input type="file" name="avatarImage">
		</div>

		<p class="profileTxtLogin"></p>
		<textarea type="text" name="selfDescription" placeholder="Расскажите о себе"></textarea>	
		<input type="submit" value="Изменить" name="bt">
	</form>
	<?php
		// setcookie('TestCookie', null);
		// setcookie('login', null);
		echo $_COOKIE['TestCookie'];

		echo $_POST['something'].'  '.$_POST['something2'].' '.$_POST['bt'];
	?>
	
<!-- обеспечиваем процесс загрузки -->

	<?php
		// $uploaddir (куда загружать) 
			// указываем физический путь на диске куда задолжен загрузиться файл
		$uploaddir = 'C:\MAMP\htdocs\chat\img';
		// $uploadfile состоит из uploaddir, который связывается с basename 
			// name - имя файла, которое храниться непосредственно у клиента (зарезервировано не меняем)
			// basename - специальная функция, которая вытаскивает название этого файла
			// avatarImage - userName взято из атрибута input 
		$uploadfile = $uploaddir . basename($_FILES['avatarImage']['name']);

		echo '<pre>';
		// проверка загрузился ли этот файл и если этот файл есть (true) он перекидывается в директорию $uploadfile с тем названием, который указан в том что вытащила функция basename
		readfile($_FILES['userfile']['tmp_name']);
		if (is_uploaded_file($_FILES['userfile']['tmp_name'])) {
		    echo "Файл корректен и был успешно загружен.\n";
		} else {
		    echo "Возможная атака с помощью файловой загрузки!\n";
		}

		echo 'Некоторая отладочная информация:';
		// print_r - показывает содержимое массива
		print_r($_FILES);

		print "</pre>";

	?>

<!-- <script type="text/javascript" src="js/module.js"></script> -->
<!-- <script type="text/javascript" src="js/functions.js"></script> -->
<script type="text/javascript" src="js/variables.js"></script>
<!-- <script type="text/javascript" src="js/start.js"></script> -->
<!-- <script type="text/javascript" src="js/chatUpdate.js"></script> -->
<!-- <script type="text/javascript" src="js/chat.js"></script> -->
<script type="text/javascript" src="js/profile.js"></script>
</body>
</html>