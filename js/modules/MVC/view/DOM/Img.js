class Img extends Tag
{
	constructor(url, chek = 0)
	{
		let parent = arguments[0];
		let selector = arguments[1];
		url = arguments[2];
		chek = arguments[3];
		super(parent, selector, "img");
		this.chek = chek;
		this.setUrl(url);
	}
	
	setUrl(url)
	{
		this.obj.src = url;
	}

	getCheck() // settings.js 25 строка
	{
		return this.chek
	}
}
