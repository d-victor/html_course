
function setFormatFirstLastName(FirstLastName, pattern) {
    if (FirstLastName == Number || countPosition(pattern, 'x') == FirstLastName.length) {
        return false;
    }

    var returnFirstLastName = '';
    var count = 0;

    for (let i = 0; i < pattern.length; i++) {
        if (pattern[i] !== 'x') {
            returnFirstLastName += pattern[i];
        }else if (FirstLastName[count] === undefined){ continue;
        } else {
            returnFirstLastName += FirstLastName[count];
            count++;

        }
    }

    return returnFirstLastName;
}

console.log(setFormatFirstLastName('Daria Korobchyk ', 'Mis xxxxxxxxxxxxxxxxxxxxx'));


function countPosition(str, searchStr) {
    var count = 0;
    var position;


    while (position !== -1) {
        position = str.indexOf(searchStr, position + 1);

        if (position !== -1) {
            count++;
        }

    }

    return count;
}

//////////

function searchValue(str, value){
    var count = 0;
    var position;
    var str1 = [];

    while (position !== -1) {
        position = str.indexOf(value, position + 1);
        /*console.log(position);*/
        if (position === -1) {
            break;
        }
        if (position !== -1 ) {
            count++;
        }
        str1 = [str.slice(position)];console.log(str1);
        str1.push([position,value]);
    }

    return str1;
    }

console.log(searchValue('His trousers were of the lightest blue whipcord' +
    ' his coat was blue; his waistcoat was blue velvet, with blue glass buttons;' +
    ' and in the matter of blue tie.', 'blue'));

