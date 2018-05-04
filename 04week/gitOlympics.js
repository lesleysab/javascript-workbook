"use strict";

// create a function called printListOfOlympians
const printListOfOlympians = (list) => {
  // the function should accept an array and use a forEach to console.log() every item in the array
  list.forEach(function(element) {
    console.log(element);
  });
}
const test = ["Gary", "Michelle", "Jim", "Jerry", "Lisa"]
// call the function with a test array of at least 5 names
printListOfOlympians(test);