//函数扩展

//----------------------------
//-
//- 1 函数参数的默认值
//-
//----------------------------

function foo(x = 1, y = 3) {
	this.x = x;
	this.y = y;
}

var f = new foo();

//----------------------------
//-
//- 2 rest参数,用于获取多余的参数，就不需要 再使用arguments
//-
//----------------------------

function foo1(...tails) {
	let sum = 0;
	for (var val of tails) {
		sum += val;
	}
	return sum;
}

var f1 = foo1(2, 3, 4, 5);
console.log(f1);

//usage
function push(array, ...items) {
	array.push(...items);
}
var arr = [];
push(arr, 2, 3, 4, 5);
console.log(arr);

//----------------------------
//-
//- 3 箭头函数
//-
//----------------------------

var foo2 = function (x) {
	return x;
}

// 1 无参 或者多个参数,也可以是一个参数
var foo3 = ()=>5;
var foo4 = (x, y)=>x + y;
// 2 一个参数可以更简单
var foo5 = x=>x;
//多句代码
var foo6 = (x, y)=> {
	return x + y;
}


//用途
// 1 old
[1, 2, 3].map(function (x) {
	return x * x;
});
//new
var newArr = [1, 2, 3].map((x)=> {
	return x * x;
});
console.log(newArr);

//----------------------------
//-
//- 4 this
//-
//----------------------------
var doSomething = {
	id: '1',
	init: function () {
		document.addEventListener('click', event=>this.sayHi(), false);
	},
	sayHi: function () {
		console.log('hi');
	}
};

doSomething.init();

//使用了箭头函数，导致this绑定了doSomething对象
//this不再是使用时所在的对象
//不可以使用arguments