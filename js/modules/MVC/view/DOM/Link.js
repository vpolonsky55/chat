class Link
{
  constructor(parent, selector, href, id=0)
  {
    this.parent = parent;
    this.selector = selector;
    this.obj = document.createElement("a");
    this.id = id;
    this.classes = [];
    this.idName = "";
    this.obj.href = href;
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
   insertText(text)
  {
    this.obj.innerText = text;
    this.text = text;
  }
  getText()
  {
    return this.text
  }
  getMe()
  {
    return this.obj
  }
}