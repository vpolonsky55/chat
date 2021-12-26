login = document.cookie.split("=")[1];
if (document.querySelector(".profileTxtLogin")) 
{
	document.querySelector(".profileTxtLogin").innerText=login
}
