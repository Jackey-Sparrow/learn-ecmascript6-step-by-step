//对象扩展

//----------------------------
//-
//- 对象扩展
//-
//----------------------------

// 1 Object.is() 用来比较两个值是否严格相等，和（===）行为基本一致
//不同点在于 1
if (-0 === +0) {
	//dosomething
} //true
Object.is(-0, +0)//falseProxy

//不同点2
if (NaN === NaN) {
	//false
}

Object.is(NaN, NaN);//true

// 2 Object.assign() 个人感觉像extend
var target = {a: 1};
var source1 = {b: 1};
var source2 = {c: 1};

Object.assign(target, source1, source2);
console.log(target); //{a:1,b:1,c:1}

// 3 __proto__ 用来读取和设置当前prototype对象
var obj1 = {
	myName: 'Jackey',
	sayHi(){
		console.log(this.myName);
	}
};

obj1.sayHi();

//__proto__ 指向obj1
var obj = {
	__proto__: obj1,
	log(){
		console.log('log');
	}
}

obj.sayHi();
obj.log();
console.log(obj.myName);


// 4 Object.setPropertyOf() 和__proty__相同
//使用方式为：Object.setPropertyOf(object,prototype)

//5 Object.getPropertyOf() 用于读取一个对象的prototype
console.log(Object.getPrototypeOf(obj));


// 6 增强的对象写法:允许直接写入变量和函数，作为对象的属性和方法
var person = {
	name: 'Jackey',
	//birth, //I can not use this property!!
	sayHi(){
		console.log(this.name);
	}
};
person.sayHi();
person.birth = '1990-06-07';
console.log(person.birth);


// 7 属性名表达式:es6允许定义对象时用表达式作为对象的属性名。但是要放到方括号内
var Jackey = {
	'first name': 'Jackey',
	'last name': 'Li'
};

console.log(Jackey['last name']);//Li


// 8 observe() unobserve()
var obj = {
	name: 'Jackey',
	age: 25
};

function observer(changes) {
	changes.forEach(function (change) {
		console.log('发生变动的属性' + change.name);
		console.log('变动前的值' + change.oldValue);
		console.log('变动后的值' + change.object[change.name]);
		console.log('变动的类型' + change.type);
	});
}

Object.observe(obj, observer);

obj.name = 'Jackey1';
//发生变动的属性name
//变动前的值Jackey
//变动后的值Jackey1
//变动的类型update

Object.unobserve(obj,observer);