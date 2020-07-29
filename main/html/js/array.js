var a = 'a';
var b = a;
b= b+b+b+b;
console.log(a, b);

var arr = [1, '1', 0, 1, 0, 0, 0, 1, 1, '1', '2'];

arr.push('ddd');
arr.splice(arr.length - 2, 1);
console.log(arr);

var f = arr.slice(0, 5);
f.push('qqqqqq');

console.log(f, arr);

var c = [].concat(arr, ['q', 'aaa']);

console.log(c);

var zz = [
    {
        name: "Kolay",
        age:16
    },
    {
        name: "Kolay1",
        age:18
    },
    {
        name: "Kolay2",
        age:25
    }
];

console.log(zz.find(function (elem, index, arr) {
    return elem.age >= 16;
}));

console.log(zz.filter(function (elem, index, arr) {
    return elem.age >= 18;
}));

console.log(arr.filter(function (elem, index, arr) {
    return elem === 1;
}));

