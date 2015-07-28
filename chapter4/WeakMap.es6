//WeakMap

//----------------------------
//-
//- 1 WeakMap类似Map，只是WeakMap只接受对象作为key
//-
//----------------------------
var intro =`WeakMap结构与Map结构基本类似，唯一的区别是它只接受对象作为键名（null除外），不接受原始类型的值作为键名
			WeakMap的设计目的在于，键名是对象弱引用（垃圾回收机制不将该引用考虑在内），所以其所对应的对象可能会被自动回收
			当对象被回收后，WeakMap自动移除对应的键值对。经典应用是，一个对应的DOM元素的WeakMap结构,
			当某个DOM元素被清除，其所对应的WeakMap记录就会自动被移除.
			基本上,WeakMap的专用场合就是，它的键所对应的对象，可能在将来消失。
			WeakMap结构有助于防止内存泄露`;

//类似Map的属性,有has delete get set 没有size

var map = new WeakMap();

var element = document.querySelector('.element');

map.set(element,'element');

var value = map.get(element);
console.log(value);

element.parentNode.removeChild(element);
element = null;

value = map.get(element);
console.log(value);