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
		
		if( isset($_POST['id']) && isset($_POST['employs_list']))
		{

					
			$sql = 'SELECT * FROM `admin_manager_users` WHERE department='.$_POST['id'].'';
			$result = mysqli_query($link, $sql);
			$employs = array();
			$i = 0;
			while ($row = mysqli_fetch_assoc($result)) {
				$employs[$i++] = array('name' => $row['name'], 'email' => $row['email']);
			}
			echo json_encode($employs);


		}

		



	}
?> 
