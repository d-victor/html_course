/*var i = 3; /// Виведе 3,2,1

while (i){
    console.log( i-- );
}
var a = 3;
do {
   console.log(a--);
} while (a);


 var c = 0;

 while (c < 5){
 console.log(c);
     ++c;
}                 */    // 1,2,3,4

/*while (c < 5){
   console.log(c);
      // c++;
}                     // 1,2,3,4,5

do {
  console.log(c);
       ++c;
} while (c < 5);
*/
/*do {
  console.log(c);
        c++;
} while (c < 5);

for (c = 0;c < 5;c++){
    console.log(c);
}
for (c = 0;c < 5;c++){
    console.log(c);
}

for (var f = 0; f < 5; f++) console.log(f); // Від 0 до 4

for (var f = 0; f < 5; ++f) console.log(f); // Від 0 до 4
*/
/*var f = 0;

while(f < 5){
  console.log(f);
   ++f;
}
var xz = 0;
while(xz < 5){
  console.log(xz);
   xz++;
}

var ff = 0;
do{
    console.log(ff);
    ff++;
} while( ff < 5 );
*/
/* var fff = 0;

do{
 console.log(fff);
    +fff;
} while( fff < 5 );

for( var dd = 2; dd <= 10;++dd){

 if (dd % 2 === 0){
console.log(dd);
}

 }*/

/*var as = 2;

while ( as <= 10 ){
    if (as % 2 === 0){
        console.log(dd);
     ++dd;
}

 }
 var da = 2;
    do {
    if (da % 2 == 0){
     console.log(++da)
  }

 } while (da <= 10);*/

/* var k = 0;
 while(k < 3){
    alert( `number ${k}!`);
    k++;
 }
var num;
    do {
 num = prompt( 'Enter number', '' );
 }while ( num <= 100 && num );

 var numb = prompt( 'Enter number', '' );
 while( numb < 100 ){
    numb = prompt( 'Enter number', '' );
 }*/

/* var n = 10;
label: for (var p = 2; p<= n; p++){
    for (var s = 2; s < p; s++){
        if (p % s === 0) break label;
     }
    console.log*//*(p);*/
/*}*/

/*
 var number = 1;

 while( ++number < 100 ){
 alert(number);
 }*/

// 1 //

/*var result = '';
var i = 0;
 do {
   i += 1;
 result += i + ' ';
} while (i < 1000);
document.write(result);*/

/// 2 ///
/*
var y = 1;
 for (y = 1; y < 10;y++){
   if ( y % 2 ) {
       alert (y + ' Не парне');
     } else {
    alert (y + ' Парне')
    }
 }
*/


// 3 //
/* var i = 0;
 var ts = 5;
for (i = 0;ts < i; i++){
  ts *= ts;
  console.log(ts);
}*/

// 5 //

/*   for (var i = 1; i <= 4; i++) {

   for (var j = 1; j <= 4; j++) {

     console.log(` ${i},${j}`);

   }
 } */

//4//
/*var a = 10;
var b = 0;
   while (a !== 0) {
   a--;
   console.log(a);
   }
   while (b <= 10) {
   ++b;
   console.log(b);
   }*/

// 7 //

/* var text = 'Цикли пропонують швидкий та легкий спосіб робити щось неодноразово';
 for (var i = text.length - 1; i >= 0 ; i--){
   console.log(text[i]);
 }
*/
//8//
/*var text = 'Цикли пропонують швидкий та легкий спосіб робити щось неодноразово';
for (var i = 0; i < text.length ; i++) {
    if (i % 3){
        console.log(text[i]);
    }
}*/

// 9//
/*function task8() {
    var num = +prompt('Enter number');
    var validateNum = num > 0;
    var isReturn = !validateNum;
    if (!validateNum) {
        isReturn = confirm("Error, try again.");
    }
    if (isReturn) {
        task8();
        return;
    }
}*/

/*task8();*/

/*1 Пользователь должен ввести данные, promrt
   положительное число больше нуля. number, > 0
  2  Нужно реализовать валидацию,
   если введено не число или же число не соответствует условию, number, > 0
  3 нужно вывести сообщение,    confirm
   что введено не число, с возможностью выбора, message
  4 ввести еще раз return 1
  5 либо завершить программу.

   */


/*do{
    var num = +prompt('Enter number');
    var validateNum = num > 0;
    if (!validateNum){
        var isReturn = confirm("Error, try again.");
    }
}while(isReturn);
*/
/*function task8() {
    var num = +prompt('Enter number');
    var validateNum = num > 0;
    var isReturn = !validateNum;
    if (!validateNum){
        isReturn = confirm("Error, try again.");
    }
    return isReturn;
}*/
/* console.log(task8());*/

/*while (task8()){

}*/


//10//

/* var a = "";
 for (var i = 0; i < 5; i++){
   a = a + "x";
   console.log(a);
 }*/
/*
function task9(h, variant) {
    console.log(h, variant);
    if (undefined === variant) {
        variant = true;
    }
    if (undefined === h) {
        h = 5;
    }
    var sp = '--';
    var spacer = '-';
    var space = '';
    var block = '';
    var spaceBlock = '#';

    if (variant) {
        getPiramid(h, spacer, space, block, spaceBlock);
    } else {
        getPiramidV2(h, spacer, space, block, spaceBlock, sp);
    }

}

task9(5, false);

function getPiramid(h, spacer, space, block, spaceBlock, sp) {
    var view = '';

    for (var i = 1; i <= h; i++) {

        for (var j = 1; j <= h - i; j++) {
            space = space + spacer;
        }

        block = block + spaceBlock;

        if (sp === undefined) {
            view = space + block;
        } else {
            view = space + block + sp + block;
        }

        console.log(view);

        space = '';
    }
}
*/

/*function getPiramidV2(h,spacer,space,block,spaceBlock,sp) {
    for (var i = 1; i <= h; i++){
        for (var j = 1; j <= h - i; j++ ){
            space = space + spacer;
        }
        block = block + spaceBlock;
        console.log( space + block + sp + block );
        space = '';

    }
}*/
/// function 1///

/*
var name1;
var name2;
var name3;

function getName(name1, name2, name3) {
    console.log(name1, name2, name3);
}

getName('Olia', 'Dasha', 'Masha');

*/

//2//

/*
function calcNum(num){
    num *= num;
    return num;
}
 var num = 5;
console.log(calcNum(num));
*/

//3//
var text;
var text1;
function checkText(text) {
    if (text === 'String') {
        text1 = true;
        return true;
    } else {
        text1 = false;
        return false;
    }
    
}
console.log(checkText('something'));
