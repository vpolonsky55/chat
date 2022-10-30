class Div
{
	constructor(parent, selector, id=0, value="None")
	{
		//console.log(value)
		this.parent = parent;
		this.selector = selector;
		this.obj = document.createElement("div");
		this.id = id;
		this.value=value;
		this.obj.value=this.value;
		this.classes = [];
		this.idName = "";
		this.parseString();
		parent.appendChild(this.obj);
	}
	getMe()
	{
		return this.obj
	}
	setListener(behavior)
	{
		this.obj.addEventListener("click", function(event)
			{ 
				behavior(this.id, this);	
			}
		)
	}
	parseString()
	{
		let parse = this.selector.split(" ");
		this.classes = parse.filter((value)=> value.includes("."));
		this.classes = this.classes.map(value => value.slice(1)).join(" ");
		this.obj.className = this.classes;
		this.idName = parse.filter((value)=> value.includes("#"))[0];
		if (this.idName){
			this.obj.id = this.idName.slice(1);
		}

	}
	getValue()
	{
		return this.value;
	}

}
class Img
{
	constructor(parent, selector, url)
	{
		this.parent = parent;
		this.selector = selector;
		this.obj = document.createElement("img");
		if (selector[0] == ".")
		{
			this.obj.className = selector.slice(1);
		}
		else if (selector[0] == "#")
		{
			this.obj.id = selector.slice(1);
		}
		this.obj.src = url;
		parent.appendChild(this.obj);
	}
	getMe()
	{
		return this.obj
	}
	setUrl(url)
	{
		this.obj.src = url;
	}

}
class P
{
	constructor(parent, selector)
	{
		this.parent = parent;
		this.selector = selector;
		this.obj = document.createElement("p");
		this.text = "";
		this.familly = "Sidorov";
		if (selector[0] == ".")
		{
			this.obj.className = selector.slice(1);
		}
		else if (selector[0] == "#")
		{
			this.obj.id = selector.slice(1);
		}
		parent.appendChild(this.obj);
	}
	insertText(text)
	{
		this.obj.innerText = text;
		this.text = text;
	}
	getText()
	{
		return this.text
	}
	getMe()
	{
		return this.obj
	}
}
class Textarea
{
	constructor(parent, selector)
	{
		this.parent = parent;
		this.selector = selector;
		this.obj = document.createElement("textarea");
		this.text = "";
		// this.familly = "Sidorov";
		if (selector[0] == ".")
		{
			this.obj.className = selector.slice(1);
		}
		else if (selector[0] == "#")
		{
			this.obj.id = selector.slice(1);
		}
		parent.appendChild(this.obj);
	}
	insertText(text)
	{
		this.obj.innerText = text;
		this.text = text;
	}
	getText()
	{
		return this.obj.value
	}
	getMe()
	{
		return this.obj
	}
	addEvent(event, behavior)
	{
		this.obj.addEventListener(event, behavior)
	}
	
}
class Element
{
  constructor(parent, elementType, selector, id=0)
  {
    this.parent = parent;
    this.selector = selector;
    this.obj = document.createElement(elementType);
    this.id = id;
    this.classes = [];
    this.idName = "";
    this.parseString();
    parent.appendChild(this.obj);
  }
  parseString()
  {
    let parse = this.selector.split(" ");
    this.classes = parse.filter((value)=> value.includes("."));
    this.classes = this.classes.map(value => value.slice(1)).join(" ");
    this.obj.className = this.classes;
    this.idName = parse.filter((value)=> value.includes("#"))[0];
    if (this.idName)
    {
      this.obj.id = this.idName.slice(1);
    }
    //console.log(this.obj.className, this.selector)
  }
  getMe()
  {
    return this.obj
  }
}
class Link
{
  constructor(parent, selector, href, id=0)
  {
    this.parent = parent;
    this.selector = selector;
    this.obj = document.createElement("a");
    this.id = id;
    this.classes = [];
    this.idName = "";
    this.obj.href = href;
    this.parseString();
    parent.appendChild(this.obj);
  }
  parseString()
  {
    let parse = this.selector.split(" ");
    this.classes = parse.filter((value)=> value.includes("."));
    this.classes = this.classes.map(value => value.slice(1)).join(" ");
    this.obj.className = this.classes;
    this.idName = parse.filter((value)=> value.includes("#"))[0];
    if (this.idName)
    {
      this.obj.id = this.idName.slice(1);
    }
  }
   insertText(text)
  {
    this.obj.innerText = text;
    this.text = text;
  }
  getText()
  {
    return this.text
  }
  getMe()
  {
    return this.obj
  }
}
class Modal
{
	constructor(parent, selectorBg, selectorWin, selectorP, selectorBtn, selectorTa)
	{
		this.bg = new Div(parent, selectorBg);
		this.window = new Div(this.bg.obj, selectorWin);
		this.prg = new P(this.window.obj, selectorP);
		this.btn = new Div(this.window.obj, selectorBtn);
		this.textarea = new Textarea(this.window.obj, selectorTa);
	}
	setText(text)
	{
		this.textarea.insertText(text);
	}
	modRem()
	{
		this.bg.obj.parentNode.removeChild(this.bg.obj);
	}
	getText()
	{
		return this.textarea.getText();
	}

}
class Avatar
{
	constructor(parent, selectorAv, selectorDet, selectorSum, selectorImg, selectorLink, login)
	{
		this.url = ""
		this.login=login;
		this.getIdFromDB(this.login)
		this.block=new Div(parent, selectorAv);
		this.details = new Element(this.block.obj, "details", selectorDet);
		this.summary = new Element(this.details.obj, "summary", selectorSum);
		this.selectorImg=selectorImg
		this.img = new Img(this.summary.obj, selectorImg, this.url);
		this.profile = new Link(this.details.obj, selectorLink, "http://localhost/chat/profile.php");
		this.profile.insertText("Профиль");
		this.setings = new Link(this.details.obj, selectorLink, "");
		this.setings.insertText("Настройки");
		this.exit = new Link(this.details.obj, selectorLink, "");
		this.exit.obj.addEventListener("click", function(event)
		{
			while (document.cookie)
			{
				let cookie = document.cookie;
		    	document.cookie = cookie+ "; max-age=-1";
			}
			console.log("coockie=", document.cookie)
			location.reload()
		})
		this.exit.insertText("Выход");
		// SELECT id FROM `user` WHERE login = "log" 

	}
	getIdFromDB(login)
	{
		let data = 'login='+login+'&getUserId=1', 
		sendMessage = send('POST', 'http://localhost/chat/responsejs.php', data);
		sendMessage.then((listMessages) =>
		{
			let url = (id) =>
			{
				let data = 'login='+login+'&getUserUrl='+id; 
				send('POST', 'http://localhost/chat/responsejs.php', data, "html").then((link) =>
				{
					this.url = link ;
					document.querySelector(this.selectorImg).src=this.url
				}).catch(function(link) 
				{
					console.log(link)
					
				})
			}
			url(listMessages)
				
			
		})
	}
	setSrc(url)
	{
		this.img.setUrl(url);
	}
	
}