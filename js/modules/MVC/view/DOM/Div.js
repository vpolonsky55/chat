class Div extends Tag
{
	constructor(...args)
	{
		let parent = arguments[0];
		let selector = arguments[1];
		let id = arguments[2]
		let value = arguments[3]
		super(parent, selector, "div", id, value)
	}
}