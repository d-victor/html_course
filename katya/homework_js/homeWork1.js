//
function setFormatFirstLastName( FirstLastName, pattern) {
    if (FirstLastName !== Number || countPosition(pattern,'a') !== Number){
        return false;
    }

    var returnFirstLastName = '';
    var count = 0;

    for (let i=0; i < pattern.length; i++){
        if (pattern[i] !== 'a'){
            returnFirstLastName += pattern[i];
        }else {
            returnFirstLastName += FirstLastName[count];
            count++;
        }
    }

    return FirstLastName;
}

console.log(setFormatFirstLastName("DariaKorobchyk" , 'Aaaaa Aaaaaaaaa'));


function countPosition(str,searchStr) {
    var count = 0;
    var position;

    while (position !== -1) {
        position = str.indexOf(searchStr, position + 1);

        if (position !== -1){
            count++ ;
        }
        console.log(count);
    }

    return count;
}


var returnNumber = '';
var count = 0;

for (let i=0; i < pattern.length; i++){
    if (pattern[i] !== 'x'){
        returnNumber += pattern[i];
    }else {
        returnNumber += numberPhone[count];
        count++;
    }
}

return returnNumber;
}

console.log(setFormatNumber1(numberPhone , '+xx (xxx) xx-xx-xxx'));

//////////////////////
function countPosition(str,searchStr) {
    var count = 0;
    var position;

    while (position !== -1) {
        position = str.indexOf(searchStr, position + 1);

        if (position !== -1){
            count++ ;
        }
    }

    return count;
}