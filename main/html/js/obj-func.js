
class Person {
    constructor(options){
        this.name = options.name;
        this.age = options.age;
    }
    
    sey(){
        console.log('My name ' + this.name + ' i am ' + this.age)
    }
}

function Person(options) {
    this.name = options.name;
    this.age = options.age;
    this.sey = function () {
        console.log('My name ' + this.name + ' i am ' + this.age)
    }
}

var nikolya = new Person({
    name: 'Nikolay',
    age: 15
});

var olay = new Person({
    name: 'Olya',
    age: 34
});

console.log(nikolya, olay);


