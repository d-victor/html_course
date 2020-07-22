function getWord(text, word) {
    return text.indexOf(word);
}

console.log(getWord('Gaston Leroux was French. He was born in Paris on 6th May 1868.Leroux was a big, heavy man. He had a large black beard.', 'born'));

function getSecond(str) {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);

}
console.log(getSecond(prompt('Writting something')));


function truncate(str1, maxLength) {
    if (str1.length > maxLength.length) {
        maxLength = maxLength + "...";
        return maxLength;
    } else {
        return str1;
    }
}

console.log(truncate('That is what I would like to say on this topic', 'That is what I would like'));

function currencyValue(str3) {
    return +str3.slice(1);
}

console.log(currencyValue('$100'));



function countPosition(str4, searchText) {
    var count = -1;
    var position;
    
    while (position !== -1) {
        position = str4.indexOf(searchText, position + 1);
        count++;
    }
    
    return count;
}

console.log(countPosition('His reports were clear and exciting', 'e'));

function getString(str5, position) {
    var newStr;
    
    newStr = str5.slice(position);
    
    for (let i = 0; i < newStr.length; i++) {
        if (i % 2) {
            console.log(newStr[i].toUpperCase());
        } else {
            console.log(newStr[i].toLowerCase());
        }
    }
}

getString('Sometimes, he was in trouble with his parents and with the city official.', 10);

function getFullName1(fullName, search) {
    if (search === null || search === "" ) {
        return -1;
    }
    fullName = fullName ? fullName : "";
    fullName = fullName.trim();

    var count = 0;
    var i = 0;
    
    while (true) {
        i = fullName.indexOf(search, i) + 1;
        if (i !== 0) {
            count++;
        } else {
            break;
        }
    }
    return count;
}
var fullName2 = getFullName1(prompt('What is your name'), prompt('What search?'));

console.log(fullName2);

function getStr6(textHis, clear) {
    if (textHis.includes(clear)) {
        console.log(textHis);
    }
}

getStr6('His reports were clear and exciting', 'clear');


function getSl(ler) {
    var man;
    var heavy;
    
    man = ler.slice(18);
    heavy =ler.substr(13,5);
    console.log(heavy + " " + man);
}
getSl('Lerouxwasabigheavyman');
