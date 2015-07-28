/**
 * Created by Jackey Li on 2015/7/26.
 */

//var and  let, let命令所在的代码块有效

//----------------------------
//-
//- 1 let声明的变量只存在块级作用域
//-
//----------------------------

//经典闭包
var a = [];
for (var i = 0; i < 10; i++) {
	var c = i;
	a[i] = function () {
		console.log(c);
	}
}

a[6]();//9

//使用let
var a = [];
for (var i = 0; i < 10; i++) {
	c = i;
	a[i] = function () {
		console.log(c);
	}
}

a[6]();//6

//----------------------------
//-
//- 2 不存在“变量提升”
//-
//----------------------------

//用var声明的变量，会存在一种变量提升的现象
function foo() {
	console.log(myName);//undefined
	var myName = 'Jackey';
}

//使用let,则会抛出错误
function foo() {
	console.log(myName);//ReferenceErrod
	let myName = 'Jackey';
}

//foo();
//but,now in the console, we can see, let just works like var,
//maybe it's the compile issue

//----------------------------
//-
//- 3 不允许重复声明同一个变量
//-
//---------------------------

//var d = 10;
//let d = 10;

//Duplicate declaration, d"

//----------------------------
//-
//- 4 块级作用域
//-
//---------------------------

//在var声明的变量下,在if（）块级作用域里面，依然可以访问外部的
function foo1(){
	var n = 5;
	if(true){
		var n = 10;
	}
	console.log(n);//10
}

function foo1(){
	let n = 5;
	if(true){
		let n = 10;
	}
	console.log(n);
}

foo1(); //5n

//IIFE写法不再需要
(function () {
	var temp;
})();

//块级作用域写法
{
	let temp;
}
