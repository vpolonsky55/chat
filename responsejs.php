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
	if( isset($_POST['login']) && isset($_POST["getUserId"]))
	{
		$user_id = -1;
		$sql = 'SELECT id FROM `user` WHERE login="'.$_POST['login'].'"';
		$result = mysqli_query($link, $sql);
		while ($row = mysqli_fetch_assoc($result)) {
				$user_id = $row["id"];
		}
		echo $user_id; 
	}
	if( isset($_POST['login']) && isset($_POST["getUserUrl"]))
	{
		$user_url = "";
		$sql = 'SELECT url FROM `user_info` WHERE user='.$_POST['getUserUrl'].'';
		$result = mysqli_query($link, $sql);
		while ($row = mysqli_fetch_assoc($result)) {
				$user_url = $row["url"];
		}
		echo $user_url; 
	}
}
?>