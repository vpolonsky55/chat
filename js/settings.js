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
						// console.log(`bg/${message[imgName]}`)
						let imgParent = document.querySelector(".modal__bg"),
						wrapper = new Element(imgParent, "div", ".modal__wrapper"),
						bgImg= new Img(wrapper.obj, ".modal__img", `img/bg/${message[imgName]}`),
						remImg= new Img(wrapper.obj, ".modal__remove", `img/icons/busket.png`)
					}
					
				}
			)
		}
	);
	
	
}

function deleteBgImage()
{
	let remImg = document.querySelectorAll(".modal__img")
	console.log(remImg)
}

document.addEventListener('click', function(e) {
    console.log(e.target);
});

// document.body.onload = getBackgrounds()
window.onload=function()
{
	getBackgrounds()
	
}