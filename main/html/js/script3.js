var i = 10;
/*while (i !== 0) {
    console.log(i);
    i--;
    console.log(i);
}*/
/*while (++i < 10) {
    if (i % 3 === 0) {
        continue;
    }
    console.log(i);
   
}*/
/*do {
   console.log(i);
} while (++i < 10);*/
var nameList = ["Petya", "Vanay", 'Dasha'];
/*for (var i = 0; i < nameList.length ; i++) {
    console.log(nameList[i] + " hello");
}*/

var text = 'dsflkhsdfgolki djsfglkdjsgfohklj drfsghkldfjghkl jdfgfkl';
/*for (var i = 0; i < text.length ; i++) {
    console.log(text[i].toUpperCase());
}*/
var skillList = [];
var work = [['html', 'js'], ["Petya", "Vanay", 'Dasha'], [1,2,3,4]];
ssss: for (var i=0; i<work.length; i++) {
    for (var y=0; y<work[i].length; y++) {
        console.log(work[i][y], i, y);
        if (work[i][y] === 'Petya') break ssss;
    }
    //console.log(work[i]);
}
