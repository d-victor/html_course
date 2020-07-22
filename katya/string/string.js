var text;

function getWord(text) {
    console.log(text.indexOf('born',0));

}

getWord('Gaston Leroux was French. He was born in Paris on 6th May 1868.Leroux was a big, heavy man. He had a large black beard.'
);

var str;

function getSecond(str) {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);

}
console.log(getSecond(prompt('Writting something')));

var str1;
var updated;

function truncate(str1, maxlenght) {

    if (str1 > maxlenght) {
        updated = maxlenght + "...";
        return updated;
    } else {
        return str1;
    }

}

console.log(truncate('That is what I would like to say on this topic', 'That is what I would like'));

var str3;

function currencyValue(str3) {
    return +str3.slice(1);

}

console.log(currencyValue('$100'));


var str4;
var count = -1;
var position;

function countPosition(str4) {

    while (position !== -1) {
        position = str4.indexOf('e', position + 1);
        count++;
    }
    console.log(count);
}

countPosition('His reports were clear and exciting');

var str5;
var newStr;

function getString(str5) {
    newStr = str5.slice(50);
    for (let i = 0; i < newStr.length; i++) {
        if (i % 2) {
            console.log(newStr[i].toUpperCase());
        } else {
            console.log(newStr[i].toLowerCase());
        }

    }

}

getString('Sometimes, he was in trouble with his parents and with the city official.');

function getFullName1(fullName,search) {
    if (search === null || search === "" ){
        return -1;
    }
    fullName = fullName ? fullName : "";
    fullName = fullName.trim();

    var count = 0;

    for (let i=0; i < fullName.length;){

        i = fullName.indexOf(search, i);
        if (i === -1) {
            break;
        }else {
            i = fullName +1;
            count++;
        }

    }
    return count;
}
var fullName2 = getFullName1(prompt('What is your name'),prompt('What search?'));

console.log(fullName2);

var story;
var pos = -1;
var advebStr;
function getWor(story) {

    while (advebStr !== -1){
        advebStr = story.indexOf('stories',advebStr +1);
        pos++;
    }
    console.log(pos);
}
(getWor('He wrote adventure stories, romances, detective stories and horror stories.'));


var clear = clear;
function getStr6(textHis) {
    clear = textHis.includes('clear');
    if (clear === clear){
        console.log(textHis);
    }
}
getStr6('His reports were clear and exciting');


var ler;
var man;
var heavy;

function getSl(ler) {
    man = ler.slice(18);
    heavy =ler.substr(13,5);
    console.log(heavy + " " + man);
}
getSl('Lerouxwasabigheavyman');
