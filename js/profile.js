login = document.cookie.split("=")[0];
let profileTxtAbout = document.querySelector(".profileTxtAbout"),
selfDescription = document.querySelector(".selfDescription");

if (document.querySelector(".profileTxtLogin")) 
{
	document.querySelector(".profileTxtLogin").innerText=login
}

