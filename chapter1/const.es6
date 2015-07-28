//const 一旦赋值，不能修改
const PI = 3.1415926;

//----------------------------
//-
//- 1 const 重复赋值会发生什么
//-
//----------------------------

//PI = 3.14;//PI is read-only


//----------------------------
//-
//- 2 const和let一样，存在块级作用域
//-
//----------------------------

if(true){
	const myName = 'Jackey';
}

console.log(myName);//myName is not defined