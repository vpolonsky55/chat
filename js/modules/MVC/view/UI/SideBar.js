class SideBar
{
	constructor(parent, selectorBg, selCollBtn, selWrapHelp, selWrap)
	{
		this.block = new Div(parent, selectorBg);
		this.state = true

		this.collaps = new Img(document.querySelector("body"), ".side-bar__collapsebtn", "img/icons/side-bar__collapsebtn.png")
		this.collaps.obj.addEventListener("click", () => {this.clotting()})
		
		this.titleBlock = new Div(this.block.obj, ".side-bar__title-block")
		this.logo = new Img(this.titleBlock.obj, ".side-bar__logo", "img/icons/side-bar__logo.png") // необходимо дописать url
		this.titleText = new P(this.titleBlock.obj, ".side-bar__title")
		this.titleText.insertText("Kомпания")

		this.wrapMainMenu = new Div(this.block.obj, ".side-bar__wrap");
		this.mainMenuTitle = new P(this.wrapMainMenu.obj, ".side-bar__menutitle")
		this.mainMenuTitle.insertText("ГЛАВНОЕ МЕНЮ")
		this.sideBarItemPanel = new Div(this.wrapMainMenu.obj, ".side-bar__item")
		this.adminIcon = new Img(this.sideBarItemPanel.obj, ".side-bar__icon", "img/icons/subtract.png")
		this.departmentsText = new P(this.sideBarItemPanel.obj, "side-bar__text")
		this.departmentsText.insertText("Панель администратора")

		this.wrapWorkspace = new Div(this.block.obj, ".side-bar__wrap");
		this.mainMenuTitle = new P(this.wrapWorkspace.obj, ".side-bar__menutitle")
		this.mainMenuTitle.insertText("Рабочее пространство")

		this.sideBarItemEmployees = new Div(this.wrapWorkspace.obj, ".side-bar__item")
		this.sideBarItemEmployees.obj.addEventListener("click", (event) => {selectItem("employees")}) //открывает страницу с сотрудниками
		this.employessIcon = new Img(this.sideBarItemEmployees.obj, ".side-bar__icon", "img/icons/empl_icon.png")
		this.employeesText = new P(this.sideBarItemEmployees.obj, "side-bar__text")
		this.employeesText.insertText("Cотрудники")

		this.sideBarItemDepartments = new Div(this.wrapWorkspace.obj, ".side-bar__item")
		this.sideBarItemDepartments.obj.addEventListener("click", (event) => {selectItem("departments")}) //открывает страницу с отделами

		this.employessIcon = new Img(this.sideBarItemDepartments.obj, ".side-bar__icon", "img/icons/department__icon.png")
		this.departmentsText = new P(this.sideBarItemDepartments.obj, "side-bar__text")
		this.departmentsText.insertText("Отделы")

		this.wrapCommon = new Div(this.block.obj, ".side-bar__wrap");
		this.wrapCommonTitle = new P(this.wrapCommon.obj, ".side-bar__menutitle")
		this.wrapCommonTitle.insertText("Общее")

		this.sideBarItemCommon = new Div(this.wrapCommon.obj, ".side-bar__item")
		this.employessIcon = new Img(this.sideBarItemCommon.obj, ".side-bar__icon", "img/icons/folderFiles__icon.png")	
		this.fileFolderText = new P(this.sideBarItemCommon.obj, "side-bar__text")
		this.fileFolderText.insertText("Файлы и папки")

		this.sideBarItemSettings = new Div(this.wrapCommon.obj, ".side-bar__item")
		this.employessIcon = new Img(this.sideBarItemSettings.obj, ".side-bar__icon", "img/icons/settings__icon.png")	
		this.settingsText = new P(this.sideBarItemSettings.obj, "side-bar__text")
		this.settingsText.insertText("Настройки")

		this.wrapHelp = new Div(this.block.obj, ".side-bar__wrap-help");
	}
	clotting()
	{
		let body = document.querySelector("body");
		body.classList.toggle("body_hidden")
		if (this.state == true)
		{
			this.state = false;
			this.collaps.obj.style ="left: -20px; transform: rotate(-180deg)";
		}
		else
		{
			this.state = true;
			this.collaps.obj.style ="transform: rotate(0deg)";
		}
	}
}