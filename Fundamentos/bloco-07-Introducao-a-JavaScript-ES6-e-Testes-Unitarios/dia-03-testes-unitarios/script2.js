// // Escreva a função addOne para passar nos testes já implementados.

// const assert = require('assert');

// // escreva a função addOne aqui
// function addOne(array) {
//   const exite = [];
//   for (let i = 0; i < array.length; i +=1) {
//     exite.push(array[i] + 1);
//   }
//   return exite
// };

// const myArray = [31, 57, 12, 5];
// const unchanged = [31, 57, 12, 5];
// const expected = [32, 58, 13, 6];
// const output = addOne(myArray);

// assert.strictEqual(typeof addOne, 'function');
// assert.deepStrictEqual(output, expected);
//  assert.deepStrictEqual(myArray, unchanged);


// Escreva a função wordLengths para passar nos testes já implementados.

const assert = require('assert');
// escreva a função wordLengths aqui

function wordLengths(words){
  const exite = [];
  for (i = 0; i < words.length; i += 1) {
    exite.push(words[i].length);
  }
  return exite
};

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);