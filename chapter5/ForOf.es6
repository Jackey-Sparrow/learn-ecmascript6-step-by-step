//for ... of 循环

//----------------------------
//-
//- 1 for ...of
//-
//----------------------------

//数组的遍历
let arr = [1, 2, 3, 4, 5];
for (let val of arr) {
    console.log(val);
}

//和for in 的区别
let obj = {
    name: 'Jackey',
    sex: 'male'
};

for (let o in obj) {
    console.log(o);//键名
    console.log(obj[o]);//value
}

//
var map = new Map();
map.set('name', 'Jackey');
map.set('sex', 'male');
map.set('age', 25);

for (var [name,value] of map) {
    console.log(name + ':' + value);
}