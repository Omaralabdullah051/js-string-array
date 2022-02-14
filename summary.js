//string comparision using toLowerCase ,toUpperCase
// const anthem = 'Amar Sonar Bangla Ami Tomay Valobashi';
const word = 'banGlA';
const word2 = 'BANgla';
if (word == word2) {
    console.log('hello ,we all are same ');
}
if (word.toLowerCase() == word2.toLowerCase()) {
    console.log('hello,we all are same right now');
}
//apply search includes,indexOf,startsWith,endsWith
const products = [
    'Dell hardcore i29 200 laptop',
    'iphone 1tb camera flashlight phone',
    'yellow laptop with black camera',
    'Dell 1x59 lenevo comercial yoga laptop',
    'lg supernova Laptop Dell',
    'htc low price Phone',
    'Dell purple color phone with Laptop'
];

const searching = 'dell';
//indexOf()
const output = [];
for (const product of products) {
    if (product.toLowerCase().indexOf(searching.toLowerCase() != -1)) {
        // output.push(product);
    }
}
// console.log(output);

//includes()
for (const product of products) {
    if (product.toLowerCase().includes(searching.toLowerCase())) {
        // output.push(product);
    }
}
// console.log(output);

//startsWith()
for (const product of products) {
    if (product.toLowerCase().startsWith(searching.toLowerCase())) {
        // output.push(product);
    }
}
// console.log(output);

//endsWith()
for (const product of products) {
    if (product.toLowerCase().endsWith(searching.toLowerCase())) {
        output.push(product);
    }
}
console.log(output);

const anthem = 'Amar Sonar Bangla Ami Tomay Valobashi';
//split
const split = anthem.split(' ');
// console.log(split);
const anotherSplit = anthem.split('a', 5);
console.log(anotherSplit);
//slice
const slice = anthem.slice(5, 10);
console.log(slice);
//when input negative it starts counting from the end and when indexstart is greater than indexend,they swap;
const slice2 = anthem.slice(-15, -5);
console.log(slice2);
//substr
const substr = anthem.substr(5, 5);
console.log(substr);
//substring
const substring = anthem.substring(5, 10);
console.log(substring);
//substring doesn't take negative index.(that's wrong).because substring count the negative indexstart or indexend to 0;
const substring2 = anthem.substring(-15, -5);/*(0,0)*/
console.log(substring2);
// but,this is correct now
const substring3 = anthem.substring(15, -5);
console.log(substring3);/*because (15,0)*/
//when we omit the first parameter; method count indexstart 0 and when we omit the second parameter ;method count indexend (string.length-1) the rest of the string.

//concat 
const first = 'Amarder';
const second = 'City';
const fullString = first.concat(second).concat('hello');
console.log(fullString);

//join
const array = ['alim', 'badhon', 'lion', 'kachamorich', 'sodhon'];
// const allJoined = array.join('');
// const allJoined = array.join(' ');
// const allJoined = array.join(',');
const allJoined = array.join('@@@');
console.log(allJoined);

////////////////////Array methods/////////////////////

//concat arrays

const firstArray = [1, 2, 3, 4];
const secondArray = [5, 6, 7, 8];
const thirdArray = [9, 10];
const concatArrays = firstArray.concat(secondArray).concat(thirdArray);
console.log(concatArrays);

//indexOf()
//includes()
//Array.isArray() 
//splice()

//splice()
const myArray = [2, 8, 9, 10, 29, 85, 92, 33];
//add and remove elements by splice method
// const splice = myArray.splice(3, 4, 60, 70, 87, 44, 99, 66);
// console.log(splice);
// console.log(myArray);

//remove elements by splice method
// const splice2 = myArray.splice(3, 4);
// console.log(splice2);
// console.log(myArray);

//add elements by splice method
const splice3 = myArray.splice(3, 0, 60, 80, 99);
console.log(splice3);
console.log(myArray);

//sort for arranging alphabetical order
const alphabet = ['hello', 'abul', 'kalam', 'badhon', 'cagol', 'modon', 'dada'];
const alphabeticalSort = alphabet.sort();
console.log(alphabeticalSort);

//sort for arranging number order
// ascending order 
const allNumbers = [0, 60, 20, 59, 99, 88, 55, 77];
const ascendingNumberSort = allNumbers.sort(function (a, b) {
    return a - b;
})
console.log(ascendingNumberSort);
//descending order
const descendingNumberSort = allNumbers.sort(function (a, b) {
    return b - a;
})
console.log(descendingNumberSort);

//reverse 
const reverse = alphabet.reverse();
console.log(reverse);

//unlimited parameter to function using arguments
function getSum() {
    let result = 0;
    for (const sum of arguments) {
        result = result + sum;
    }
    return result;
}
console.log((getSum(9, 10, 77, 89, 45, 98)));