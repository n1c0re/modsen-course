'use strict'

function isInclude(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}

console.log(isInclude([1, 2, '3'], 3));