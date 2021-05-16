function send(method, url, data)
{
	return new Promise((resolve, reject) => 
		{
			setTimeout(function()
			{
				let xhr = new XMLHttpRequest()
				xhr.open(method, url, true);
				xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
				xhr.responseType = "json"
				xhr.onload = () => 
				{
					if(xhr.status == 400)
					{
						reject("ошибка")
					}
					else
					{
						resolve(xhr.response)
					}
				}
				xhr.send(data)
			}, 30)
		}
	)
}
function addClass(p, i, listMessages, login, selector)
{
	if (listMessages[`login${i}`] == login) 
	{
		p[p.length-1].obj.classList.add(selector);
		// console.log('меняем цвет')
	}
}
let field = {},
printField = {}, //дополнительная переменная для блокс с текстом "печатает"
printFieldTxt = {},
textarea = {},
fieldBlock = [],
login = "",
p = [],
click = 0
clickWhile = 0; 
document.querySelectorAll('input')[2].addEventListener('click', function (event) 
	{
		click = 1
		let form = document.querySelector('form'),
		smTh = document.querySelectorAll('input')[0],
		smTh2 =  document.querySelectorAll('input')[1],
		data = 'login='+smTh.value+'&something2='+smTh2.value, 
		query = send('POST', 'http://localhost/chat/chat.php', data);
		query.then((d) => 
			{
				if (document.cookie !== "") 
				{
					form.parentElement.removeChild(form);
					field = new Div(document.body, ".field"),

					textarea = new Textarea(document.body, ".textarea");
					textarea.addEvent("keydown", function(event)
						{
							if(event.keyCode == 13)
							{
								// console.log("до цикла", field.obj.children.length) // 1 тест на количество дочерних элементов
								while (field.obj.children.length !== 0) 
								{
									field.obj.removeChild(field.obj.firstChild) // удаление всех дочерних элементов в поле
								}
								// console.log("после цикла", field.obj.children.length) // 2 тест на количество дочерних элементов

								login = document.cookie.split("=")[1],
								text = textarea.getText(),
								data = 'login='+login+'&message='+text, 
								sendMessage = send('POST', 'http://localhost/chat/chat.php', data);
								event.preventDefault();
								// console.log(sendMessage);
								sendMessage.then(function(listMessages)  
									{
										textarea.obj.value = null;
										let lengthMessages = Object.keys(listMessages).length/4; //делим на 4 так как появился еще одно поле id
									console.log(data)	
										for (let i = 0; i < lengthMessages; i++) 
										{

											fieldBlock.push(new Div (document.querySelector('.field'), (login==`${listMessages[`message${i}`]}`)? '.myFieldBlock':'.fieldBlock', listMessages[`id${i}`]));
											console.log(login, `${listMessages[`message${i}`]}`)											
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
											// console.log("в конце всего", field.obj.children.length) // 3 тест на количество дочерних элементов								
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
)
function checkWriting()
{
	data = 'login='+login+'&writing=1 ', 
	sendMessage = send('POST', 'http://localhost/chat/chat.php', data);
}
function behavior(id, obj)
{
	let textMessage = obj.querySelectorAll("p")[1].innerText;
	textarea.insertText(textMessage);

}
function chatUpdate()
{
	let data = 'messages=1', 
	login = document.cookie.split("=")[1],
	sendMessage = send('POST', 'http://localhost/chat/chat.php', data),
	indexForMyBlock = 0, oldMyI = 0, otherI = 0;
	sendMessage.then(function(massage)
		{
			let lengthMessages = Object.keys(massage).length/4, //делим на 4, а не на 3, так как появилось еще одно поле id
			lengthCurrentMessages = document.querySelectorAll(".field div").length;
			if(lengthMessages > lengthCurrentMessages)
			{
				// console.log(lengthCurrentMessages)
				while (field.obj.children.length !== 0) 
				{
					field.obj.removeChild(field.obj.firstChild) // удаление всех дочерних элементов в поле
				}
				
				for (let i = 0; i < lengthMessages; i++) 
				{	
					fieldBlock.push(new Div (document.querySelector('.field'), (login==massage[`login${i}`])? '.myFieldBlock':'.fieldBlock', massage[`id${i}`]));
					console.log(login,  massage[`login${i}`], login==massage[`login${i}`])
					if (login == massage[`login${i}`]) 
					{
						fieldBlock[fieldBlock.length-1].setListener(behavior);
					}
					let className = '.fieldBlock';
					if (document.querySelectorAll('.fieldBlock')[otherI]===undefined)
					{
						className = '.myFieldBlock';
						indexForMyBlock = oldMyI++;
					}
					else
					{
						className = '.fieldBlock';
						indexForMyBlock = otherI++;
					}

					console.log("test value",document.querySelectorAll(className)[indexForMyBlock],indexForMyBlock)
					p.push(new P (document.querySelectorAll(className)[indexForMyBlock], '.field__txt'));
					p[p.length - 1].obj.innerText = `${massage[`login${i}`]}`;
					addClass(p, i, massage, login, "myLogin")
					addClass(fieldBlock, i, massage, login, className)
					
					p.push(new P (document.querySelectorAll(className)[indexForMyBlock], '.field__txt'));
					p[p.length - 1].obj.innerText = `${massage[`message${i}`]}`;
					addClass(p, i, massage, login, "myMessage")

					p.push(new P (document.querySelectorAll(className)[indexForMyBlock], '.field__txt'));
					p[p.length - 1].obj.innerText = `${massage[`date${i}`]}`;
					addClass(p, i, massage, login, "date")

				}
			}
		}
	)
}

let loop = setInterval(function()
{
	
	if(click)
	{
		setInterval("chatUpdate()", 1000)
		setTimeout(() => document.querySelector("body").scrollIntoView(false), 1500)
		clearInterval(loop)
	}	
}, 1000)
// сформировать сообщение, когда кто-то набирает текст
 
 