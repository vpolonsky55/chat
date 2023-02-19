let scrollH
let counter=0
function getBackgrounds()
{
	let user = document.cookie.split(";")[0].split("="),
	loginPost = user[0],
	loginCookie = user[1],
	data = 'login='+loginPost+'&cookie='+ loginCookie+'&background=1',
	sendBackgrond = send('POST', 'http://localhost/chat/checkUser.php', data);
	sendBackgrond.then(function(userId)
		{
			data = `user_id=${userId}&background=1`;	
			let sendMessage = send('POST', 'http://localhost/chat/checkUser.php', data)
			sendMessage.then(function(message)
				{
					console.log(typeof Object.values(message))
					for (imgName in message)
					{
						console.log(`bg/${message[imgName]["name"]}`)
						let imgParent = document.querySelector(".modal__bg"),
						wrapper = new Element(imgParent, "div", ".modal__wrapper"),
						bgImg= new Img(wrapper.obj, ".modal__img", `img/bg/${message[imgName]["name"]}`),
						remImg= new Img(wrapper.obj, ".modal__remove", `img/icons/busket.png`, message[imgName]['id'])
							remImg.getMe().addEventListener( 'click', function(event)
							{
								let sendData =  'idImgForDelete='+remImg.getId()+'&deleteImgFromBG=1'+'&filePath='+`img/bg/${message[imgName]["name"]}`,
								sendMessage = send('POST', 'http://localhost/chat/handler.php', sendData);
								sendMessage.then(function(message)
									{
										console.log("Картинка удалена", remImg.getId())
									}
								)
							}
						)
					}
					
				}
			)
		}
	);
	
	
}

// document.body.onload = getBackgrounds()
window.onload=function()
{
	getBackgrounds()
	console.log("pagedownload")
	
}