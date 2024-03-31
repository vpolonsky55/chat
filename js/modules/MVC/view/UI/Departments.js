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