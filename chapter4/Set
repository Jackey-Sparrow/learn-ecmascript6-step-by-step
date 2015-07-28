//Set

//----------------------------
//-
//- 1 Set类似于数组，只不过其成员值是唯一的，没有重复的值
//-
//----------------------------

var s = new Set();
[2, 3, 4, 1, 2].map((x)=> {
	s.add(x);
});
for(var val of s){
	console.log(val);
}

//直接赋值
var s1 = new Set([1,2,3,4,2,3,4,5]);
console.log(s1.size);//5

//properties

// Set.prototype.constructor 构造函数
// Set.prototype.size 成员总数
// add(value)
// delete(value)
// has(value)
// clear()

//支持链式使用 s.add(1).add(2).add(5)

//可以使用Array.from将Set数据转换成数组
var arr = Array.from(s1);
console.log(arr);