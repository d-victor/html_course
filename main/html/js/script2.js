var a = '[1]';
if (a.length === 0) {
    console.log('true');
    if(true){
    
    } else {
    
    }
} else if (a.length > 0 && typeof a === 'object') {
    
    console.log('sss');
} else {
    console.log('dd')
}
//if (true) alert('dd');
var b = !((2 + 2) % 2) ? 'true ' + ' ddd' : 'false';
console.log(b);
switch (4) {
    case 7:
    case 6:
        console.log(7, 6);
    case 5:
        console.log(5);
        break;
    case 4:
        console.log(4);
        break;
    default:
        console.log('gdsfg')
}

