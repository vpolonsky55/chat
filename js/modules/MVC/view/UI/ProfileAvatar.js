// класс для меню с аватаркой справа вверху
class ProfileAvatar extends Avatar
{
	constructor(...args)
    {
        super(...args);
        this.profile.obj.href="http://localhost/chat/index.php"
		this.profile.insertText("Чат");
    }
}