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
				xhr.responseType = "json";
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
function checkWriting()
{
	data = 'login='+login+'&writing=1 ', 
	sendMessage = send('POST', 'http://localhost/chat/chat.php', data);
}