# 1 增强的对象写法:允许直接写入变量和函数，作为对象的属性和方法
var person = {
	name: 'Jackey',
	//birth, //I can not use this property!!
	sayHi(){
		console.log(this.name);
	}
};


# 2 Symbol
var mySymbol = Symbol('Jackey');

console.log(mySymbol.name);//I cannot get Jackey


# 3 Proxy

//实例
var person = {
	name: 'Jackey'
};

var proxy = new Proxy(person, {
	get: function (target, property) {
		if (property in target) {
			return target[property];
		} else {
			throw new ReferenceError(property + ' does not exist');
		}
	}
});

console.log(person.name);//I cannot use Proxy...
console.log(person.age);


