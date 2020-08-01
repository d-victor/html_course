var a = 'a';
var b = a;
b= b+b+b+b;
console.log(a, b);

var arr = [1, 0, 1, 15, 20, 0, 2, 16];

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

console.log(arr);

for (var i = 0; i < arr.length; i++){
    console.log(arr[i], i, 'for');
    if (i === 3) break;
}

for (var key in arr) {
    console.log(arr[key], key);
}

arr.forEach(function (item, index) {
    console.log(item)
});

console.log(arr.map(function (value, index, array) {
    return value + 10;
}), arr);

console.log(arr.sort(function (a, b) {
    return a - b;
}), arr);

console.log(arr.reverse());

var d = 'a,b,c,d,e';

console.log(d.split(',').reverse().join(','));

console.log(arr.reduce(function (previousValue, item) {
    return previousValue + item;
}));
