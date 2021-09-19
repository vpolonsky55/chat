
function start(data)
{
	let form = document.querySelector('form'),
		smTh = document.querySelectorAll('input')[0],
		smTh2 =  document.querySelectorAll('input')[1],
		query = send('POST', 'http://localhost/chat/chat.php', data);
		query.then((d) => 
			{
				if (document.cookie !== "") 
				{
					form.parentElement.removeChild(form);
					field = new Div(document.body, ".field");
					textarea = new Textarea(document.body, ".textarea");
					textarea.addEvent("keydown", function(event)
						{
							if(event.keyCode == 13)
							{
								while (field.obj.children.length !== 0) 
								{
									field.obj.removeChild(field.obj.firstChild) // удаление всех дочерних элементов в поле
								}

								login = document.cookie.split("=")[1],
								text = textarea.getText(),
								data = 'login='+login+'&message='+text, 
								sendMessage = send('POST', 'http://localhost/chat/chat.php', data);
								event.preventDefault(); /*отключение переноса на следующую строку*/
								sendMessage.then(function(listMessages)  
									{
										textarea.obj.value = null;
										let lengthMessages = Object.keys(listMessages).length/4; //делим на 4 так как появился еще одно поле id
										for (let i = 0; i < lengthMessages; i++) 
										{
											fieldBlock.push(new Div (document.querySelector('.field'), (login==`${listMessages[`message${i}`]}`)? `#${listMessages[`id${i}`]} .myFieldBlock `:`#${listMessages[`id${i}`]} .fieldBlock`));
											p.push(new P (document.querySelectorAll('.fieldBlock')[i], '.field__txt'));
											p[p.length - 1].obj.innerText = `${listMessages[`login${i}`]}`;
											addClass(p, i, listMessages, login, "myLogin")
											addClass(fieldBlock, i, listMessages, login, "myFieldBlock")
											p.push(new P (document.querySelectorAll('.fieldBlock')[i], '.field__txt'));
											p[p.length - 1].obj.innerText = `${listMessages[`message${i}`]}`;
											addClass(p, i, listMessages, login, "myMessage")

											p.push(new P (document.querySelectorAll('.fieldBlock')[i], '.field__txt'));
											p[p.length - 1].obj.innerText = `${listMessages[`date${i}`]}`;
											addClass(p, i, listMessages, login, "date")

										}
									}
								)
							} 
							else if(event.keyCode !== 13)
							{
								login = document.cookie.split("=")[1],
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
document.querySelectorAll('input')[2].addEventListener('click', function (event) 
	{
		click = 1
		let form = document.querySelector('form'),
		smTh = document.querySelectorAll('input')[0],
		smTh2 =  document.querySelectorAll('input')[1], 
		data = 'login='+smTh.value+'&something2='+smTh2.value;

		start(data);
	}
)