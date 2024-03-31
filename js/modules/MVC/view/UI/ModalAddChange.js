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