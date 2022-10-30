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
		if (!empty($_POST['cookie'])) {
			$sql = 'SELECT COUNT(id) as id FROM `user` WHERE login="'.$_POST['login'].'" and cookie="'.$_POST['cookie'].'"';
			$result = mysqli_query($link, $sql);
			while ($row = mysqli_fetch_assoc($result)) {
					$user_exist = $row["id"];
			}
			if ($user_exist==1)
			{
				echo 1;
			}
			else
			{
				echo 0;
			}
		}
	}
?>