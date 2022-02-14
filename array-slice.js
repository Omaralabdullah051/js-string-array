const numbers = [3, 6, 4, 8, 9, 19, 15, 21, 45, 87];
// slice 
const numberSliced = numbers.slice(4, 8);
// console.log(numberSliced);
// console.log(numbers);

//splice to remove an element from an array
// const numberSpliced = numbers.splice(4, 3);
// console.log(numberSpliced);
//console.log(numbers);

//splice to remove and add element in an array
const numberSpliced2 = numbers.splice(4, 3, 99, 111, 888, 777);
console.log(numberSpliced2);
console.log(numbers);

//splice to add element by declaring index position without remove 
const numberSpliced3 = numbers.splice(4, 0, 80);
console.log(numbers);