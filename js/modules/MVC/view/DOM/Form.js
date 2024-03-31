class Form
{
	constructor(parent, selector, id=0, value="None", action = "None")
	{
		this.parent = parent;
		this.selector = selector;
		this.obj = document.createElement("form");
		this.id = id;
		this.value=value;
		this.obj.value=this.value;
		this.action = action
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