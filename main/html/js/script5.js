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
