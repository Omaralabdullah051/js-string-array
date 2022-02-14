const numbers = [6, 4, 7, 1, 3, 9, 2, 5, 8];
//sort()  It works for just first digit
const sortedNumbers = numbers.sort();
// console.log(sortedNumbers);
const friends = ['kabli', 'josim', 'razzak', 'anwar', 'depjol', 'badsha'];
// const sortedFriends = friends.sort();
// console.log(sortedFriends);

//reverse()
// const reverseFriends = friends.reverse();
// console.log(reverseFriends);
//first sort() then reverse()
const sortedReversedFriends = friends.sort().reverse();
console.log(sortedReversedFriends);

//number sorting by comparing functions
const bigNumbers = [66, 58, 81, 92, 9, 6, 37, 13, 2];
const sortedBigNUmbers = bigNumbers.sort(function (a, b) {
    return a - b;
});
console.log(sortedBigNUmbers);
