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
		if( isset($_POST['name']) && isset($_POST['email']) && isset($_POST['department']) && isset($_POST['add']))
		{

			// создание нового пользователя в таблице user (выполняется 1 раз)
			$sql = 'insert into admin_manager_users (name, email, department) values("'.$_POST['name'].'", "'.$_POST['email'].'", "'.$_POST['department'].'")'; 
			$result = mysqli_query($link, $sql);
			
			$sql = 'SELECT COUNT(id) AS result FROM `admin_manager_users` WHERE name="'.$_POST['name'].'" AND email="'.$_POST['email'].'" AND department="'.$_POST['department'].'" ';
			$result = mysqli_query($link, $sql);

			while ($row = mysqli_fetch_assoc($result)) {
				if ($row["result"] > 0)
				{
					echo 200;
				}
				else
				{
					echo "error";
				}
			}
		}
		if (isset($_POST['getAllEmploys']))
		{
			$sql = 'SELECT name, email, department FROM `admin_manager_users`';
			$result = mysqli_query($link, $sql);
			$users = array();
			while ($row = mysqli_fetch_assoc($result)) {
				$users[] = array("name" => $row["name"], "email" => $row["email"], "department" => $row["department"]);
			}
			echo json_encode($users);

		}

	}
?>  
