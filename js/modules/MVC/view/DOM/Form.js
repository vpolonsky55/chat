class Form extends Tag
{
	constructor(action = "None", ...args)
	{
		super(...arguments, "form")
		this.action = action; 
	}
}