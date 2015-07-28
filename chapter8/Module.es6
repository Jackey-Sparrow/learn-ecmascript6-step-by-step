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

// 1 ģ���������أ������������{Hello,myName,sayHi} ���Կ�����һ��һ��import�Ƚ��鷳��
//��ô����ʹ�� module profile from 'xxx';

// 2 export default xxx ��export����һ��Ĭ�ϵķ���
//����ʹ����module xx from xxx������أ���ô
//����export���ļ�������һ��default�ĺ��� export default function foo(){}
//��ô��ʹ�õ�ʱ��xx()����ľ�������ΪĬ�ϵ��Ǹ�����

//3 ģ��ļ̳�

//export * from '';
//��Circle.es6 ��CirclePlus.es6����

//4 import exp from '';
// ���ļ�ģ���Ĭ�Ϸ�������Ϊexp����