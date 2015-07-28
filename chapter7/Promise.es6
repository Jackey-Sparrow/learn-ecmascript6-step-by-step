//promise


//----------------------------
//-
//- 1 promise 对象是一个构造函数，用来生成promise实例
//-
//----------------------------

//basci usage

//var promise = new Promise(function (resolve, reject) {
//    if (success) {
//        resolve(response);
//    } else {
//        reject(error);
//    }
//});

//实战
var getList = function (url) {
    var promise = new Promise(function (resolve, reject) {

        var http = new XMLHttpRequest();
        http.open('GET', url);
        http.onreadystatechange = function () {
            if (this.readyState === this.DONE) {
                if (this.status === 200) {
                    resolve(this.response);
                } else {
                    reject(this);
                }
            }
        };
        http.responseType = 'json';
        http.setRequestHeader('Accept', 'application/json');
        http.send();
    });
    return promise;
};

getList('./chapter7/list.json').then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});