class Tag
{
    constructor(parent, selector, tagName = "div", id=0, value="None")
	{
        this.parent = parent;
		this.selector = selector;
		this.id = id;
		this.value = value;
		this.classes = [];
		this.idName = "";
        this.addNewDOMElement(tagName)
	}
    
    addNewDOMElement(tagName)
    {
        this.createNewTagDOMElement(tagName);
        this.setValueToDOMElement()
        this.addSelectorToTag();
        this.appendChildToParent()

    }
    
	createNewTagDOMElement(tag)
	{
        this.obj = document.createElement(tag);
	}

    setValueToDOMElement()
    {
        this.obj.value = this.value;
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
		this.idName = this.parse.filter((value)=> value.includes("#"))[0]; //this.parse вместо parse
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