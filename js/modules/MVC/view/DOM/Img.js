class Img
{
	constructor(parent, selector, url, id = null, chek = 0)
	{
		this.parent = parent;
		this.selector = selector;
		this.obj = document.createElement("img");
		this.id = id;
		this.chek = chek
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
	getId()
	{
		return this.id;
	}
	getCheck()
	{
		return this.chek
	}
}