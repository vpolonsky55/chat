login = document.cookie.split("=")[1];
let profileTxtAbout = document.querySelector(".profileTxtAbout"),
selfDescription = document.querySelector(".selfDescription");

if (document.querySelector(".profileTxtLogin")) 
{
	document.querySelector(".profileTxtLogin").innerText=login
}

