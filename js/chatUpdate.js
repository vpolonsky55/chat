let scrollH
let counter=0
function chatUpdate()
{
	let data = 'messages=1', 
	login = document.cookie.split("=")[0],
	sendMessage = send('POST', 'http://localhost/chat/chat.php', data),
	indexForMyBlock = 0, oldMyI = 0, otherI = 0;
	sendMessage.then(function(massage)
		{
			let lengthMessages = Object.keys(massage).length/4, //делим на 4, а не на 3, так как появилось еще одно поле id
			lengthCurrentMessages = document.querySelectorAll(".field div").length;
			
			if(lengthMessages >= lengthCurrentMessages)
			{
				

				while (field.obj.children.length !== 0) 
				{
					field.obj.removeChild(field.obj.firstChild) // удаление всех дочерних элементов в поле fild
				}
				indexBlock=0
				for (let i = lengthMessages-16; i < lengthMessages; i++) 
				{	
					let paretntForFieldBlock = document.querySelector ('.field');
					let selectorForFieldBlock = (login==massage[`login${i}`])  ?  `#id${massage[`id${i}`]} .myFieldBlock `  :  `#id${massage[`id${i}`]} .fieldBlock`;
					let idForFieldBlock = massage[`id${i}`]
					let valueForFieldBlock = massage[`id${i}`]
					fieldBlock.push(new Div (paretntForFieldBlock,   selectorForFieldBlock,  idForFieldBlock,  valueForFieldBlock));
					

					// появление модального окна
					document.querySelector(`#id${massage[`id${i}`]}`).addEventListener("click", function(event)
					{
						let idBlock = this.id;
						if( (document.querySelector(".modalBlock") == null) && (document.querySelector('#'+this.id).className == "myFieldBlock") )
						{
							modalBlock = new Modal(document.querySelector('body'), ".modalBlock", ".modWin", ".modBtn", ".modPrgr", ".modTxa");
							document.querySelector(".modPrgr").innerText = "редактирование сообщения";
							let text = this.querySelectorAll("p")[1].innerText;
							text = replaceSmile(text, 0)
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
										let	login = document.cookie.split("=")[0],
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
					indexBlock++
				}
			}
		}
	)
	/*перемещение в конец страницы происходит в два шага, 
	так как за один шаг, перемещение происходит только на середину страницы */
	if (counter<2)
	{
		setTimeout(() => document.querySelector("body").scrollIntoView(false), 1400)
		// document.querySelector("body").scrollIntoView(false)
		counter++
	}
	scrollH = window.pageYOffset
	window.scrollTo(0, scrollH)
}