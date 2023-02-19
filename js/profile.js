
function checkCookies()
{
	let user = document.cookie.split(";")[0].split("="),
	loginPost = user[0],
	avatar = new ProfileAvatar(document.body, ".avatar", ".avatarDet", ".avatarSum", ".avatarImg", ".avatarItem",loginPost)
	loginCookie = user[1],
	data = 'login='+loginPost+'&cookie='+ loginCookie,
	sendCookies = send('POST', 'http://localhost/chat/checkUser.php', data)
	sendCookies.then(function(massage)
		{
			if (massage==1) 
			{
				let profileTxtAbout = document.querySelector(".profileTxtAbout"),
				selfDescription = document.querySelector(".selfDescription");
				if (document.querySelector(".profileTxtLogin")) 
				{
					document.querySelector(".profileTxtLogin").innerText=loginPost
				}
			}
		}
	)
	
}
checkCookies()