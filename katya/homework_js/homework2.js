
function searchValue(str, value){
    var count = 0;
    var position;
    var str1 = [];

    while (position !== -1) {
        position = str.indexOf(value, position + 1);
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




function setFormatNumber1( numberPhone, pattern) {
    if (numberPhone.length !== 12 || countPosition(pattern,'x') !== 12){
        return false;
    }
    return getPattern(numberPhone,pattern);
}
console.log(setFormatNumber1('380670001122', '+xx(xxx) xxx xx xx'));

function getPattern(numberPhone,pattern) {
    var returnNumber = '';
    var count = 0;

    for (let i = 0; i < pattern.length; i++) {
        if (pattern[i] !== 'x') {
            returnNumber += pattern[i];
        } else {
            returnNumber += numberPhone[count];
            count++;
        }
    }
    return returnNumber;
}

var position;
function countPosition(str,searchStr) {
    var count = 0;

    while (position !== -1) {
        getIndex(str,searchStr);
        if (position !== -1){
            count++;
        }
    }

    return count;
}

function getIndex(str,searchStr) {
    position = str.indexOf(searchStr, position + 1);
    return position;

}

