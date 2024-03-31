class TopBar extends Div
{
	constructor(...args)
	{
		super(...args);
		this.title = new P(this.obj, ".top-bar__title");
		this.insertText("Сотрудники")
		this.wrapper = new Div(this.obj, ".top-bar__wrapper")
		this.search = new Img(this.wrapper.obj, ".top-bar__icon_search", "img/icons/search_icon.png")
		this.ring = new Img(this.wrapper.obj, ".top-bar__icon_ring", "img/icons/ring_icon.png")
		this.avatar = new Img(this.wrapper.obj, ".top-bar__avatar", "img/admin_face/top-bar__avatar.png")
		this.topBarText = new P(this.wrapper.obj, ".top-bar__text")
		this.topBarText.insertText("Имя Админа")
		this.topBarDetails = new Elem(this.wrapper.obj, "details", ".top-bar__select");
		this.topBarSummary = new Elem(this.topBarDetails.obj, "summary", ".top-bar__summary");
	}
	insertText(text)
	{
		this.title.insertText(text)
	}
}