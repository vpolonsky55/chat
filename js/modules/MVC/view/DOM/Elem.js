// class Elem extends Tag
// {
//   constructor(elementType)
// 	{
// 		let parent = arguments[0];
// 		let selector = arguments[1];
// 		let elementType = arguments[2]
// 		super(parent, selector, "div", id, value)
// 	}
// }


class Elem
{
  constructor(parent, elementType, selector, id=0)
  {
    this.parent = parent;
    this.selector = selector;
    this.obj = document.createElement(elementType);
    this.id = id;
    this.classes = [];
    this.idName = "";
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
}