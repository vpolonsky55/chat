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
		if (isset($_POST['deleteImgFromBG']) && isset($_POST['idImgForDelete'])  && isset($_POST['filePath'])) {
			$sql = 'DELETE FROM `backgrounds` WHERE id=%d'; 
			$query=sprintf($sql, $_POST['idImgForDelete']);
			$result = mysqli_query($link, $query);

			if ($result == true)
			{
				$dell=unlink($_POST['filePath']); //Удаление файла из папки 
				echo "deleted";
			}
			else
			{
				echo "file is not deleted from DB";
			}
		}
	}
?>