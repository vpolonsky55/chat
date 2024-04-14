class Form extends Tag
{
	constructor(action = "None")
	{
		let parent = arguments[0];
		let selector = arguments[1];
		action = arguments[3];
		super(parent, selector, "form")
		this.action = action; 
	}
}