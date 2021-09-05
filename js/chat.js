let smiles = {
	":)":"😀",
	":D":"😁",
},
screen = {
	":)" : /:\)/,
	":D":":D",
},
retEm={};
function createReplace(){
	let keys = Object.keys(smiles),
	values = Object.values(smiles);
	for (let i = keys.length-1; i >= 0; i--) 
	{
		retEm[values[i]] = keys[i];
	}
}
createReplace();
function replaceSmile(mess, arg){


	 if (arg) 
	 {
		for (let smileChar in smiles)
		{
		 		mess = mess.replace(new RegExp (screen[smileChar], 'g'), smiles[smileChar])
		}
 	}
 	else
	{
		for (let smileChar in retEm)
		{
		 console.log(smileChar)
	 		mess = mess.replace(new RegExp (smileChar, 'g'), retEm[smileChar])
		}
	}
	 return mess
}
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
	selector = selector.slice(1);
	let element = p[p.length-1].obj.classList.contains(selector);
	if ((listMessages[`login${i}`] == login)&&(element)) 
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
					console.log(data)
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
								// console.log(sendMessage);
								sendMessage.then(function(listMessages)  
									{
										textarea.obj.value = null;
										let lengthMessages = Object.keys(listMessages).length/4; //делим на 4 так как появился еще одно поле id
									console.log(data)	
										for (let i = 0; i < lengthMessages; i++) 
										{
											console.log(listMessage[`id${i}`])
											fieldBlock.push(new Div (document.querySelector('.field'), (login==`${listMessages[`message${i}`]}`)? `#${listMessages[`id${i}`]} .myFieldBlock `:`#${listMessages[`id${i}`]} .fieldBlock`));
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
function checkWriting()
{
	data = 'login='+login+'&writing=1 ', 
	sendMessage = send('POST', 'http://localhost/chat/chat.php', data);
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
				while (field.obj.children.length !== 0) 
				{
					field.obj.removeChild(field.obj.firstChild) // удаление всех дочерних элементов в поле
				}
				
				for (let i = 0; i < lengthMessages; i++) 
				{	
					fieldBlock.push(new Div (document.querySelector('.field'), (login==massage[`login${i}`])? `#id${massage[`id${i}`]} .myFieldBlock `:`#id${massage[`id${i}`]} .fieldBlock`));
					
					fieldBlock[i].obj.addEventListener("click", function(event)
					{
						let idBlock = this.id;
						// console.log(idBlock)
						if( (document.querySelector(".modalBlock") == null) && (document.querySelector('#'+this.id).className == "myFieldBlock") )
						{
							modalBlock = new Modal(document.querySelector('body'), ".modalBlock", ".modWin", ".modBtn", ".modPrgr", ".modTxa");
							document.querySelector(".modPrgr").innerText = "редактирование сообщения";
							let text = this.querySelectorAll("p")[1].innerText;
							text = replaceSmile(text, 0)
							console.log(text)
							modalBlock.setText(text);

							document.querySelector(".modBtn").addEventListener("click", function(e)
								{
									/*удаление элементов модального окна*/
									modalBlock.modRem();
								}
							)
							modalBlock.textarea.obj.addEventListener('keydown', function(e)
								{
									if(e.keyCode == 13)
									{
										let	login = document.cookie.split("=")[1],
										changeText = modalBlock.getText(),
										edit = 1,
										data = 'login='+login+'&message='+changeText+'&edit='+edit+'&id='+idBlock.slice(2);
										sendChMessage = send('POST', 'http://localhost/chat/chat.php', data);

										sendChMessage.then(function(chMes)  
											{
												document.querySelector("#"+idBlock).querySelectorAll("p")[1].innerText = replaceSmile(changeText,1);
											}
										)
										modalBlock.modRem();
									}
								}
							)							
						}
					}
					)
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

					// console.log("test value",document.querySelectorAll(className)[indexForMyBlock],indexForMyBlock)
					// console.log(massage[`id${i}`])
					p.push(new P (document.querySelectorAll(className)[indexForMyBlock], '.field__txt'));
					p[p.length - 1].obj.innerText = `${massage[`login${i}`]}`;
					addClass(p, i, massage, login, "myLogin")
					addClass(fieldBlock, i, massage, login, className)
					
					p.push(new P (document.querySelectorAll(className)[indexForMyBlock], '.field__txt'));
					p[p.length - 1].obj.innerText = replaceSmile(`${massage[`message${i}`]}`, 1);
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
	
	if(click || document.cookie != "")
	{
		setInterval("chatUpdate()", 1000)
		setTimeout(() => document.querySelector("body").scrollIntoView(false), 1400)
		clearInterval(loop)
	}	
}, 1000)

// сформировать сообщение, когда кто-то набирает текст
 
 