/** 
  * Task description: Write a method that creates a new array with given values 
  * Expected Result: (3, 'a') => ['a', 'a', 'a'] 
  * Task Complexity: 1 of 5 
  * @param {number} arraySize - size of array 
  * @param {?} value - value to fill 
  * @returns {Array} 
*/
const fill = function (arraySize, value) {
    return Array(arraySize).fill(value);
}

//console.log(fill(4, 'a')) // ['a', 'a', 'a', 'a'] 
//console.log(fill(5, 'a')) // ['a', 'a', 'a', 'a', 'a'] 
//console.log(fill(6, 'a')) // ['a', 'a', 'a', 'a', 'a', 'a'] 

/** 
  * Task description: Write a method that reverts input array 
  * Expected Result: [1, 2, 3] => [3, 2, 1] 
  * Task Complexity: 1 of 5 
  * @param {Array} array - Array of any elements 
  * @returns {Array} 
*/
const reverse = function (array) {
    const result = [];
    array.forEach(element => result.unshift(element));
    return result;
}

//console.log(reverse([1, 2, 3])); //[3, 2, 1] 

/** 
  * Task description: Write a method that clears array from all unnecessary elements, like false, undefined, empty strings, zero, null 
  * Expected Result: [0, 1, false, 2, undefined, '', 3, null] => [1, 2, 3] 
  * Task Complexity: 1 of 5 
  * @param {Array} array - An array of any elements 
  * @returns {Array} 
*/
const compact = function (array) {
    const unnecessaryValues = [false, undefined,'',0,null];
    return array.filter(value => unnecessaryValues.indexOf(value) === -1)
}

//console.log(compact([0, 1, false, 2, undefined, '', 3, null])) // [1, 2, 3]

/** 
  * Task description: Write a method that returns an object composed of key-value pairs. 
  * Expected Result: [['a', 1], ['b', 2]] => { a: 1, b: 2 } 
  * Task Complexity: 2 of 5 
  * @param {Array} array - a deep array of pairs 
  * @returns {Array} 
*/
const fromPairs = function (array) {
   return array.reduce((acc, curr) => {acc[curr[0]] = curr[1]; return acc}, {})
}

//console.log(fromPairs([['a', 1], ['b', 2]])) // { a: 1, b: 2 }

/** 
  * Task description: Write a method that returns an array without listed values 
  * Expected Result: [1, 2, 3, 1, 2] without 1, 2 => [3] 
  * Task Complexity: 2 of 5 
  * @param {Array} array - Array of primitive data types 
  * @param {?} args list of values to remove 
  * @returns {Array} 
*/
const without = function (array, ...args) {
    return array.filter(value => args.indexOf(value) === -1)
}

// console.log(without([1, 2, 3, 1, 2],1,2)) // [3]

/** 
  * Task description: Write a method that returns a duplicate-free array 
  * Expected Result: Duplicate-free array [1, 2, 3, 1, 2] => [1, 2, 3] 
  * Task Complexity: 2 of 5 
  * @param {Array<string | number>} array - Array of primitive data types 
  * @returns {Array} 
*/
const unique = (array) => {
    return [...new Set(array)]
}

//console.log(unique([1, 2, 1, 2, 3])) // [ 1, 2, 3 ]

/** 
  * Task description: Write a method that makes a shallow compare of two arrays and returns true if they are identical. 
  * Expected Result: ([1, 2, 3], [1, 2, 3]) => true 
  * Task Complexity: 2 of 5 
  * @param {Array} firstArray - Array of primitive data types 
  * @param {Array} secondArray - Array of primitive data types 
  * @returns {boolean} 
*/
const isEqual = (firstArray, secondArray) => {
    return firstArray.length == secondArray.length && firstArray.every((element, index) => element === secondArray[index]); 
}

//console.log(isEqual([1, 2, 3, 4], [1, 2, 3, 4])) // true
//console.log(isEqual([1, 2, 3, 4], [1, 2, 3, 5])) // false
//console.log(isEqual([1, 2, 3, 4], [1, 2, 3, 4, 5])) // false

/** 
  * Task description: Write a method that turns a deep array into a plain array 
  * Expected Result: [1, 2, [3, 4, [5]]] => [1, 2, 3, 4, 5] 
  * Task complexity: 3 of 5 
  * @param {Array} array - A deep array 
  * @returns {Array} 
*/
const flatten = function (array) {
    return array.reduce((acc, curr) => acc.concat(Array.isArray(curr) ? flatten(curr) : curr), [])
}

// console.log(flatten([1, 2, [3, 4, [5]]])) // [1, 2, 3, 4, 5]

/** 
  * Task description: Write a method that splits an array into parts of determined size 
  * Expected Result: ([1, 2, 3, 4, 5], 2) => [[1, 2], [3, 4], [5]] 
  * Task complexity: 3 of 5 
  * @param {Array} array - An array of any elements 
  * @param {number} size - size of chunks 
  * @returns {Array} 
*/
const chunk = function (array, size) {
    return fill((~~(array.length/size) + array.length%size), '0').map(element => array.length > size ? array.splice(0,size) : array)
}
//console.log(chunk([1, 2, 3, 4, 5], 2)) //[ [ 1, 2 ], [ 3, 4 ], [ 5 ] ]
//console.log(chunk([1, 2, 3, 4, 5, 6, 7], 2)) // [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ], [ 7 ] ]
//console.log(chunk([1, 2, 3, 4, 5, 6, 7], 3)) // [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7 ] ]

/** 
  * Task description: Write a method that creates an array of unique values that are included in all given arrays 
  * Expected Result: ([1, 2], [2, 3]) => [2] 
  * Task complexity: 4 of 5 
  * @param {?} arrays - Arrays of primitive data types 
  * @returns {Array} 
*/
const intersection = function(...arrays) {
    const intersection = [];
    arrays[0].forEach(element => {if (arrays.every(array => array.indexOf(element) !== -1)) intersection.push(element)});
    return unique(intersection);
}

//console.log(intersection([1, 2], [2, 3])) // [ 2 ]
//console.log(intersection(['a', 'b'], ['b', 'c'], ['b', 'e', 'c'])) // [ 'b' ]
//console.log(intersection(['b', 'b', 'e'], ['b', 'c', 'e'], ['b', 'e', 'c'])) // [ 'b', 'e' ]