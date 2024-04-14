

let loop = setInterval(function()
{
		if(click || document.cookie != "")
	{
		setInterval("chatUpdate()", 1000)
		clearInterval(loop)
	}	
}, 1000)

// сформировать сообщение, когда кто-то набирает текст
 
 