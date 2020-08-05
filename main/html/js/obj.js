var person = {
    name: 'Niklola',
    'data-text': 'dd',
    skill: ['html', 'js'],
    age: 15,
    say: function () {
        console.log(this);
        console.log('my name ' + this.name + ' i am ' + this.age);
        return this;
    }
};
var d = person;

console.log(person.name, person['name'], person['data-text'], person.say())

