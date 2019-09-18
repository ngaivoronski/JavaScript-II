// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  // GIVEN THIS PROBLEM:

  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // SOLUTION:

  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // NOTES ON THE SOLUTION:

  // firstItem is a higher order function.
  // It expects a callback (referred to as `cb`) as its second argument.
  // To test our solution, we can use the given `items` array and a variety of callbacks.
  // Note how callbacks can be declared separately, or inlined.

  // TEST 1 (inlined callback):

  const test1 = firstItem(items, item => `I love my ${item}!`);
  console.log(test1); // "I love my Pencil!"

  // TEST 2 (declaring callback before hand):

  function logExorbitantPrice(article) {
    return `this ${article} is worth a million dollars!`;
  };

  const test2 = firstItem(items, logExorbitantPrice);
  console.log(test2); // "this Pencil is worth a million dollars!"
*/


function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
}
// tests
function sayLength(x) {
  return `this list is ${x} long.`;
}
const test1 = getLength(items, sayLength);
console.log(test1);


// ************


function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length - 1]);
}
function sayLast(x) {
  return `this list's last item is ${x}`;
}
const test2 = last(items, sayLast);
console.log(test2);


// ************


function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x + y);
}
function saySum(x) {
  return `The sum of the two numbers is ${x}`;
}
const test3 = sumNums(1, 2, saySum);
console.log(test3);


// ************


function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x * y);
}
function sayProduct(x) {
  return `The product of the two numbers is ${x}`;
}
const test4 = multiplyNums(1, 2, sayProduct);
console.log(test4);


// ************


function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  return cb(list.includes(item));
}
function sayContains(x) {
  if (x) {
    return `The list contains the item`;
  }
  else {
    return `The list does not contain the item`;
  }
}
const test5 = contains('Pencil', items, sayContains);
const test6 = contains('Ruler', items, sayContains);
console.log(test5);
console.log(test6);

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  let newArr = [...new Set(array)];
  return cb(newArr);
}
function sayUnique(x) {
  return `Here is the list of unique values: ${x}.`;
}
const items2 = ['Pencil', 'Gum', 'Notebook', 'Pencil', 'yo-yo', 'Pencil', 'Notebook', 'yo-yo', 'Gum'];
const test7 = removeDuplicates(items2, sayUnique);
console.log(test7);