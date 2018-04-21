// 1. Write a JavaScript function to display the current day and time.
// getDate()
// getTime()
// new Date()
function displayDT() {
  const now = new Date();
  return now;
}
displayDT();
// 2. Write a JavaScript function to convert a number to a string.
// toString()
function numToStr(x) {
  return x.toString();
}
numToStr(20);
// 3. Write a JavaScript function to convert a string to the number
// Number()
// or intparse
function strToNum(str) {
  const num = parseInt(str, 10);
  return num;
}
strToNum("42px")
// 4. Write a JavaScript function that takes in different datatypes and prints out whether they are a:
// typeof ()
function dataTypes(value) {
  const x = null;
  return value;
}
dataTypes(typeof "lesley"); //string
dataTypes(typeof false); //boolean
dataTypes(typeof x); //undefined
dataTypes(typeof 12); //number
dataTypes(typeof NaN); //NaN
dataTypes(typeof null); //null
// 5. Write a JavaScript program that adds 2 numbers together.
function sumTwoNumbers(num1, num2) {
  return num1 + num2
}
sumTwoNumbers(4, 6);
// 6. Write a JavaScript function that runs only when 2 things are true.
// &&
function twoTruths(num1, num2) {
  if (num1 <= 5 && num2 >= 10)
    return (num1 + " is less than or equal to 5", num2 + " is greater than or equal to 10");
  else
    return (num1 + " is greater than or equal to 5", num2 + " is less than or equal to 10");
}
console.log(twoTruths(6, 11));
// 7. Write a JavaScript program that runs when 1 of 2 things are true
// ||
function orTrue(num1, num2) {
  if (num1 <= 5 || num2 >= 10)
    return (num1 + " is less than or equal to 5", num2 + " is greater than or equal to 10");
  else
    return (num1 + " is greater than or equal to 5", num2 + " is less than or equal to 10");
}
console.log(orTrue(9, 10));
// 8. Write a JavaScript program that runs when both things are not true
// !&&!
function noTrue(num1, num2) {
  if (!num1 == 5 || !num2 == 10)
    return (num1 + " is not less than or equal to 5", num2 + " is not greater than or equal to 10");
  else
    return (num1 + " is not greater than or equal to 5", num2 + " is not less than or equal to 10");
}
console.log(noTrue(5, 10));