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