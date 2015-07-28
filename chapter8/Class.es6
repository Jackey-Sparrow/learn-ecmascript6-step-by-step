//class


//----------------------------
//-
//- 1 class
//-
//----------------------------

//定义类
class Person {
    constructor(name, age, sex) {
        this.name = name;
        this.age = age;
        this.sex = sex;
    }

    getBasicInfo() {
        var info = {
            name: this.name,
            age: this.age,
            sex: this.sex
        };
        return info;
    }
}

class Person1 extends Person {
    constructor(name, age, sex, hobby) {
        super(name, age, sex);
        this.hobby = hobby;
    }

    getInfo(){
        var info = this.getBasicInfo();
        info.hobby = this.hobby;
        return info;
    }
}

var person = new Person1('Jackey', 25, 'male', 'coding');
console.log(person.getInfo());