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
		
	<form enctype="multipart/form-data" action="" method="POST" class="profileForm">
	    <div class="profileFormBlock">
	    	<img class="profileImg" src="">
		  	<input type="hidden" name="MAX_FILE_SIZE" value="3000000" />
		   <input type="file" name="avatarImage">
	    </div>
		    <input type="submit" value="Отправить файл" />
	</form>
	

	<!-- загрузка файлов методом Post 
		следует убедиться, что форма загрузки имеет атрибут enctype="multipart/form-data" , в противном случае загрузка файлов на сервер не произойдёт. -->
	<!-- <form enctype="multipart/form-data" action="" method="POST" class="profileForm">
		<div class="profileFormBlock">
			<img class="profileImg" src="">
			<input type="hidden" name="MAX_FILE_SIZE" value="30000" />
			<input type="file" name="avatarImage">
		</div>
		<p class="profileTxtLogin"></p>
		<textarea type="text" name="selfDescription" placeholder="Расскажите о себе"></textarea>	
		<input type="submit" value="Изменить" name="bt">
	</form>  -->
<!-- обеспечиваем процесс загрузки -->


<?php
$uploaddir = 'img/';
$uploadfile = $uploaddir . basename($_FILES['avatarImage']['name']);
// phpinfo();
echo '<pre>';
if (move_uploaded_file($_FILES['avatarImage']['tmp_name'], $uploadfile)) {
    echo "Файл корректен и был успешно загружен.\n";
} else {
    echo "Возможная атака с помощью файловой загрузки!\n";
}

echo 'Некоторая отладочная информация:';
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