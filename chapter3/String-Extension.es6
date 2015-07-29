//字符串扩展

//----------------------------
//-
//- 1 模板字符串template string
//-
//----------------------------
let name = 'Jackey',sex = 'male';
let str = `Hi,${name} is a ${sex}`;//Hi,Jackey is a male

//----------------------------
//-
//-  2 new features
//-
//----------------------------

//1 repeat
let str1 = str.repeat(2);
console.log(str);//Hi,Jackey is a male
console.log(str1);//Hi,Jackey is a maleHi,Jackey is a male

//2 codePoitAt

//3 String.fromCodePoint


//在es5中只有indexOf可以用来确定一个字符串是否包含在另一个字符串上，现在ed6增加了三种方法
//4 contains startsWith endsWith

var str2 = 'hello Jackey';
//console.log(str2.contains('o'));//I cannot use this function, maybe the traceur is not ready
console.log(str2.startsWith('hello'));//true
console.log(str2.endsWith('key'));//true
//支持第二个参数，表示开始搜索的位置
//console.log(str2.contains('o',2));
console.log(str2.startsWith('hello',2));//false
console.log(str2.endsWith('key',7));//false

//5 正则表达式的y修饰符