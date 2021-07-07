// for loop
// Use a for loop to console.log each item in the array carsInReverse.

const carsInReverse = ["Ford", "Chevy", "Toyota"];
carsInReverse.forEach(function(item, index, array) {
  console.log(item, index);
});

// for...in loop
// Create an object (an array with keys and values) called persons with the following data:
// firstName: "Jane"
// lastName: "Doe"
// birthDate: "Jan 5, 1925"
// gender: "female"
// Use a for...in loop to console.log each key.
// Then use a for...in loop and if state to console.log the value associated with the key birthDate.

const persons = {
  firstName: "Jane",
  lastName: "Doe",
  birthDate: "Jan 5, 1925",
  gender: "female",
};
console.log(Object.keys(persons));

for (let birthDate in persons) {
  person1 = persons.birthDate;
}
console.log(person1);

// while loop
// Use a for loop to console.log the numbers 1 to 1000.
// let i = 0;
// while (i < 1000) {
//   i++;
//   console.log(i);
// }

// do...while loop
// Use a do...while loop to console.log the numbers from 1 to 1000.
const i = 0;
do {
  i += 1;
  console.log(i);
} while (i < 1000);

// When is a for loop better than a while loop?
A
for loop repeats a statement until the condition returns false vs a
while loop which test the condition prior to executing the statement.
This affects performance.A
while loop would slow down performance since it has to check the condition each time it loops through.

// How is the readability of the code affected?
The readability is easier as the

function performs as it says it will.

// What is the difference between a for loop and a for...in loop?
A
for loop repeats a statement until the condition returns false and
for loops are meant to iterate
while incrementing / decrementing vs a
for... in loop is meant to enumerate through object properties.

// What is the difference between a while loop and a do...while loop?

A
while loop will check the condition first before executing the content.
The do
  while loop executes the content of the loop once before checking the condition of the
while .