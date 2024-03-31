class ButtonAddNewUser extends Button
{
	constructor(...args)
	{
		super(...args)
	}
	addUser(name, email, department)
	{
		let data = 'name='+name+'&email='+ email+'&department='+ department+'&add=1',
		sendUserData = send('POST', 'http://localhost/chat/admin/admin_manager_users.php', data, "text");
		sendUserData.then(function(message)
			{
				if (message == 200)
				{
					let data = 'lastId=1',
					getDataId = send('POST', 'http://localhost/chat/admin/admin_manager_users.php', data, "text");
					sendUserData.then(function(id)
						{
							mainContent.addEmploye(name, email, department, id); 
						}
					)
				}
			}
		)
	}
}