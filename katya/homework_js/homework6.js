var workerList = [];
function addWorker(workerList, name, age, stag, skillList) {
    workerList = workerList.slice();
    var worker = {
        name: name,
        age: age,
        stag: stag,
        skillList: skillList.slice(),
    }
    workerList.push(worker);
    return workerList;
}
workerList = addWorker(workerList,'Olya',25, 3,['html','css','js']);
workerList = addWorker(workerList,'Masha',27, 5,['html','css','js','git']);
workerList = addWorker(workerList,'Dasha',30, 8,['html','css','js','git','php','nodeJs']);
workerList = addWorker(workerList,'Dima',35, 10,['html','css','js','git']);
workerList = addWorker(workerList,'Ira',27, 2,['html','css','js','git']);
workerList = addWorker(workerList,'Vasya',29, 6,['html','css','js','git']);
workerList = addWorker(workerList,'Pasha',28, 4,['html','css','js','git']);
workerList = addWorker(workerList,'Roma',32, 7,['html','css','js','git']);
workerList = addWorker(workerList,'Vova',45, 20,['html','css','js','git']);
workerList = addWorker(workerList,'Vitya',23, 1,['html','css','js','git']);



// console.log(workerList);

function changeValue(list, searchProperty, changeValueList) {
    list = list.slice();


    var findObject = list.find(function (item) {

        return item.name === searchProperty;
    })
    for (let key in changeValueList){

        if (findObject.hasOwnProperty(key)){
            findObject[key].push(changeValueList[key]);
        }
    }

    return list ;
}

console.log(changeValue(workerList,'Olya', {skillList:'git'}));



function sortOfValue(list, searchKey) {
    list = list.slice();

    if(!list && !searchKey){
        return false;
    }

    list.map(function (item) {

        list = list.sort(function (a,b) {
            return a[searchKey] - b[searchKey];
        });
    })

    return list;
}
var newSortWorklist = sortOfValue(workerList,'stag',true);
console.log(newSortWorklist);


function reverseOfValue(list, searchKey) {
    list = list.slice();

    if (!list){
        return false;
    }
    list = list.reverse();

    return list;
}
var reverseNewList = reverseOfValue(newSortWorklist,'stag');
console.log(reverseNewList);