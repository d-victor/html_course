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

