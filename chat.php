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
	// isset() — определяет, была ли установлена переменная c с данным значением чере post-запрос
	if(isset($_POST['login']) && !isset($_POST['message']) && !isset($_POST['writing']) && !isset($_POST['check_writing']) && !isset($_POST['getidfromdb'])) //если есть только логин и нет всего остального
	{
		if( !isset($_POST['geturlavatar']))
		{
			$switch_user_info = 1;

			// создание нового пользователя в таблице user (выполняется 1 раз)
			$sql = 'insert into user (login, cookie, token) values("'.$_POST['login'].'", "'.$_POST['login'].'", 1)'; 
			$result = mysqli_query($link, $sql);

			// если логин не пустой, устанавливаем куки
			if($_POST["login"] != "")
			{
				setcookie('login', $_POST['login']);
			}
			echo $sql;

			// берем последнее значение id в таблице user которое должны знать для добавление нового пользователя
			$sql = 'SELECT MAX(id) as id FROM user';
			$result = mysqli_query($link, $sql); 
			while ($row = mysqli_fetch_assoc($result)) {
				$id = $row["id"];
			}

			//работаем с переменной switch_user_info
			$sql = 'SELECT count(user) as count FROM user_info where user='.$id.'';
			$result = mysqli_query($link, $sql);
			while ($row = mysqli_fetch_assoc($result)) {
				$switch_user_info = $row["count"];
			}
			
			if ($switch_user_info==0)
			{
				// добавление ссылки в user_info
				$sql =  'INSERT INTO `user_info`(`user`, `url`, `description`, `name`, `family_name`, `email`) VALUES ('.$id.', "https://clck.ru/ak7qx", "напишите информацию о себе", 1, 1, 1)';
				$result = mysqli_query($link, $sql);
			}	
			if(isset($_POST['login']) && isset($_POST['getidfromdb']))
			{
				$sql = 'SELECT id FROM `user` WHERE login = "'.$_POST['login'].'"';
				$result = mysqli_query($link, $sql);
				while ($row = mysqli_fetch_assoc($result)) 
				{
					echo $row["id"]; 
				}
			}
		}
		if(isset($_POST['login']) && isset($_POST['geturlavatar']))
		{
			$sql = 'SELECT url FROM `user_info` WHERE user = '.$_POST['geturlavatar'].'';
			$result = mysqli_query($link, $sql);
			while ($row = mysqli_fetch_assoc($result)) 
			{
				echo $row["url"]; 
			}
		}
	}
	else
	{
			
		if(isset($_POST['login']) && isset($_POST['message']) && !isset($_POST['edit']))
		{
			$sql = 'insert into messages (login, message) values("'.$_POST['login'].'", "'.$_POST['message'].'")'; 
			$result = mysqli_query($link, $sql);
			$sql = 'delete from writing where login = "'.$_POST['login'].'"';
			$result = mysqli_query($link, $sql);
			
			// mysqli_free_result($result);
			$sql = 'select * from messages';
			$result = mysqli_query($link, $sql);
			$i = 0;
			$arr1 = array( );
			while ($row = mysqli_fetch_assoc($result)) 
			{
				$arr1 += array("login".$i=>$row['login'], "message".$i=>$row['message'], "date".$i=>$row['date'], "id".$i=>$row['id']);
				$i++;
			};
			echo json_encode($arr1);
			// mysql_free_result($result);
		}
		elseif (isset($_POST['messages']) && !isset($_POST['edit'])) 
		{
			$sql = 'select * from messages';
			$result = mysqli_query($link, $sql);
			$i = 0;
			$arr1 = array( );
			while ($row = mysqli_fetch_assoc($result)) 
			{
				
				$arr1 += array("login".$i=>$row['login'], "message".$i=>$row['message'], "date".$i=>$row['date'], "id".$i=>$row['id']);
				
				$i++;
			};
			echo json_encode($arr1);
		}
		elseif (isset($_POST['writing']) && !isset($_POST['edit'])) 
		{
			$sql = 'insert into writing (login) values("'.$_POST['login'].'")'; 
			$result = mysqli_query($link, $sql);

		}
		elseif (isset($_POST['check_writing']) && !isset($_POST['edit'])) 
		{
			$sql = 'select login from writing';
			$result = mysqli_query($link, $sql);
			$i = 0;
			$arr1 = array( );
			while ($row = mysqli_fetch_assoc($result)) 
			{
				$arr1 += array("login".$i=>$row['login']);
				$i++;
			};
			echo json_encode($arr1);
		}
		elseif(isset($_POST['login']) && isset($_POST['message']) && isset($_POST['edit']) && isset($_POST['id']))
		{
			$sql = 'UPDATE messages SET message="'.$_POST['message'].'" WHERE id = '.$_POST['id'];
			$result = mysqli_query($link, $sql);
			

		}
	}
	
}
mysqli_close($link);
?>
