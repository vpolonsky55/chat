class Div extends Tag
{
	constructor(...args)
	{
		const PARENT_INDEX = 0,
		SELECTOR_INDEX = 1,
		TAG_NAME = "div",
		ID_INDEX = 2,
		VALUE_INDEX = 3 

		let parent = arguments[PARENT_INDEX];
		let selector = arguments[SELECTOR_INDEX];
		let id = arguments[ID_INDEX]
		let value = arguments[VALUE_INDEX]
		super(parent, selector, TAG_NAME, id, value)
	}
}