class ButtonChangeUser extends Button
{
	constructor(...args)
	{
		super(...args)
	}
	changeUser(name, email, department, id)
	{
		let data = 'name='+name+'&email='+ email+'&department='+ department+'&change=1' +  '&id='+id+'', 
		sendUserData = send('POST', 'http://localhost/chat/admin/admin_manager_users.php', data, "text");
		sendUserData.then(function(message)
			{
				if (message == 200)
				{
					mainContent.addEmploye(name, email, department, id);
				}
			}
		)
	}
}