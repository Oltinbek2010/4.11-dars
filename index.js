// MASALALAR

// 1-masala

// function countALetter(str) {
//     let count = 0;
    
//     const len = str.length;
    
//     for (let i = 0; i < len; i++) {
//         if (str[i] === 'a' || str[i] === 'A') {
//             count++;
//         }
//     }
    
//     return count;
// }

// console.log(countALetter('Assalomu alekum'));

// 2-masala

// function oneToNNums(n) {
//     let arr = [];
//     for (let i = 2; i <= n; i += 2) {
//         arr.push(i);
//     }
//     return arr;
// }

// console.log(oneToNNums(10));

// 3-masala

// function removeWhitespaces(string) {
//     return string.replace(' ', '')
// }
// console.log(removeWhitespaces('Salom yaxshimisiz'));

// 4-masala

// function delFirstEl(string) {
//     return string.replace(string[0], '')
// }
// console.log(delFirstEl('salom'));

// 5-masala

// function engKichikEl(arr) {
//     let min = arr[0];
//     arr.forEach(function (value){
//         if (value < min) {
//             min = value;
//         }
//     });
//     return min;
// }

// console.log(engKichikEl([1, 2, 5, 6, 3]));

// 6-masala

// function convertToLower(str) {
//     return str.replace(/[A-Z]/g, function(match) {
//         return match.toLowerCase();
//     });
// }
// console.log(convertToLower('SALOM'));

// 7-masala

// function sumOfNumbers(arr) {
//     return arr.reduce((sum, num) => sum + num, 0);
// }
// console.log(sumOfNumbers([1, 2, 3, 4, 5]));

// 8-masala

// function countLetterB(str) {
//     return str.split('b').length - 1;
// }
// console.log(countLetterB('bolalar biladi'));

// 9-masala

// function generateSquareNumbers(n) {
//     let squares = [];
//     for (let i = 1; i <= n; i++) {
//         squares.push(i * i);
//     }
//     return squares;
// }
// console.log(generateSquareNumbers(9));

// 10-masala 

// function removeLastCharacter(str) {
//     return str.slice(0, -1);
// }
// console.log(removeLastCharacter('salom dunyo'));

// 11-masala

// function removeNegativeNumbers(arr) {
//     return arr.filter(num => num >= 0);
// }
// console.log(removeNegativeNumbers([1, 2, 3, 4, -9, -5, -7]));

// 12-masala

// function extractDigits(str) {
//     return str.replace(/\D/g, '');
// }
// console.log(extractDigits('salom meni yoshim 14da'));

// 13-masala 

// function reverseWords(str) {
//     return str.split(' ').map(word => word.split('').reverse().join('')).join(' ');
// }
// console.log(reverseWords('salom dunyo'));

// 14-masala

// function doubleElements(arr) {
//     return arr.map(num => num * 2);
// }
// console.log(doubleElements([, 1, 2, 3]));

// 15-masala

// function swapFirstAndLast(str) {
//     if (str.length <= 1) return str;
//     return str.charAt(str.length - 1) + str.slice(1, -1) + str.charAt(0);
// }
// console.log(swapFirstAndLast('salom dunyo'));

// 16-masala

// function sumOfEvenNumbers(arr) {
//     return arr.filter(num => num % 2 == 0).reduce((sum, num) => sum + num, 0);
// }
// console.log(sumOfEvenNumbers([1, 2, 3, 4, 5]));

// 17-masala

// function convertToUpperCase(str) {
//     return str.toUpperCase();
// }
// console.log(convertToUpperCase('salom'));

// 18-masala

// function sortAlphabetically(arr) {
//     return arr.sort();
// }
// console.log(sortAlphabetically(['anjir', 'mandarin', 'anor', 'banan']));

// 19-masala

// function capitalizeFirstLetterOfWords(str) {
//     return str.replace(/\b\w/g, char => char.toUpperCase());
// }
// console.log(capitalizeFirstLetterOfWords('salom balalar'));

// 20-masala

function removeOddNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}
console.log(removeOddNumbers([21, 1, 23, 4, 3, 6]));