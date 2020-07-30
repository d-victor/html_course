
var arr = [1,2,2,3,4,5,6,7,8,90,23,1,5,6,7,8,9,8,9];

function returnArr1(arr) {
    var indexCentre = Math.floor(arr.length / 2);
    var arr1 = arr.slice(0,indexCentre);
    var arr2 = arr.slice(indexCentre);

    var returnArr = [];
    returnArr.push(arr1,arr2);
    return returnArr;
}

/*
console.log(returnArr1(arr));
*/

function returnArr(arr) {
    return arr.slice(0,Math.floor(arr.length / 2));
}

/*
console.log(returnArr(arr));*/

function returnArr2(arr,status){
    var returnArr2 = arr.filter(function (num,index) {
        return  index % 2 === (status ? 0 : 1);
    });

    return returnArr2;
}

/*console.log(returnArr2(arr,true));*/

function returnArr3(arr,num) {
    var returnResult = arr.find(function (item) {
    return item === num;
    });
    return returnResult;

}
console.log(returnArr3(arr,90));