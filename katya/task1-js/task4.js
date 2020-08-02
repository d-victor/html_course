var nameList = 'Inna, Daria, Masha, Ira, Olya';
function changePossitionName(nameList, targetName, name2, separator) {
    nameList = changeElemArray(nameList, nameList.indexOf(targetName), nameList.indexOf(name2));

    return nameList.join(separator);

}
var finalName = changePossitionName(nameList, 'Olya', 'Daria', ', ');
console.log(finalName);

function changeElemArray(array, index1, index2) {
    array = array.slice(0);
    var temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;

    return array;
}

/*
function stringToArray(string, separator) {
    var arr = string.split(separator);
    return arr;
}
*/
