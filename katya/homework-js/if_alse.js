if ("0") {
    alert('Hello!'); //true
}


var company = prompt('What\'s the official name the JavaScript?');
if (company == 'ECMAScript'){
    alert('Alright!');

} else {
    alert("You don't know?'ECMAScript'!");
}


var num = +prompt('Enter the number');
if ( num > 0 ){
    alert( 1 );

} else if (num < 0){
    alert(-1);

} else {
    alert(0);
}

var a = 1;
var b = 2;
( a + b < 4 )? " Little " : " Many ";


// var message = (login == "cowoker" ) ? "Hello" :
// (login == "Director") ? "Good day" :
// (login == "") ? "No login" :
// "" ;

alert( null || 2 || undefined ); //2 "true"

alert( alert(1) || 2 || alert(3) ); // 2 "true"

alert ( 1 && null && 2 ); // null 'false'

alert ( alert(1) && alert(2)); // alert(1), "undefined"

alert ( null || 2 && 3 || 4 ); // 2


var age = +prompt( 'How old are you?' );
if ( age >= 14  &&  age <= 90 ){
    alert( 'Hello!' );
} else {
    alert ( "Goodbay!" );
}

var age1 = +prompt( 'How old are you?' );
if ( !( age1 >= 14 && age1 <= 90 ) ){
    alert( 'Goodbay!' );
} else {
    alert ( "Hello!" );
}
var age2 = +prompt( 'How old are you?' );
if ( age2 < 14 || age2 > 90 ) {
    alert( 'Goodbay!' );
} else {
    alert ( "Hello!" );
}

if (-1 || 0) alert( 'first' ); // Виконується 'true'
if (-1 && 0) alert( 'second' ); // false
if (null || -1 && 1) alert( 'third' ); // Виконується 'true'

var userName = prompt( 'Who are you?', '' );
if (userName == 'Admin') {

    let pass = prompt( 'Parol?', '');

    if ( pass == "I'm in charge" ){
        alert( 'Hello!' );
    }else if ( pass == "" || pass == null ){
        alert('Canceled');
    }else {
        alert( " Invalid password " );
    }

} else if ( userName == "" || userName == null) {
    alert ( 'Canceled' );
} else {
    alert ( "I do not know you" );
}
var browser = prompt( 'What browser are you using?', '' )
if (browser == 'Edge'){
    alert( "You've got the Edge!" );
} else if (browser == 'Chrome'
    || browser == 'Firefox'
    || browser == 'Safari'
    || browser == 'Opera'){
        alert( 'Okay we support these browsers too' );
    } else {
        alert( 'We hope that this page looks ok!' );
    }
    let num1 = +prompt( " Enter a number " );
    switch (num1) {
        case 0:
            alert( " You have entered a number 0 " );
            break;
        case 1:
            alert( " You have entered a number 1 " );
            break;
        case 2:
            alert( " You have entered a number 2 " );
    }

    var yourAge = +prompt( "How old are you?" );
    
    if ( yourAge == 18 ){
        alert ('You are adult');
    
      if ( yourAge < 18 || yourAge > 13 ){
        alert( 'You are teenager' );

      } else if ( ( yourAge < 12 || yourAge > 3 ) ) {
            alert ('You are childhood');
        }
         
    } else{
        alert ( "You are toddler" );
        }  
        
        
        let yearData = prompt('In what year did the Internet appear?', '');

        if (yearData < 1983) {
          alert( 'A little early..' );

        } else if (year > 1983) {
          alert( 'It\'s a little late' );

        } else {
          alert( 'It\'s right ' );
        }


        let time = +prompt( 'How many hours?', "" );

        time = (time < 10 ) ? 'Good morning' :
        (time > 10 || time < 18) ? 'Good day' :
        (time > 18 || time < 22) ? 'Good evening':

        alert ( "message" );
        


       