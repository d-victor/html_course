function getFormatName( firstName, lastName,prefix, postfix) {
    if (requaredValue(firstName,'string') && requaredValue(lastName, 'string')){
        return false;
    }
    var returnStr = spaceConcatStr(firstName,lastName);

    if (prefix){
        returnStr = spaceConcatStr(prefix,returnStr);
    }
    if (postfix){
        returnStr = spaceConcatStr( returnStr, postfix);
    }

return returnStr;
}
console.log(getFormatName('Daria','Korobchuk','mis','!'));
function requaredValue(value,type) {
    return !value && !type && typeof value !== type;
}
function spaceConcatStr(str,str1) {
    return str + ' ' + str1;
}
console.log('cheburasha');
