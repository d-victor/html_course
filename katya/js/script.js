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


    //6// ??

     for (var i = 1; i <= 4; i++) {

       /* if ( i % 2 ) {
          console.log(i + ' Не парне');
          } else {
         console.log(i + 'Парне');*/


          for (var j = 1; j <= 4; j++) {
            /* if (j % 2) {
                  console.log(j + ' Не парне');
              } else {
                  console.log(j + 'Парне');
              }*/
              console.log(` ${i},${j} `);
         }
     }
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


 /*let num = prompt("Enter the number");
    while(+num < 0 ){
      if (+num > 0){
          continue;
      }
    } confirm('You did not enter a number? Please,enter again or press cancel?');
*/
 //10//

/* var a = " ";
 for (var i = 0; i < 5; i++){
   a = a + "x";
   console.log(a + " ");
 }*/
 var a = " ";
 for (var i = 0; i < 3; i++) {
     a = (" " + a + "x");
     console.log(a + " ");

 }

 /// function 1///

/*
var name1 ="Olia";
var name2 ="Dasha";
var name3 ="Masha";
 function getName(name1,name2,name3) {
  console.log(name1,name2,name3);
 }
 getName(name1,name2,name3);

*/

        //2//

/*function calcNum(num){
    num *= num;
    return num;
}
 var num = 5;
console.log(calcNum(num));

        //3//

 function checkString(text1) {
     var text1 = prompt( "Writing something");
    if(!text1 === "0") {
        return true;
    }else{
        return false;
    }
 }
 console.log(checkString());

 */
        //4//
 /*function getSize() {
    console.log(arguments);
    for (var a=0; a<arguments.length;a++){
        console.log(arguments[a]);
    }
 }
 getSize(38,40,42,44);
 */

        //5//

 /*function task3(task4) {
     var k = 0;
     if (k === task4(f)) {
      console.log(task4());
     }

 }
 function task4() {
     var f = 2;
     return f;
 }
 */
       /* // 6 //
 function makeSomething() {

     var t = 1;

     return function() {
         return t++;
     };
 }*/
    //7//
/*
var name;
 var validName;
 function getName() {
    var name = prompt('What is your name?');
    return name;

 }
  function checkName(name) {
     if (name === 'String') {
         validName = true;
      return true;
     } else {
         validName = false;
         return false;
         checkName1();
     }

    function checkName1(validName) {
        if (validName === true){
            getName();
        }else{
            getMessage();
        }
    }
 }
 function getMessage() {
     console.log('"Welcome" + name');
 }
getName();
 checkName();

*/
