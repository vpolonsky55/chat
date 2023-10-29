
let sideBar = new SideBar(document.querySelector("body"), ".side__bar")
let topBar = new TopBar(document.querySelector("body"), ".top__bar")

let openContentAdmin = "departments"
if (openContentAdmin == "employees")
{
	let mainContentEmployees = new MainContentEmployees(document.querySelector("body"), ".main-content")
}
else if(openContentAdmin == "departments")
{
	let mainContentDepartments = new MainContentDepartments(document.querySelector("body"), ".main-content")

} 
