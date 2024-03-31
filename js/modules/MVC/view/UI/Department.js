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