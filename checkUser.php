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
		if ( !empty($_POST['cookie']) && empty($_POST['background']) ) {
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
		elseif (!empty($_POST['background']) && !empty($_POST['cookie'])) {
			$sql = 'SELECT id FROM `user` WHERE login="'.$_POST['login'].'" and cookie="'.$_POST['cookie'].'"';
			$result = mysqli_query($link, $sql);
			// тут перебираются все поля, которые есть в запросе
			while ($row = mysqli_fetch_assoc($result)) {
					$user_id = $row["id"];
			}
			echo $user_id;
		}
		elseif (!empty($_POST['background']) && !empty($_POST['user_id'])) {
			$sql = 'SELECT name, id, checked FROM `backgrounds` WHERE user='.$_POST['user_id'].'';
			$result = mysqli_query($link, $sql);
			// этот метод выбирает только одну строку, а нам нужны все строки. То есть сделать ассоциативный массив
			$backgrounds = array();
			$i = 0;
			while ($row = mysqli_fetch_assoc($result))
			{
				$backgrounds["name".$i++] =  array('name' => $row["name"], 'id' => $row['id'], 'checked' => $row['checked']);


			}
			echo json_encode($backgrounds);
			
		}
	}
?>  
<!DOCTYPE html>
<html>	
	<head>
		<title>
			chat
		</title>
		<meta charset="utf-8">
		<link rel="stylesheet" type="text/css" href="css/checkUser/checkUser.css">
		<link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
	</head>  
	<body>
		<script type="text/javascript" src="js/variables.js"></script>
		<script type="text/javascript" src="js/functions.js"></script>

		<script type="text/javascript" src="js/modules/MVC/view/DOM/Tag.js"></script>
		<script type="text/javascript" src="js/modules/MVC/view/DOM/Div.js"></script>
		<script type="text/javascript" src="js/modules/MVC/view/DOM/Elem.js"></script> <!--Необходимо откорректировать (файлы: Avatar.js, )-->
		<script type="text/javascript" src="js/modules/MVC/view/DOM/Form.js"></script>
		<script type="text/javascript" src="js/modules/MVC/view/DOM/Img.js"></script>
		<script type="text/javascript" src="js/modules/MVC/view/DOM/Input.js"></script>
		<script type="text/javascript" src="js/modules/MVC/view/DOM/Button.js"></script>
		<script type="text/javascript" src="js/modules/MVC/view/DOM/Link.js"></script>
		<script type="text/javascript" src="js/modules/MVC/view/DOM/P.js"></script>
		<script type="text/javascript" src="js/modules/MVC/view/DOM/Select.js"></script>
		<script type="text/javascript" src="js/modules/MVC/view/DOM/Textarea.js"></script>

		<script type="text/javascript" src="js/modules/MVC/view/UI/Avatar.js"></script>
		<script type="text/javascript" src="js/modules/MVC/view/UI/ProfileAvatar.js"></script>
		<script type="text/javascript" src="js/modules/MVC/view/UI/LockUnlockDepartment.js"></script>

		<script type="text/javascript" src="js/modules/MVC/view/UI/ButtonAddNewUser.js"></script>
		<script type="text/javascript" src="js/modules/MVC/view/UI/ButtonChangeUser.js"></script>
		<script type="text/javascript" src="js/modules/MVC/view/UI/Department.js"></script>
		<script type="text/javascript" src="js/modules/MVC/view/UI/DepartmentDescription.js"></script>
		<script type="text/javascript" src="js/modules/MVC/view/UI/DepartmentEmplBlock.js"></script>
		<script type="text/javascript" src="js/modules/MVC/view/UI/Departments.js"></script>
		<script type="text/javascript" src="js/modules/MVC/view/UI/EmployeesRow.js"></script>
		<script type="text/javascript" src="js/modules/MVC/view/UI/Modal.js"></script>
		<script type="text/javascript" src="js/modules/MVC/view/UI/ModalAddChange.js"></script>
		<script type="text/javascript" src="js/modules/MVC/view/UI/ModalAddEmpl.js"></script>
		<script type="text/javascript" src="js/modules/MVC/view/UI/SideBar.js"></script>
		<script type="text/javascript" src="js/modules/MVC/view/UI/TopBar.js"></script>
		

		<!-- <script type="text/javascript" src="js/module.js"></script> -->
		<script type="text/javascript" src="js/mainContentDepartments.js"></script>
		<script type="text/javascript" src="js/MainContentEmployees.js"></script>
		<script type="text/javascript" src="js/checkUser.js"></script>
	</body>
</html>