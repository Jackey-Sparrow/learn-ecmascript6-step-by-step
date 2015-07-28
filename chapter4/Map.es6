//Map


//----------------------------
//-
//- 1 Map 本质上是键值的组合，但是只能用字符串当作键
//-
//----------------------------
var m = new Map();
m.set('info', {name: 'Jackey'});
var info = m.get('info');
console.log(info);


//properties

// size
// set(key,value)
// get(key)
// has(key)
// delete(key)
// clear()

//遍历

//1 values() keys() entries()

m.set('information', {name: 'oo'});

for (let key of m.keys()) {
	console.log(key);//info information
}

for (let value of m.values()) {
	console.log(value);//{name: 'Jackey'}  {name: 'oo'}
}

for (let item of m.entries()) {
	console.log(item);//
}
//上面的结果
//["info", Object]
// 	0: "info"
//  1: {name: 'Jackey'}

//2 forEach

m.forEach(function (key, value) {

})