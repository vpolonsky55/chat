class Div
{
	constructor(parent, selector, id=0, value="None")
	{
		this.parent = parent;
		this.selector = selector;
		this.id = id;
		this.value = value;
		this.obj.value = this.value;
		this.classes = [];
		this.idName = "";
		this.createNewTagDOMElement("div");
		this.addSelectorToTag();
		this.appendChildToParent()
	}

	createNewTagDOMElement(tag)
	{
		this.obj = document.createElement(tag);
	}

	addSelectorToTag()
	{
		this.parseString()
		this.getClassesNameTagFromArray()
		this.getIdentifierTagFromArray()
		this.addClassNameForObjectDOM()
		if (this.idName){
			this.addIdentifierForObjectDOM()			
		}
	}

	parseString()
	{
		this.parse = this.selector.split(" ");
	}

	getClassesNameTagFromArray()
	{
		this.classes = this.parse.filter((value)=> value.includes("."));
		this.classes = this.classes.map(value => value.slice(1)).join(" ");
	}

	getIdentifierTagFromArray()
	{
		this.idName = parse.filter((value)=> value.includes("#"))[0];
	}

	addClassNameForObjectDOM()
	{
		this.obj.className = this.classes;
	}

	addIdentifierForObjectDOM()
	{
		this.obj.id = this.idName.slice(1);
	}

	appendChildToParent()
	{
		this.parent.appendChild(this.obj);
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

	getValue()
	{
		return this.value;
	}

	removeChildren()
	{
		this.obj.innerHTML = ""
	}
}