//Iterator

//----------------------------
//-
//- 1 Iterator 的作用：1 为遍历对象的属性提供统一的接口
//-                   2 使对象的属性能够按次序排列
//----------------------------

//遍历器协议规定，部署了next方法的对象，就具备了遍历器的功能。
//next方法必须返回一个包含value和done两个属性的对象、

function MakeIterator(array) {
    var nextIndex = 0;
    return {
        next: function () {
            return nextIndex < array.length ? {value: array[nextIndex++], done: false} : {value: undefined, done: true};
        }
    };
}

var it = MakeIterator([1, 2]);

console.log(it.next().value);//1
console.log(it.next().value);//2
console.log(it.next().done);//true