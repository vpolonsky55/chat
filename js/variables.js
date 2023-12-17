let field = {},
printField = {}, //дополнительная переменная для блокс с текстом "печатает"
printFieldTxt = {},
textarea = {},
fieldBlock = [],
login = "",
p = [],
click = 0,
clickWhile = 0,
avatar = {},
mainContentEmployees = null,
mainContentDepartments = null;

document.body.addEventListener("click", (e) => console.log('client', e.clientX, e.clientY, 'screen', e.screenX, e.screenY, 'page', e.pageX, e.pageY, 'xy', e.x, e.y))