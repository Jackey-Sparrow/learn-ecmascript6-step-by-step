//Object destructuring

//----------------------------
//-
//- 1 模式匹配
//-
//----------------------------

//1 basic usage
//对象的属性没有次序， 变量必须和属性同名，才能取得正确的值
var {a , b} = {a: 'Jackey', b: 'Li'};

var {c} = {c: 'Jackey', d: 'LI'};//Jackey

var {e} = {c: 'Jackey', d: 'LI'};//undefined

//2 如果属性名不一样，必须写成这样
var {f:g,h}={f: 'Jackey', h: 'Li'};
//g: Jackey, f:undefined, h:Li

//3 解构对象
var o = {
	p: [
		'Hello',
		{y: 'world'}
	]
};

var {p:[x,{y}]} = o;
//p:undefined, x: hello, y:world

//4 解构复杂对象
var r = {
	firstName: 'Jackey',
	lastName: 'Li',
	company: {
		name: 'RIB',
		location: ''
	}
};

var {firstName,lastName,company}=r;
var {name,location} = company;

//5 default value
var {x = 3} = {};

//6 先声明变量，后赋值
var m;
({m} = {m: 1});
console.log(m);

//7 用途
function example() {
	return {
		a1: '',
		b1: ''
	}
}

var {a1,b1} = example();