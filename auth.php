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
		if (!empty($_GET['code'])) {
			// Отправляем код для получения токена (POST-запрос).
			$params = array(
				'client_id'     => '750553492509-1dign9pfurg6k9r9mt0jm85tbqsasaqa.apps.googleusercontent.com',
				'client_secret' => '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',
				'redirect_uri'  => 'http://localhost/chat/auth.php',
				'grant_type'    => 'authorization_code',
				'code'          => $_GET['code']
			);	
					
			$ch = curl_init('https://accounts.google.com/o/oauth2/token');
			curl_setopt($ch, CURLOPT_POST, 1);
			curl_setopt($ch, CURLOPT_POSTFIELDS, $params); 
			curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
			curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
			curl_setopt($ch, CURLOPT_HEADER, false);
			$data = curl_exec($ch);
			curl_close($ch);	
			$data = json_decode($data, true);
			if (!empty($data['access_token'])) {
				// Токен получили, получаем данные пользователя.
				$params = array(
					'access_token' => $data['access_token'],
					'id_token'     => $data['id_token'],
					'token_type'   => 'Bearer',
					'expires_in'   => 3599
				);
		 
				$info = file_get_contents('https://www.googleapis.com/oauth2/v1/userinfo?' . urldecode(http_build_query($params)));
				$info = json_decode($info, true);
				echo '<img src="'.$info["picture"].'">';
				echo '<p>'.$info["verified_email"].'</p>';
				echo '<p>'.$info["name"].'</p>';
				echo '<p>'.$info["given_name"].'</p>';
				echo '<p>'.$info["family_name"].'</p>';
				echo '<p>'.$info["email"].'</p>';
				echo '<p>'.$info["locale"].'</p>';
				echo '<p>'.md5($info["email"]).'</p>';

				// echo 'cookie="'.md5($info["email"]).'"';
				// echo 'login="'.$info['email'].'"';
				setcookie($info['email'], md5($info["email"]));

				
				// print_r ($info);
				// Array ( [id] => 102732370544640287792 [email] => vpolonsky5@gmail.com [verified_email] => 1 [name] => Всеволод Полонский [given_name] => Всеволод [family_name] => Полонский [picture] => https://lh3.googleusercontent.com/a/AItbvmnkrYvRkDNx4kJgDKy0OjbKOd9W3pU3aWxBGQ63=s96-c [locale] => ru ) 
				$sql= 'INSERT INTO `user`( `login`, `cookie`, `token`) VALUES ("'.$info["email"].'", "'.md5($info["email"]).'", "1")';
				$result = mysqli_query($link, $sql);
				if(!$result){
					$sql = 'SELECT id FROM user where login="'.$info['email'].'"';
					$result = mysqli_query($link, $sql);
					while ($row = mysqli_fetch_assoc($result)) {
						$id = $row["id"];
					}
				}else{
					// берем последнее значение id в таблице user которое должны знать для добавление нового пользователя
					$sql = 'SELECT MAX(id) as id FROM user';
					$result = mysqli_query($link, $sql);
					while ($row = mysqli_fetch_assoc($result)) {
						$id = $row["id"];
					}
				}

				$sql =  'INSERT INTO `user_info`(`user`, `url`, `description`, `name`, `family_name`, `email`) VALUES ('.$id.', "'.$info["picture"].'", "напишите информацию о себе", "'.$info["name"].'", "'.$info["family_name"].'", "'.$info["email"].'")';
				$result = mysqli_query($link, $sql);

				// echo $sql;
				header("Location: http://localhost/chat/index.php"); 
				exit();

			}
		}
		else{
			$params = array(
				'client_id'     => '750553492509-1dign9pfurg6k9r9mt0jm85tbqsasaqa.apps.googleusercontent.com',
				'redirect_uri'  => 'http://localhost/chat/auth.php',
				'response_type' => 'code',
				'scope'         => 'https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile',
				'state'         => '123'
			);
			 
			$url = 'https://accounts.google.com/o/oauth2/auth?' . urldecode(http_build_query($params));
			echo '<a href="' . $url . '">Авторизация через Google</a>';
		}
	}
?>