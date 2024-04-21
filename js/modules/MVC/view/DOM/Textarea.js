class Textarea extends Tag
{
	constructor()
	{
		let parent = arguments[0];
		let selector = arguments[1];
		super(parent, selector, "textarea")
		this.setText("")
	}
	// insertText(text)
	// {
	// 	this.obj.innerText = text;
	// 	this.text = text;
	// }
	setText(text)
	{
		this.obj.value = text;
		this.text = text;
	}
	getText()
	{
		return this.obj.value
	}
	addEvent(event, behavior)
	{
		this.obj.addEventListener(event, behavior)
	}
}


// class Textarea
// {
// 	constructor(parent, selector)
// 	{
// 		this.parent = parent;
// 		this.selector = selector;
// 		this.obj = document.createElement("textarea");
// 		this.text = "";
// 		if (selector[0] == ".")
// 		{
// 			this.obj.className = selector.slice(1);
// 		}
// 		else if (selector[0] == "#")
// 		{
// 			this.obj.id = selector.slice(1);
// 		}
// 		parent.appendChild(this.obj);
// 	}
// 	insertText(text)
// 	{
// 		this.obj.innerText = text;
// 		this.text = text;
// 	}
// 	getText()
// 	{
// 		return this.obj.value
// 	}
// 	getMe()
// 	{
// 		return this.obj
// 	}
// 	addEvent(event, behavior)
// 	{
// 		this.obj.addEventListener(event, behavior)
// 	}
// }