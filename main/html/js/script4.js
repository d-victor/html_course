var name = "dfsd";

task();

function task() {
    prompt('What is yor name?');
}

var main = function () {
    task();
};
main();

function task1(message, defaultMessage) {
    prompt(message, defaultMessage);
}

/*
task1('What is yor name?', 'ds-ds');
task1('bal-bla');
*/
function task2() {
    console.log(arguments);
    for(var i=0; i<arguments.length;i++){
        console.log(arguments[i]);
    }
}

//task2('sdfds', 1111, true);

function task3(text) {
    if (!text) return;
    
    text += text;
    
    return text;
}

//task3(prompt('dfsgdsf'));

function task4(text) {
    text = text || 'What?';
    
    return text;
}

//console.log(task4());
var d = 3;

function task5(ff) {
    var d = 0;
    d *= 2;
    d = ddd(ff);
    
    function ddd(ff) {
        console.log(d);
        
        return ff;
    }
    return d;
}

task5();

function task6(func) {
   console.log(func('ddd'))
}

task6(task5);
var count = 0;
function task7() {
    var count = 0;
    
    return function () {
        return ++count;
    }
}

var count = task7();
var count1 = task7();
var count2 = task7();
var count3 = task7();
console.log(task6(count));
console.log(count());
console.log(count());
console.log(count(), count1());
console.log(count(), count1(), count2());
console.log(count(), count1(), count2());
console.log(count(), count1(), count2());
console.log(count(), count1(), count2());

