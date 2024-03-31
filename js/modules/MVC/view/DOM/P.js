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