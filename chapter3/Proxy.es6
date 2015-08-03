//Proxy

//----------------------------
//-
//- Proxy
//-
//----------------------------

//Proxy的作用：是在定义目标对象之前，架设一层‘拦截’，外界对该对象的访问，都必须先通过这层来拦截

//usage
//var proxy = new Proxy({},{
//	get: function (target,property) {
//		return xxx;
//	}
//});


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