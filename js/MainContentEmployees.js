

class MainContentEmployees extends Form
{
	constructor(...args)
	{
		super(...args)
		this.buttonAddParent = this.obj
		this.buttonAddCssClass = ".main-content__btn_add"
		this.buttonAddHtmlInputType = "button"
		this.buttonAddText = "Добавить"

		this.buttonAdd = new Button(this.buttonAddParent, this.buttonAddCssClass, this.buttonAddHtmlInputType)
		this.buttonAdd.setValue(this.buttonAddText)
		this.buttonAdd.obj.addEventListener("click", function(event)
			{
				this.emplModal = new ModalAddEmpl(document.body, ".modal-admin")
			}
		)

		this.employeesWraperParent = this.obj
		this.employeesWraperCssClass = ".main-content__employees"
		this.employeesWraper = new Div(this.employeesWraperParent, this.employeesWraperCssClass)
		this.employeesRows = []
		this.eployeesGroup =  send("POST", 'http://localhost/chat/admin/admin_manager_users.php', "getAllEmploys=1");
		this.eployeesGroup.then( (emloyes) =>
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
		this.employeesRows.push(new EmployeesRow(this.employeesWraper.obj, ".main-content__employees-row"))
		this.employeesRows[this.employeesRows.length - 1].setValue(name, email, department, id)
	}
}