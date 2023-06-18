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
						let imgParent = document.querySelector(".modal__bg"),
						wrapper = new Element(imgParent, "div", ".modal__wrapper"),
						bgImg= new Img(wrapper.obj, ".modal__img", `img/bg/${userId}/${message[imgName]["name"]}`, message[imgName]['id'], message[imgName]['checked']),

						chckImg= new Img(wrapper.obj, ".modal__checked", `img/icons/checkedSmb.png`), // добавляем галочку на картинку (opacity: 0)

						remImg= new Img(wrapper.obj, ".modal__remove", `img/icons/busket.png`, message[imgName]['id']);
						if (bgImg.getCheck() == "1")
						{
							bgImg.obj.style.opacity = 0.5;
							// bgImg.parentNode.querySelector(".modal__checked").style.opacity = 1;
						}
						else
						{
							bgImg.obj.style.opacity = 1;
							// bgImg.parentNode.querySelector(".modal__checked").style.opacity = 0;

						}

						remImg.getMe().addEventListener( 'click', function(event)
							{
								let sendData =  'idImgForDelete='+remImg.getId()+'&deleteImgFromBG=1'+'&filePath='+`img/bg/${userId}/${message[imgName]["name"]}`,
								sendMessage = send('POST', 'http://localhost/chat/handler.php', sendData, type="text");
								sendMessage.then(function(message)
									{
										console.log("Картинка удалена", remImg.getId(), message);
										document.querySelector(".modal__bg").removeChild(remImg.getMe().parentNode);
									}
								)
							}
						)
						// ставим прослушку на префоновую картинку
						bgImg.getMe().addEventListener( 'click', function(event)
							{
								// не получиться так как этот идентификатор уже стоит на remImg a сюда вообще еще не установлен никакой 
								let sendData =  'idImgForSetBackground='+bgImg.getId()+'&selectImgFromBG=1'+ `&user_id=${userId}`,
								sendMessage = send('POST', 'http://localhost/chat/handler.php', sendData, type="text");
								sendMessage.then(function(message)
									{
										console.log("Картинка выделена", bgImg.getId(), message);
										let backgrounds = document.querySelectorAll(".modal__img");
										
										backgrounds.forEach((image, index) => {image.style.opacity = 1});

										bgImg.obj.style.opacity = 0.5;
										location.reload()

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