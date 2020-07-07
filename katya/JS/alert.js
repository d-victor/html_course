
//     var ourContryRiver = "Dnipro";
//     var userName = 'Taras';
//     const yearOfBirth = 2000;
//     var numberYourHouse = 75;
//     var hasChildren = true;
//     var guest = null;
//     var userName = undefined;
//     var user = {
//         firstName = "Roman",
//         lastName = "Korobchuk",
//         yearOfBirth = 1980,
//     }
//     var name = 'Tom';
//     var age = 20;
//    var customer = [ "name", age ];
//    var typeProduct = "shorts";
//    var quantity = 10;
//    var available = true;
//    var availableSize = andefined;
//    var product = [ "typeProduct", quantity, true, andefined];
//    var customers = [ {user}];
//    var ListOfGoods = [[5],[8]];

// var a = "" + 1 + 0 ;
// console.log(a,"10");

// var b = "" - 1 + 0;
// console.log(b,-1);

// var c = true + false;
// console.log(c,1);

// var d = 6 / "3";
// console.log(d,2);

// var e = "2" * "3";
// console.log(e,6);

// var f = 4 + 5 + "px";
// console.log(f,"9px");

// var g = "$" + 4 + 5;
// console.log(g,"$45");

// var k = "4" - 2;
// console.log(k,2);

// var l = "4px" - 2;
// console.log(l,); //Nan

// var m = 7 / 0;
// console.log(m,Infinity);

// var n = " -9 " + 5;
// console.log(n,"-9 5",);

// var o = " -9 " - 5;
// console.log(0,-14);
// var p = null + 1;
// console.log(p,1);

// var r = undefined + 1;
// console.log(r,); //Nan

// var j = " \t \n" - 2;
// console.log(j,-2);
// //  Вірно 9 із 15

// var ab = 1, ba = 1;
// var cd = ++ab;
// console.log(cd,2);
// var dc = ba++;
// console.log(dc,1);

// let aaa = 2;

// let x = 1 + (aaa *= 2);
// console.log(x,5);

// alert( 5 > 4 ); //true

// alert( "ананас" > "яблоко" ); //false

// alert( undefined == null ); //true

// alert( undefined === null ); // false

// alert( null == "\n0\n" ); //false

// alert( null === +"\n0\n" ); //false

// let userName = prompt( "What is you name?" );
// let userOld1 = prompt("How old are you?" );
// let userProf = prompt("What is your profession?" );

//     console.log(userName, userOld1, userProf);

var age = prompt( "Скільки вам років?" );
if ( +age >= 18) {
    console.log('true');
    if (confirm( " Ви впевнені? " )){
        alert( " Доступ дозволено " ); 
         
    }else{
        alert( 'Доступ заборонено' );
    }

} else{
    alert( 'Доступ заборонено' );
}


var name = prompt( "What is you name?" );
console.log(typeof +name, +name, name);
if (Number.isNaN(+name) && typeof +name === "number" ) {
    console.log(123);

    if (name.length > 3) {
        console.log("Dfgfjgkgkg");
    } else if (name.length === 3){
        console.log("It's ok.But your name have 3 letters. Your name " + name );
    }else { 
        alert("Not three litters");
    }
    
} else {
    alert("Not number");
}









