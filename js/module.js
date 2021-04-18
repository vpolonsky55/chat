

class Div
{
	constructor(parent, selector, id=0)
	{
		this.parent = parent;
		this.selector = selector;
		this.obj = document.createElement("div");
		this.id = id;
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