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
//-  2 new features???
//-
//----------------------------

//1 repeat
let str1 = str.repeat(2);
console.log(str);//Hi,Jackey is a male
console.log(str1);//Hi,Jackey is a maleHi,Jackey is a male

//2 codePoitAt

//3 String.fromCodePoint

//4 contains startsWith endsWith