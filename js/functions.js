const INDEX_OUT_OF_RANGE = 1;
const FIRST_INDEX = 0;
const GLOBAL_FIND = 'g';

let emojis = {
	":)":"😀",
	":D":"😁",
},
screenEmojis = {
	":)" : /:\)/,
	":D":":D",
},
returnEmojis = {};

function createReplaceEmoji(){
	let emojisKeys = getKeys(emojis),
	emojisValues = getValues(emojis),
	lastIndexOfEmojisKeys = emojisKeys.length - INDEX_OUT_OF_RANGE; 

	for (let cuurentEmojisIndex = lastIndexOfEmojisKeys; cuurentEmojisIndex >= FIRST_INDEX; cuurentEmojisIndex--) 
	{
		let emojiKeyValue = emojisValues[cuurentEmojisIndex];
		returnEmojis[emojiKeyValue] = emojisKeys[cuurentEmojisIndex];
	}
}

let getKeys = assocArray => Object.keys(assocArray);
let getValues = assocArray => Object.values(assocArray);

createReplaceEmoji();

class RegularExpressions
{
	constructor(string, expression)
	{
		this.regularExpressions = new RegExp (string, expression);
	}

	replace(whatToReplace, substitute)
	{
		return whatToReplace.replace(this.regularExpressions, substitute)
	}
}

function replaceSmile(message, arg)
{
	if (arg) 
	{
		for (let emojisChar in emojis)
		{
			let emojiValue = screenEmojis[emojisChar];
			let currentEmojiSimbol = emojis[emojisChar];
			let allCurrentEmojiScreensInText = new RegularExpressions(emojiValue, GLOBAL_FIND);
			message = allCurrentEmojiScreensInText.replace(message, currentEmojiSimbol)
		}
 	}
 	else
	{
		for (let emojisChar in returnEmojis)
		{
			let currentEmoji = returnEmojis[emojisChar];
			let allCurrentEmojiSimbolsInText = new RegularExpressions (emojisChar, GLOBAL_FIND);
			message = allCurrentEmojiSimbolsInText.replace(message, currentEmoji);
		}
	}
	 return message
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