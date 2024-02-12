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
	}
	destroyModalLockUnlockDepartment()
	{
		this.lockUnlockDepartment.obj.remove()
		this.lockUnlockDepartment = null
	}
}