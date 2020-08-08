function getSkills(list) {
    list = list.slice();
    var skillList = [];
    var unicSkillList = [];

    list.forEach(function (item) {
        skillList = skillList.concat(item.skillList)
    })
    unicSkillList = unicValue(skillList);

    return unicSkillList;
}

console.log(getSkills(workerList));



function unicValue(array) {
    var unicArrList = [];
    array = array.slice();

    array.forEach(function (item) {
        if (!unicArrList.includes(item)) {
            unicArrList.push(item)
        }
    });

    return unicArrList;
}


function getSkills( list) {
    list = list.slice();
    var skillList = [];
    var unicSkillList =[];

    for (var i = 0; i < list.length; i++){
        skillList = skillList.concat(list[i].skillList)
    }
    unicSkillList = unicValue(skillList);

    return unicSkillList;
}

console.log(getSkills(workerList));




function getSkills( list) {
    list = list.slice();
    var skillList = [];
    var unicSkillList =[];
    var count = 0;
    while (count < list.length){
        skillList = skillList.concat(list[count].skillList);
        count ++;
    }
    unicSkillList = unicValue(skillList);

    return unicSkillList;
}

console.log(getSkills(workerList));




function getSkills( list){
    list = list.slice();
    var skillList = [];
    var unicSkillList = [];

    list.map(function (item) {
        skillList = skillList.concat(item.skillList);
    });

    unicSkillList = unicValue(skillList);

    return unicSkillList;
}

console.log(getSkills(workerList));

function getSkills(list) {
    list = list.slice();
    var skillList = [];
    var unicSkillList = [];

    skillList = skillList.reduce(function (newArr, item) {
        newArr += item.skillList;
    }, []);

    unicSkillList = unicValue(skillList);

    return unicSkillList;
}

console.log(getSkills(workerList));


function addValue(list, weight) {
    list = list.slice();
    var value = {weight: weight};

    list.map(function (item) {
        list = item.weight = weight;
    });

    return list;
}

console.log(addValue(workerList, 50));


function changeValue(list, property, age) {
    list = list.slice();
    var value = {age: age};

    var newList = list.find(function (item) {
        return item === property ? list.age = age : list;
    })

    return newList;
}

console.log(changeValue(workerList, 'Olya', 26));

