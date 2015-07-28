//Array destructuring 数组解构

//----------------------------
//-
//- 1 模式匹配
//-
//----------------------------

//old
var a = 1,
	b = 2,
	c = 2;

//1 in es6
var [e,f,g] = [1, 2, 3];

//只要符合匹配对应，都可以结构数组的值
var [h,[[i],j]] = [1, [[2], 3]];

//2 just need the last one
var [,,third]= ['first', 'second', 'third'];

//3 rest
var [head,...tail] = [1, 2, 3, 4, 5];
console.log(tail);//[2,3,4,5]

//4 set default value
var [k = 2] = [];
var [m = 2] = [3];
console.log(k);//2
console.log(m);//3

//5 var let const work the same
let [x,y,z] = [1, 2, 3];
const [x2,y2,z2] = [1, 2, 3];

//6 error
//如果匹配不上
var [n] = [];
console.log(n);//undefined

//var [p] = 1; //1[$traceurRuntime.toProperty(...)] is not a function

//7 usage
function example(){
	return [1,2,3];
}

var [a1,b1,c1] = example();

