
/*class Person {
    constructor(options){
        this.name = options.name;
        this.age = options.age;
    }
    
    sey(){
        console.log('My name ' + this.name + ' i am ' + this.age)
    }
}*/

function Person(options) {
    this.name = options.name;
    this.age = options.age;
    this.sey = function () {
        console.log('My name ' + this.name + ' i am ' + this.age)
    }
}

function Animas(option) {
    this.name = option.name
}

Animas.prototype.getName = getName;

Animas.prototype.setName = setName;

function  getName() {
    return this.name;
}

function  setName(name) {
    return this.name = name;
}

Person.prototype.getName = getName;

Person.prototype.setName = setName;

var nikolya = new Person({
    name: 'Nikolay',
    age: 15
});

var olay = new Person({
    name: 'Olya',
    age: 34
});

console.log(nikolya, olay);
olay.setName('Masha');
console.log(olay.getName(), nikolya.getName());

var bog = new Animas({name: 'bobik'});

console.log(bog, bog.getName(), bog.setName('dsfds'), bog.getName());