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

// 3 __proto__


// 4 Object.setPropertyOf()

//5 Object.getPropertyOf()

// 6 增强的对象写法

// 7 属性名表达式

// 8 Symbol

// 9