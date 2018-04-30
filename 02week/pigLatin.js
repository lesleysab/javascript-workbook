'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// write a function that takes in 1 string (str) global
function pigLatin(word) {
  //define vowels
  const vowels = ["a", "e", "i", "o", "u"];

  let splitWord = word.split('');



  //does the vowels array include one of those letters in the first letter of the string?
  if (vowels.includes(word.charAt(0))) {
    // if the string starts with a vowel add 'ay' to the end of the string
    return word.toLowerCase().replace(/ /g, '') + 'yay';
  } else {
    // store the consonants before the vowel in a string
    // we need a function that adds the letters before the vowel to the end of the string
    for (let index = 0; index < word.length; index++) {
      if (!vowels.includes(word[index])) {
        splitWord.push(splitWord.shift());
      } else {
        // it adds them to the end of the string
        // and then adds “ay” to the end of the string
        splitWord.push('ay');
        return splitWord.join('').toLowerCase().replace(/ /g, '');

      }
    }
  }
}

// example:
// trace => ace-tr-ay
// variables:
// originalString: global   = trace
// stringContainsConsonants: local = tr
// newAddsConsonants: local = ace+tr
// ayString: local acetr + ay
// when you find the first vowel and it’s not the first letter, then do these things….
// store the consonants before the vowel in a string
// we need a function that adds the letters before the vowel to the end of the string
// .append()
// .shift
// .push
//
// split the string
// .trim
//
// if check to see if it’s a vowel
// .split
//

// for  it will break on first character when it’s a vowel
// first to last
// .join
// .append()
//
// else if the string starts with a vowel
// then do this : we need a function that adds ay to the end of the string
// Your code here


// console.log(pigLatin("proud"));


function getPrompt() {
  rl.question('word ', (answer) => {
    console.log(pigLatin(answer));
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}