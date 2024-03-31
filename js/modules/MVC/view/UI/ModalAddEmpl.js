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