//数组的扩展

//----------------------------
//-
//- 数组的扩展
//-
//----------------------------

// 1 Array.from() 用于将“类似数组的对象”和“可遍历的对象”转换成真正的数组
let ps = document.querySelectorAll('p');
Array.from(ps).forEach((p)=> {
	console.log(p);
});

// 2 Array.of() 将一组数值转换为数组
var arr1 = Array.of(1, 2, 3, '4');
console.log(arr1);

// 3 find 返回第一个符合条件的对象
// findIndex() 返回第一个符合条件的对象的索引
// find and findIndex可以发现NaN,弥补了indexOf的不足

var obj = [1, 2, 3, 4, 5].find(function (value, index, arr) {
	return value > 3;
});
console.log(obj);

// 4 fill 给指定的值填充一个数组
var arr2 = ['a', 'b', 'c'];
arr2.fill(7);//7,7,7
console.log(arr2);
//第二个参数：起始位置
//第三个参数：结束位置
arr2.fill(8, 1, 2);//7, 8, 7
console.log(arr2);

// 5 values键值的遍历
//   keys 键名的遍历
//   entries 键值对的遍历

var arr3 = [
	{name: 'Jackey', age: 25},
	{name: 'Jackey', age: 25}
];

for (let key of arr3.keys()) {
	console.log(key);
}

for (let val of arr3.values()) {
	console.log(val);
}

for (let item of arr3.entries()) {
	console.log(item);
}

// 6 数组的推导
//直接通过现有的数组生成新数组，称为数组的推导
var arr4 = [1, 2, 3, 4];
var arr5 = [for (i of arr3) i * 2];
console.log(arr5);
