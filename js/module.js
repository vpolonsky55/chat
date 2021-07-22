

class Div
{
	constructor(parent, selector, id=0)
	{
		this.parent = parent;
		this.selector = selector;
		this.obj = document.createElement("div");
		this.id = id;
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
		//console.log(this.obj.className, this.selector)

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