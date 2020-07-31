/* повертає масив по 3 елементи*/

var arrNum = [1,3,1,2,4,2,3,5,3,4,6,4,5,7,9,6,8,8,9,7,5,4,6,8];
var sizeNewArr;

function returnNewArray(arrNum, sizeNewArr){
    var returnArr = [];

    while (arrNum.length) {
        returnArr.push(arrNum.splice(0, sizeNewArr));
    }

    return returnArr;
}
var newArray = returnNewArray(arrNum, 3);
console.log(newArray);

/*Розділяє на парні та непарні*/

function getPropertyNum(newArray) {
    var returnEvenNum = newArray.filter(function (num,index) {
        return index % 2 === 1;
    })

    var returnOddNum = newArray.filter(function (num,index) {
        return index % 2 === 0;
    })

    return returnEvenNum;
}
console.log(getPropertyNum(newArray));

/*Порівнює суму чисел масиву з заданим значенням*/

function checkSumArr(newArray) {
    var checkNum = 14;
    console.log(newArray);
}

console.log(checkSumArr(newArray));