//module


//----------------------------
//-
//- 1 module
//-
//----------------------------

//export and import
import {Hello,myName,sayHi} from './chapter8/profile.es6';
import {CirclePlus,circle} from './chapter8/CirclePlus.es6';
class Init{
    constructor(){
        var hello = new Hello();
        hello.sayHi();
        console.log(myName);
        sayHi();
        CirclePlus();
        circle();
    }
}

var init = new Init();

// 1 模块的整体加载，在上面的例子{Hello,myName,sayHi} 可以看出，一个一个import比较麻烦，
//那么可以使用 module profile from 'xxx';

// 2 export default xxx ：export设置一个默认的方法
//例如使用了module xx from xxx整体加载，那么
//你在export的文件定义了一个default的函数 export default function foo(){}
//那么在使用的时候，xx()代表的就是设置为默认的那个函数

//3 模块的继承

//export * from '';
//看Circle.es6 和CirclePlus.es6例子

//4 import exp from '';
// 将文件模块的默认方法加载为exp方法