class Elem
{
  constructor(parent, elementType, selector, id=0)
  {
    this.parent = parent;
    this.selector = selector;
    this.obj = document.createElement(elementType);
    this.id = id;
    this.classes = [];
    this.idName = "";
    this.parseString();
    parent.appendChild(this.obj);
  }
  parseString()
  {
    let parse = this.selector.split(" ");
    this.classes = parse.filter((value)=> value.includes("."));
    this.classes = this.classes.map(value => value.slice(1)).join(" ");
    this.obj.className = this.classes;
    this.idName = parse.filter((value)=> value.includes("#"))[0];
    if (this.idName)
    {
      this.obj.id = this.idName.slice(1);
    }
  }
  getMe()
  {
    return this.obj
  }
}

class Div
{
	constructor(parent, selector, id=0, value="None")
	{
		this.parent = parent;
		this.selector = selector;
		this.obj = document.createElement("div");
		this.id = id;
		this.value=value;
		this.obj.value=this.value;
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
	removeChildren()
	{
		this.obj.innerHTML = ""
	}

}

class Select
{
  constructor(parent, selector, id=0)
  {
    this.parent = parent;
    this.selector = selector;
    this.obj = document.createElement("select");
    this.id = id;
    this.classes = [];
    this.idName = "";
	this.options = []    
    this.parseString();
    parent.appendChild(this.obj);
  }
  parseString()
  {
    let parse = this.selector.split(" ");
    this.classes = parse.filter((value)=> value.includes("."));
    this.classes = this.classes.map(value => value.slice(1)).join(" ");
    this.obj.className = this.classes;
    this.idName = parse.filter((value)=> value.includes("#"))[0];
    if (this.idName)
    {
      this.obj.id = this.idName.slice(1);
    }
  }
  getMe()
  {
    return this.obj
  }
  add(optionText, valueText)
  {
  	let option = document.createElement("option")
  	option.innerText = optionText
  	option.value = valueText
  	this.obj.appendChild(option)
  	this.options.push(option)
  }
  getText()
  {
  	return this.options[this.obj.selectedIndex].value
  }
}

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

class Img
{
	constructor(parent, selector, url, id = null, chek = 0)
	{
		this.parent = parent;
		this.selector = selector;
		this.obj = document.createElement("img");
		this.id = id;
		this.chek = chek
		if (selector[0] == ".")
		{
			this.obj.className = selector.slice(1);
		}
		else if (selector[0] == "#")
		{
			this.obj.id = selector.slice(1);
		}
		this.obj.src = url;
		parent.appendChild(this.obj);
	}
	getMe()
	{
		return this.obj
	}
	setUrl(url)
	{
		this.obj.src = url;
	}
	getId()
	{
		return this.id;
	}
	getCheck()
	{
		return this.chek
	}
}

class P
{
	constructor(parent, selector)
	{
		this.parent = parent;
		this.selector = selector;
		this.obj = document.createElement("p");
		this.text = "";
		this.familly = "Sidorov";
		if (selector[0] == ".")
		{
			this.obj.className = selector.slice(1);
		}
		else if (selector[0] == "#")
		{
			this.obj.id = selector.slice(1);
		}
		parent.appendChild(this.obj);
	}
	insertText(text)
	{
		this.obj.innerText = text;
		this.text = text;
	}
	getText()
	{
		return this.text
	}
	getMe()
	{
		return this.obj
	}
}

class Textarea
{
	constructor(parent, selector)
	{
		this.parent = parent;
		this.selector = selector;
		this.obj = document.createElement("textarea");
		this.text = "";
		if (selector[0] == ".")
		{
			this.obj.className = selector.slice(1);
		}
		else if (selector[0] == "#")
		{
			this.obj.id = selector.slice(1);
		}
		parent.appendChild(this.obj);
	}
	insertText(text)
	{
		this.obj.innerText = text;
		this.text = text;
	}
	getText()
	{
		return this.obj.value
	}
	getMe()
	{
		return this.obj
	}
	addEvent(event, behavior)
	{
		this.obj.addEventListener(event, behavior)
	}
}

class Input
{
	constructor(parent, selector, type)
	{
		this.parent = parent;
		this.selector = selector;
		this.obj = document.createElement("input");
		this.obj.setAttribute('type', type)
		this.text = "";
		if (selector[0] == ".")
		{
			this.obj.className = selector.slice(1);
		}
		else if (selector[0] == "#")
		{
			this.obj.id = selector.slice(1);
		}
		parent.appendChild(this.obj);
	}
	insertPlaceholder(text)
	{
		this.obj.setAttribute('placeholder', text)
		this.text = text
	}
	insertText(text)
	{
		this.obj.innerText = text;
		this.text = text;
	}
	getText()
	{
		return this.obj.value
	}
	getMe()
	{
		return this.obj
	}
	addEvent(event, behavior)
	{
		this.obj.addEventListener(event, behavior)
	}
}

class Button extends Input
{
	constructor(...args)
	{
		super(...args)
	}
	setValue(value)
	{
		this.obj.value = value;
	}
}

class Link
{
  constructor(parent, selector, href, id=0)
  {
    this.parent = parent;
    this.selector = selector;
    this.obj = document.createElement("a");
    this.id = id;
    this.classes = [];
    this.idName = "";
    this.obj.href = href;
    this.parseString();
    parent.appendChild(this.obj);
  }
  parseString()
  {
    let parse = this.selector.split(" ");
    this.classes = parse.filter((value)=> value.includes("."));
    this.classes = this.classes.map(value => value.slice(1)).join(" ");
    this.obj.className = this.classes;
    this.idName = parse.filter((value)=> value.includes("#"))[0];
    if (this.idName)
    {
      this.obj.id = this.idName.slice(1);
    }
  }
   insertText(text)
  {
    this.obj.innerText = text;
    this.text = text;
  }
  getText()
  {
    return this.text
  }
  getMe()
  {
    return this.obj
  }
}

class Modal
{
	constructor(parent, selectorBg, selectorWin, selectorP, selectorBtn, selectorTa)
	{
		this.bg = new Div(parent, selectorBg);
		this.window = new Div(this.bg.obj, selectorWin);
		this.prg = new P(this.window.obj, selectorP);
		this.btn = new Div(this.window.obj, selectorBtn);
		this.textarea = new Textarea(this.window.obj, selectorTa);
	}
	setText(text)
	{
		this.textarea.insertText(text);
	}
	modRem()
	{
		this.bg.obj.parentNode.removeChild(this.bg.obj);
	}
	getText()
	{
		return this.textarea.getText();
	}
}

// класс для меню с аватаркой справа вверху
class Avatar
{
	constructor(parent, selectorAv, selectorDet, selectorSum, selectorImg, selectorLink, login)
	{
		this.url = ""
		this.login=login;
		this.getIdFromDB(this.login)
		this.block=new Div(parent, selectorAv);
		this.details = new Elem(this.block.obj, "details", selectorDet);
		this.summary = new Elem(this.details.obj, "summary", selectorSum);
		this.selectorImg=selectorImg
		this.img = new Img(this.summary.obj, selectorImg, this.url);
		this.profile = new Link(this.details.obj, selectorLink, "http://localhost/chat/profile.php");
		this.profile.insertText("Профиль");
		this.setings = new Link(this.details.obj, selectorLink, "http://localhost/chat/settings.php");
		this.setings.insertText("Настройки");
		this.exit = new Link(this.details.obj, selectorLink, "");
		this.exit.obj.addEventListener("click", function(event)
		{
			while (document.cookie)
			{
				let cookie = document.cookie;
		    	document.cookie = cookie+ "; max-age=-1";
			}
			location.href = "auth.php"
		})
		this.exit.insertText("Выход");
	}
	getIdFromDB(login)
	{
		let data = 'login='+login+'&getUserId=1', 
		sendMessage = send('POST', 'http://localhost/chat/responsejs.php', data);
		sendMessage.then((listMessages) =>
		{
			let url = (id) =>
			{
				let data = 'login='+login+'&getUserUrl='+id; 
				send('POST', 'http://localhost/chat/responsejs.php', data, "html").then((link) =>
				{
					this.url = link ;
					document.querySelector(this.selectorImg).src=this.url
				}).catch(function(link) 
				{
					// console.log(link)
					
				})
			}
			url(listMessages)
				
			
		})
	}
	setSrc(url)
	{
		this.img.setUrl(url);
	}
}

class ProfileAvatar extends Avatar
{
	constructor(...args)
    {
        super(...args);
        this.profile.obj.href="http://localhost/chat/index.php"
		this.profile.insertText("Чат");
    }
}

class ButtonAddNewUser extends Button
{
	constructor(...args)
	{
		super(...args)
	}
	addUser(name, email, department)
	{
		let data = 'name='+name+'&email='+ email+'&department='+ department+'&add=1',
		sendUserData = send('POST', 'http://localhost/chat/admin/admin_manager_users.php', data, "text");
		sendUserData.then(function(message)
			{
				if (message == 200)
				{
					let data = 'lastId=1',
					getDataId = send('POST', 'http://localhost/chat/admin/admin_manager_users.php', data, "text");
					sendUserData.then(function(id)
						{
							mainContent.addEmploye(name, email, department, id); 
						}
					)
				}
			}
		)
	}
}

class ButtonChangeUser extends Button
{
	constructor(...args)
	{
		super(...args)
	}
	changeUser(name, email, department, id)
	{
		let data = 'name='+name+'&email='+ email+'&department='+ department+'&change=1' +  '&id='+id+'', 
		sendUserData = send('POST', 'http://localhost/chat/admin/admin_manager_users.php', data, "text");
		sendUserData.then(function(message)
			{
				if (message == 200)
				{
					mainContent.addEmploye(name, email, department, id);
				}
			}
		)
	}
}

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

// основной контент с сотрудниками
class MainContentEmployees extends Form
{
	constructor(...args)
	{
		super(...args)
		this.btnAdd = new Button(this.obj, ".main-content__btn_add", "button")
		this.btnAdd.setValue("Добавить")
		this.btnAdd.obj.addEventListener("click", function(event)
			{
				this.emplModal = new ModalAddEmpl(document.body, ".modal-admin")
			}
		)
		this.employees = new Div(this.obj, ".main-content__employees")
		this.employeesRows = []
		this.eploysList =  send("POST", 'http://localhost/chat/admin/admin_manager_users.php', "getAllEmploys=1");
		this.eploysList.then( (emloyes) =>
			{
				emloyes.forEach(value => 
					{
						this.addEmploye(value["name"], value["email"], value["department"], value["id"]);				
					}
				)
			}
		)
	}
	addEmploye(name, email, department, id)
	{
		this.employeesRows.push(new EmployeesRow(this.employees.obj, ".main-content__employees-row"))
		this.employeesRows[this.employeesRows.length - 1].setValue(name, email, department, id)
	}
}

class EmployeesRow extends Div
{
	constructor(...args)
	{
		super(...args)
		this.name = new Input(this.obj, ".main-content__input-name", "text")
		this.name.insertPlaceholder("Имя")
		this.email = new Input(this.obj, ".main-content__input-email", "email")
		this.email.insertPlaceholder("email")
		this.department = new Input(this.obj, ".main-content__input-department", "text")
		this.department.insertPlaceholder("отдел")
		this.hidden = new Input(this.obj, ".main-content__input_hid", "hidden")
		this.btnChange = new Button(this.obj, ".main-content__btn_change", "button")
		this.btnChange.setValue("Изменить")
		this.btnChange.obj.addEventListener("click", (event) =>
			{
				this.emplModalChange = new ModalAddChange(document.body, ".modal-admin") // создание модального окна
				this.emplModalChange.importValues(this.name.obj.value, this.email.obj.value, this.department.obj.value, this.hidden.obj.value) //заполняем поля в модальном окне
			}
		)
		this.btnDell = new Button(this.obj, ".main-content__btn_del", "button")
		this.btnDell.setValue("Удалить")
		this.btnDell.obj.addEventListener("click", (event) =>
			{
				let rowID = this.hidden.obj.value
				let data = 'rowID='+rowID+'',
				sendDesrtoyRow = send('POST', 'http://localhost/chat/admin/admin_manager_users.php', data);
				sendDesrtoyRow.then((destroyRow) =>
					{
						if (destroyRow != 200)
						{
							alert("ответ: не получилось пробуй еще")					
						}
						else
						{
							let row = this.obj,
							parent = row.parentNode;
							parent.removeChild(row)
						}
					}
				)
			}
		)
	}
	setValue(name, email, department, id)
	{
		this.name.obj.value = name;
		this.email.obj.value = email;
		this.department.obj.value = department;
		this.hidden.obj.value = id
	}
}

// модальное окно "добавление сотрудника"
class ModalAddEmpl extends Form
{
	constructor(...args)
	{
		super(...args)
		this.name = new Input(this.obj, ".admin-modal__name", "text")
		this.email = new Input(this.obj, ".admin-modal__email", "text")
		this.department = new Select(this.obj, ".admin-modal__department")
		let data = 'getDepartments=1', 
		sendDepartments = send('POST', 'http://localhost/chat/admin/admin_manager_users.php', data);
		sendDepartments.then((departmentsText) =>
			{
				departmentsText.forEach((department) =>
					{
						let optionText = department['department'],
						optionValue = department['id'];
						this.department.add(optionText, optionValue)				
					}
				)
			}
		)
		this.btnAdd = new ButtonAddNewUser(this.obj, ".admin-modal__add", "button")
		this.btnAdd.setValue("Добавить")
		this.btnAdd.obj.addEventListener("click", (event) =>
			{
				let name = this.name.getText(),
				email = this.email.getText(),
				department = this.department.getText();
				this.btnAdd.addUser(name, email, department)
				this.obj.remove()
			}
		)
		this.btnCancel = new ButtonAddNewUser(this.obj, ".admin-modal__cancel", "button")
		this.btnCancel.setValue("Отменить")
		this.btnCancel.obj.addEventListener("click", (event) =>
			{
				this.obj.remove()
			}
		)
	}
}

// модальное окно "изменение сотрудника"
class ModalAddChange extends Form
{
	constructor(...args)
	{
		super(...args)
		this.name = new Input(this.obj, ".admin-modal__name", "text")
		this.email = new Input(this.obj, ".admin-modal__email", "text")
		this.department = new Input(this.obj, ".admin-modal__department", "text")
		this.hidden = new Input(this.obj, ".admin-modal__hidden", "hidden")
		this.btnModalChange = new ButtonChangeUser(this.obj, ".admin-modal__change", "button")
		this.btnModalChange.setValue("Изменить")
		this.btnModalChange.obj.addEventListener("click", (event) =>
			{
				let name = this.name.getText(),
				email = this.email.getText(),
				department = this.department.getText(),
				id = this.hidden.getText();
				this.btnModalChange.changeUser(name, email, department, id)
				this.obj.remove()
				let hiddenInputs = document.querySelectorAll(".main-content__input_hid")
				hiddenInputs.forEach(function(hiddenInput, index) 
					{
						if (hiddenInput.value == id)
						{
							hiddenInput.parentNode.querySelector(".main-content__input-name").value = name
							hiddenInput.parentNode.querySelector(".main-content__input-email").value = email
							hiddenInput.parentNode.querySelector(".main-content__input-department").value = department

						}	
					}
				)
				window.setTimeout(selectItem("employees"), 600) // без задержки не срабатывает
			}
		)
		this.btnCancel = new ButtonAddNewUser(this.obj, ".admin-modal__cancel", "button")
		this.btnCancel.setValue("Отменить")
		this.btnCancel.obj.addEventListener("click", (event) =>
			{
				this.obj.remove()
			}
		)
	}
	importValues(importName, importMail, importDepartmet, importId)
	{
		this.name.obj.value = importName
		this.email.obj.value = importMail
		this.department.obj.value = importDepartmet
		this.hidden.obj.value = importId
	}
}

// основной контент с отделами
class MainContentDepartments extends Form
{
	constructor(...args)
	{
		super(...args)
		this.lockUnlockDepartment = null

		this.btnAdd = new Button(this.obj, ".main-content__btn_add", "button")
		this.btnAdd.setValue("Добавить")
		this.btnAdd.obj.addEventListener("click", function(event)
			{
				// this.emplModal = new ModalAddEmpl(document.body, ".modal-admin")
				alert('this.btnAdd.obj.addEventListener("click", function(event),   необходимо  добавить модальное окно с добавлением отдела !!!!!!!!!!!!!!!!')
			}
		)
		this.btnChange = new Button(this.obj, ".main-content__btn_change", "button")
		this.btnChange.setValue("Изменить")
		this.btnChange.obj.addEventListener("click", (event) =>
		{
			alert('this.btnChange.obj.addEventListener("click", (event),  необходимо добавить модальное окно с изменением отдела !!!!!!!!!!!!!!!!')
		}
		)
		this.btnDell = new Button(this.obj, ".main-content__btn_del", "button")
		this.btnDell.setValue("Упразднить")
		this.btnDell.obj.addEventListener("click", (event) =>
		{
			// модальное окно со всеми отделами и их статусами и кнопкой "упразднить" если статус равен "1" и востановить если статус равен "0" 
			this.lockUnlockDepartment = new LockUnlockDepartment(parent = document.body, ".lockUnlockDepartment")
			//нажатие на кнопку подразумевает получение id данного отдела и сразу смена ему статуса: если был "0" сделать "1" и наоборот
			// 
			// после закрытия окна контент должен обновится
		}
		)

		this.departments = new Departments(this.obj, ".main-content__departments") //блок список отделов
		this.departmentEmplBlock = new DepartmentEmplBlock(this.obj, ".main-content__departmentEmplBlock") // блко список сотрудников
		this.departmentDescrBlock = new DepartmentDescription(this.obj, ".main-content__departmentDescrBlock")
	}1
	destroyModalLockUnlockDepartment()
	{
		this.lockUnlockDepartment.obj.remove()
		this.lockUnlockDepartment = null
	}
}

class Department extends Button
{
	constructor(parent, selector, type, departmentName, employees, description, id, status) // добавить статус
	{
		super(parent, selector, type)
		this.departmentName = departmentName
		this.employees = employees
		this.description = description
		this.setValue(departmentName)
		this.id = id
		this.status = status
		this.getEmployees()
		this.getDescription()
		// вызываем метод getStatus()
	}
	// получаем список сотрудников
	getEmployees(employees)
	{
		let data = `DepartmentId=${this.id}`,
		sendDepartmentId = send('POST', 'http://localhost/chat/admin/admin_manager_users.php', data);
		sendDepartmentId.then((employNames) =>
			{
				employNames.forEach((employName, index) =>
					{
						this.employees.push(employName["name"])
					}
				)
			}
		)
	}
	// получаем описание отдела 
	getDescription(description)
	{
		let data = `DepId=${this.id}`,
		sendDepDescId = send('POST', 'http://localhost/chat/admin/admin_manager_users.php', data);
		sendDepDescId.then((descText) =>
			{
				this.description = descText["description"]
				// console.log(`button ${this.id}`, this.description)
			}
		)
	}
	// получаем статус отдела
	getStatus()
	{

	}
}

class Departments extends Div
{
	constructor(...args)
	{
		super(...args)
		this.hidden = new Input(this.obj, ".main-content__input_hid", "hidden")
		this.departments = []
		let data = 'getDepartments=1', 
		sendDepartments = send('POST', 'http://localhost/chat/admin/admin_manager_users.php', data);
		sendDepartments.then((departmentsText) =>
			{
				departmentsText.forEach((department) =>
					{
						let name = department['department'],
						id = department['id'],
						departmentStatus = department['status']
						this.departments.push(new Department(this.obj, ".departments__department", "button", name, [], '', id, departmentStatus)) // добавить в СSS	
						if(Number(departmentStatus) === 0) //если статус в базе равен нулю, делаем отдел невидимым
						{
							this.departments[this.departments.length - 1].obj.style.visibility = "hidden";
						}
					}
				)
				this.departments.forEach(dep =>
					{
						dep.addEvent("click", (event) => 
							{
								let departmentEmplBlock = mainContentDepartments.departmentEmplBlock
								let departmentDescriptionBlock = mainContentDepartments.departmentDescrBlock
								let employees = dep.employees
								let description = dep.description;
								[departmentEmplBlock, departmentDescriptionBlock].forEach(el => el.removeChildren())
								employees.forEach(employEl => 
									{
										let textEmploy	= new P(departmentEmplBlock.obj, ".departments__text-employ")
										textEmploy.insertText(employEl)
									}
								)
								let textDescription = new P(departmentDescriptionBlock.obj, ".department__text-description")
								textDescription.insertText(description)

							}
						)
					}
				)
			}
		).catch((err) => console.log(err))
	}
}

class DepartmentEmplBlock extends Div
{
	constructor(...args)
	{
		super(...args)
		
	}
	
}

class DepartmentDescription extends Div
{
	constructor(...args)
	{
		super(...args)
	}
}

// модальное окно блокировка разблокировка
class LockUnlockDepartment extends Form
{
	constructor(...args)
	{
		super(...args)
		this.closeBtn = new Button(this.obj, ".lockUnlockDepartment__close-btn", "button")
		this.closeBtn.obj.addEventListener("click", (event) => 
			{
				mainContentDepartments.destroyModalLockUnlockDepartment()
			}
		)
		this.wrapper = new Div(this.obj, ".lockUnlockDepartment__wrapper") //обертака для кнопки и списка
		this.lkDepartments = []

		let data = 'getDepartments=1', 
		sendDepartments = send('POST', 'http://localhost/chat/admin/admin_manager_users.php', data);
		sendDepartments.then((departmentsText) =>
			{
				departmentsText.forEach((department) =>
					{
						let name = department['department'],
						id = department['id'],
						departmentStatus = department['status'];
						this.lkDepartments.push(new Department(this.wrapper.obj, ".departments__department", "button", name, [], '', id, departmentStatus)) // добавить в СSS	
						if(Number(departmentStatus) === 0) //если статус в базе равен нулю, делаем отдел коричневым
						{
							this.lkDepartments[this.lkDepartments.length - 1].obj.style.background = "brown";
						}
					}
				)
				this.lkDepartments.forEach(department =>
					{
						department.addEvent("click", (event) => 
							{
								console.log("нажатие на кнопку подразумевает получение id данного отдела и сразу смена ему статуса: если был '0' сделать '1' и наоборот")
								console.log(`id отдела - ${department.id}`, department)
								
								// условие если статус равен 1 или два
								console.log(`deparnment.status=${department.status}`);
								let departmentStatus = department.status=="1"?0:1,
								data = `departmentStatusDownID=${department.id}&status=${departmentStatus}`, 
								departmentStatusDownID = send('POST', 'http://localhost/chat/admin/admin_manager_users.php', data);
								departmentStatusDownID.then((response) =>
									{
										if (response == 200)
										{
											department.obj.style.background = "#D9D9D9";
											mainContentDepartments.departments.departments.forEach(departmentFromMainInterface =>
												{
													if (department.id == departmentFromMainInterface.id)
													{
														departmentFromMainInterface.obj.style.visibility = "visible";
													}
												}
											)
										}
									}
								)
							}
						)
					}
				)
			}
		).catch( err => console.log(err))
	}
}