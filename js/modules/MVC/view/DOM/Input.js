class Input extends Tag
{
	constructor(type)
	{
		let parent = arguments[0];
		let selector = arguments[1];
		type = arguments[2]
		super(parent, selector, "input")
		this.obj.setAttribute('type', type) //создать отдельный метод? 
		this.text = "";
		this.insertText("")
	}
	insertPlaceholder(text) // class EmployeesRow 
	{
		this.obj.setAttribute('placeholder', text)
		this.text = text
	}
	insertText(text)
	{
		this.obj.value = text;
		this.text = text;
	}
	getText()
	{
		return this.obj.value
	}
}



// class Input
// {
// 	constructor(parent, selector, type)
// 	{
// 		this.parent = parent;
// 		this.selector = selector;
// 		this.obj = document.createElement("input");
// 		this.obj.setAttribute('type', type)
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
// 	insertPlaceholder(text)
// 	{
// 		this.obj.setAttribute('placeholder', text)
// 		this.text = text
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