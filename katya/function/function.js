/// function 1///

var name1;
var name2;
var name3;

function getName(name1, name2, name3) {
    console.log(name1, name2, name3);
}

getName('Olia', 'Dasha', 'Masha');


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

 function checkString(text1) {
     var text1 = prompt( "Writing something"); console.log(typeof text1);
    if (text1 === 'String') {
        return true;
    }else {
       return false;
    }
 }
 console.log(checkString());

//4//

/*function getSize() {
   console.log(arguments);

   for (var a=0; a<arguments.length;a++){
       console.log(arguments[a]);
   }
}
getSize(38,40,42,44);*/


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
     if (name === 'String'){
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


