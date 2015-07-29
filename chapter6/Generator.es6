//Generator

//----------------------------
//-
//- 1 Generator 就是一个内部状态的遍历器即每调用一次遍历器，内部状态发生一次改变
//-
//----------------------------

// function关键字后面有一个星号 2 函数内部使用yield语句定义遍历器的每个成员


// 1 基本使用
function* foo() {
	yield 'good';
	yield 'morning';
	yield 'Jackey';
	return 'end';
}

var f = foo();
console.log(f.next());//{done:false,value:'good'}
console.log(f.next());//{done:false,value:'morning'}
console.log(f.next());//{done:false,value:'Jackey'}
console.log(f.next());//{done:true,value:'end'}
console.log(f.next());//{done:true,value:undefined}

//2 可以不使用yield,单纯当成一个暂缓执行函数来使用
function* foo1() {
	console.log('finally, I log out');
}

//foo1只有在调用next方法的时候才会执行
var f1 = foo1();//没有输出任何东西
//f1.next(); //只有执行这个才会输入：finally, I log out

//和传统的区别
function foo2() {
	console.log('I log out');
}

var f2 = foo2();//直接输出：I log out

//3 next方法的参数。next方法有一个参数，就是上一个yield语句返回的结果

//4 异步操作的应用
//function* getList(){
//	showLoading();
//	yield getData();
//	hideLoading();
//}

//var g = getList();
//g.next();//show loading and get Data
//g.next();//hide loading

//5 yield * 如果yield后面跟的是一个遍历器， 则需要加上×
let inSiseIterator = (function* () {
	yield 'hello';
	yield 'world';
}());

let outSideIterator =(function* () {
	yield 'hi';
	yield* inSiseIterator;
	yield 'end';
}());

//使用for of 遍历
for(let val of outSideIterator){
	console.log(val);
}
//hi
//hello
//world
//end

//通俗的写法：
var F4 = function*(){
	yield 'f4-1';
	yield 'f4-2';
}
var f4 = F4();

var F5 = function*(){
	yield 'f5-1';
	yield* f4;
	yield 'f5-2';
}

var f5 = F5();

for(let val of f5){
	console.log(val);
}

//f5-1
//f4-1
//f4-2
//f5-2