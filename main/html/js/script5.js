var s = 'Hello world world' + ' true         ';

/**
 * Remove spaces
 **/

s = s.trim();  //

/**
 * find substring
 *
 * @param {string} substring;
 * @param {number} start position;
 *
 * @return {number} index or -1;
 **/
console.log(s.indexOf('world'));

var loremString = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.';

/**
 * return substring
 *
 * @param {number} start position
 * @param {number} end position not including
 *
 * @return {string} new string
 **/
console.log(loremString.substring(0, 5)); // lorem
console.log(loremString.substring(5, 0)); // lorem

/**
 * return substring
 *
 * @param {number} start position
 * @param {number} end position not including
 *
 * @return {string} new string
 **/
console.log(loremString.slice(0, 5)); // lorem
console.log(loremString.slice(5, 0)); // ''

/**
 * Divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array
 *
 * @param {RegExp | string} separator
 * @param {number} A non-negative integer limiting the number of pieces.
 *
 * @return {Array} An Array of strings, split at each point where the separator occurs in the given string
 **/
var str = 'The quick brown fox jumps over the lazy dog.';
var str1 = 'The1quick2brown3fox4jumps5over6the7lazy8dog.';

console.log(str.split(' '));
console.log(str1.split(/\d/));

/**
 * Returns a new string with some or all matches of a pattern replaced by a replacement
 *
 * @param {RegExp | string} search value
 * @param {string | function} newSubstr | A function to be invoked to create the new substring to be used to replace the matches to the given regexp or substr.
 *
 * @return {Array} An Array of strings, split at each point where the separator occurs in the given string
 **/
var name = "John Smith";

console.log(name, '|||', name.replace(' ', ' => ')); // John => Smith
console.log(name, '|||', name.replace(/(\w+) (\w+)/i, '$2, $1')); // Smith, John
