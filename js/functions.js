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

function send(method, url, data, typeResponse="json")
{
	return new Promise((resolve, reject) => 
		{
			const TIME_BEFORE_SENDING = 30;
			setTimeout(function()
			{	
				const ERROR_RESPONSE_FROM_SERVER = 400;
				const ASYNCRONOUS_REQUEST = true;
				const HEADER_CONTENT_TYPE = 'Content-Type';
				const DATA_TYPE_URL_ENCODED = 'application/x-www-form-urlencoded';
				const TEXT_EROR = "ошибка";

				let connectWithServer = new XMLHttpRequest();
				connectWithServer.open(method, url, ASYNCRONOUS_REQUEST);
				connectWithServer.setRequestHeader(HEADER_CONTENT_TYPE, DATA_TYPE_URL_ENCODED); 
				connectWithServer.responseType = typeResponse;
				connectWithServer.onload = () => 
				{
					if(connectWithServer.status == ERROR_RESPONSE_FROM_SERVER)
					{
						reject(TEXT_EROR);
					}
					else
					{
						resolve(connectWithServer.response);
					}
				}
				connectWithServer.send(data);
			}, TIME_BEFORE_SENDING);
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