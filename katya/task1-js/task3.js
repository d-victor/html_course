var nameList = 'Inna, Daria, Masha, Ira, Olya';
/*function changePossitionName(nameList, targetName, name2) {
    if(!nameList){
        return false;
    }

    nameList = changeElemArray(nameList, nameList.indexOf(targetName), nameList.indexOf(name2));
    return nameList;
}
var finalName = changePossitionName(stringToArray(nameList,', '), 'Olya', 'Daria');
console.log(finalName);


function changeElemArray(array, index1, index2) {
    array = array.slice(0);
    var temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;

    return array;
}*/
/*
function nameConsoleLog(nameList) {
    if(!nameList){
        return false;
    }

    nameList.forEach(function(elem,index) {
    })

}
nameConsoleLog(finalName);

function setPrefixName(nameList, prefix) {
    if(!nameList || !prefix){
        return false;
    }

    nameList = nameList.map(function (elem) {
          return prefix + elem
    })
    return nameList;
}
var finalPrefixNameList = setPrefixName(finalName, 'mis ');
*/

/*
var finalPrefixName = arrayToString(finalPrefixNameList, ', ');
*/

/*
console.log(finalPrefixNameList);
*/

function stringToArray(string, separator) {
    var arr = string.split(separator);
    return arr;
}

/*
function arrayToString(arr,separator){
    var string = arr.join(separator);
    return string;
}

*/


var nameCollectionList = changePosName(stringToArray(nameList,', '),[['Olya','Daria'],['Ira','Inna']])
function changePosName(nameCollectionList, changeNameList) {
    console.log(nameCollectionList, changeNameList);
    
    var indexName1 = nameCollectionList.indexOf(changeNameList[0][0]);
    var indexName2 = nameCollectionList.indexOf(changeNameList[0][1]);
    var indexName3 = nameCollectionList.indexOf(changeNameList[1][0]);
    var indexName4 = nameCollectionList.indexOf(changeNameList[1][1]);

    
    nameCollectionList = nameCollectionList.slice(0);
    var temp = nameCollectionList[indexName4];
    nameCollectionList[indexName4] = nameCollectionList[indexName1];
    nameCollectionList[indexName1] = temp;
    

    return nameCollectionList;
    
}
console.log(nameCollectionList);

function findIndexName(arr, possition) {
    var indexName = arr.indexOf(possition);
    return indexName;
 }



