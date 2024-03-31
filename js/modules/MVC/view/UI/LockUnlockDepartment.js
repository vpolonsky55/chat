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
								// console.log("нажатие на кнопку подразумевает получение id данного отдела и сразу смена ему статуса: если был '0' сделать '1' и наоборот")
								// console.log(`id отдела - ${department.id}`, department)
								
								// условие если статус равен 1 или два
								// console.log(`deparnment.status=${department.status}`);

								let departmentStatus = department.status=="1"?0:1,
								data = `departmentStatusDownID=${department.id}&status=${departmentStatus}`, 
								departmentStatusDownID = send('POST', 'http://localhost/chat/admin/admin_manager_users.php', data);
								departmentStatusDownID.then((response) =>
									{
										if (response == 200)
										{
											console.log(`deparnment.status=${department.status}`);
											console.log(department.obj.style.background);
											if (department.status == 0)
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
											else
											{
												department.obj.style.background = "brown";
												mainContentDepartments.departments.departments.forEach(departmentFromMainInterface =>
													{
														if (department.id == departmentFromMainInterface.id)
														{
															departmentFromMainInterface.obj.style.visibility = "hidden";
														}
													}
												)
											}
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