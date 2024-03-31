class Input
{
	constructor(parent, selector, type)
	{
		this.parent = parent;
		this.selector = selector;
		this.obj = document.createElement("input");
		this.obj.setAttribute('type', type)
		this.text = "";
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
	insertPlaceholder(text)
	{
		this.obj.setAttribute('placeholder', text)
		this.text = text
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