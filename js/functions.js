/* eslint-disable no-console */

const checkStringLength = (inputString, maxLength) => inputString.length <= maxLength;
console.log(checkStringLength('проверяемая строка', 20));//true
console.log(checkStringLength('проверяемая строка', 10));//false

function isPalindrome(inputString) {
  const cleanString = inputString.replace(/\s/g, '').toLowerCase();
  return cleanString === cleanString.split('').reverse().join('');
}
console.log(isPalindrome('ДовОд'));//true
console.log(isPalindrome('Кекс'));//false
console.log(isPalindrome('Лёша на полке клопа нашёл '));// true

