class Select
{
  constructor(parent, selector, id=0)
  {
    this.parent = parent;
    this.selector = selector;
    this.obj = document.createElement("select");
    this.id = id;
    this.classes = [];
    this.idName = "";
	this.options = []    
    this.parseString();
    parent.appendChild(this.obj);
  }
  parseString()
  {
    let parse = this.selector.split(" ");
    this.classes = parse.filter((value)=> value.includes("."));
    this.classes = this.classes.map(value => value.slice(1)).join(" ");
    this.obj.className = this.classes;
    this.idName = parse.filter((value)=> value.includes("#"))[0];
    if (this.idName)
    {
      this.obj.id = this.idName.slice(1);
    }
  }
  getMe()
  {
    return this.obj
  }
  add(optionText, valueText)
  {
  	let option = document.createElement("option")
  	option.innerText = optionText
  	option.value = valueText
  	this.obj.appendChild(option)
  	this.options.push(option)
  }
  getText()
  {
  	return this.options[this.obj.selectedIndex].value
  }
}