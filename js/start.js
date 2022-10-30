
function start(data)
{
	let form = document.querySelector('form'),
		smTh = document.querySelectorAll('input')[0],
		smTh2 =  document.querySelectorAll('input')[1],
		query = send('POST', 'http://localhost/chat/chat.php', data);
		query.then((d) => 
			{
				// если куки не пустые
				if (document.cookie !== "") // возможно это условие не очень нужно
				{
					//удаление формы 
					form.parentElement.removeChild(form);

					avatar = new Avatar(document.body, ".avatar", ".avatarDet", ".avatarSum", ".avatarImg", ".avatarItem",smTh.value)
					field = new Div(document.body, ".field");
					textarea = new Textarea(document.body, ".textarea");
					


					let loginName = document.cookie.split("=")[0]
					data = 'login='+loginName+'&getUserId=1 ', 
					sendMessage = send('POST', 'http://localhost/chat/responsejs.php', data);
					sendMessage.then(function(id)
						{
							let post = 'login='+loginName+'&getUserUrl='+id+'', 
							getMessage = send('POST', 'http://localhost/chat/responsejs.php', post, "html");

							getMessage.then(function(url)
								{
									// console.log(url)
									document.querySelector(".avatarImg").src=url
									// console.log(document.querySelector(".profileImg").src)
								}
							)
						}
					)

					/*Здесь необходимо написать код, который будет подставлять адрес ссылки в метод setSrc*/
					textarea.addEvent("keydown", function(event)
						{
							if(event.keyCode == 13)
							{
								while (field.obj.children.length !== 0) 
								{
									field.obj.removeChild(field.obj.firstChild) // удаление всех дочерних элементов в поле
								}

								
								login = document.cookie.split("=")[0],
								text = textarea.getText(),
								data = 'login='+login+'&message='+text, 
								sendMessage = send('POST', 'http://localhost/chat/chat.php', data);
								event.preventDefault(); /*отключение переноса на следующую строку*/
								sendMessage.then(function(listMessages)  
									{
										textarea.obj.value = null;
										let lengthMessages = Object.keys(listMessages).length/4; //делим на 4 так как появился еще одно поле id

										for (let i = lengthMessages-16; i < lengthMessages; i++) 
										{	
											fieldBlock.push(new Div (document.querySelector('.field'), (login==`${listMessages[`message${i}`]}`) ?`#${listMessages[`id${i}`]} .myFieldBlock `:`#${listMessages[`id${i}`]} .fieldBlock`, listMessages[`id${i}`], listMessages[`id${i}`]));
											indexBlock=i-(lengthMessages-16)
											p.push(new P (document.querySelectorAll('.fieldBlock')[indexBlock], '.field__txt'));
											p[p.length - 1].obj.innerText = `${listMessages[`login${i}`]}`;
											addClass(p, i, listMessages, login, "myLogin")
											addClass(fieldBlock, i, listMessages, login, "myFieldBlock")
											p.push(new P (document.querySelectorAll('.fieldBlock')[indexBlock], '.field__txt'));
											p[p.length - 1].obj.innerText = `${listMessages[`message${i}`]}`;
											addClass(p, i, listMessages, login, "myMessage")

											p.push(new P (document.querySelectorAll('.fieldBlock')[indexBlock], '.field__txt'));
											p[p.length - 1].obj.innerText = `${listMessages[`date${i}`]}`;
											addClass(p, i, listMessages, login, "date")

										}
									}
								)
							} 
							else if(event.keyCode !== 13)
							{
								login = document.cookie.split("=")[0],
								data = 'login='+login+'&writing=1 ', 
								sendMessage = send('POST', 'http://localhost/chat/chat.php', data);
							}
						}
					)
				}

			}
	 	)
} 
document.body.onload = start(document.cookie)
window.onload=function()
{
	let cookie = document.cookie.split("="), 
	login=cookie[0],
	hesh=cookie[1],
	data = `login=${login}&cookie=${hesh}`, 
	sendMessage = send('POST', 'http://localhost/chat/checkUser.php', data);
	sendMessage.then(function(userExist)
		{
			if(userExist)
			{
				start(data)
			}
		}

	)

	// if (document.cookie == "vpolonsky5@gmail.com=139c4a43fb5870137f476e7a2a09a6f1" )
	// {
	// 	start(data);
	// } 
	// else
	// {
	// 	location="http://localhost/chat/auth.php"		
	// }
	
}
// document.querySelectorAll('input')[2].addEventListener('click', function (event) 
// 	{
// 		click = 1
// 		let form = document.querySelector('form'),
// 		smTh = document.querySelectorAll('input')[0],
// 		smTh2 =  document.querySelectorAll('input')[1], 
// 		data = 'login='+smTh.value+'&something2='+smTh2.value;

// 		start(data);
// 	}
// )