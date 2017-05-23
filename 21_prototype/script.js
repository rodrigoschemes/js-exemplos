function Person(name){
    this.name = name;
}
Person.prototype.email="luiz@schoolofnet.com";
Person.prototype.getName = function(){
    return this.name;
};

var object = new Person("Luiz Carlos");
var object1 = new Person("Wesley");
console.log(object.getName());
console.log(object1.getName());