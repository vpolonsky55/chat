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