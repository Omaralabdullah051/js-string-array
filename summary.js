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