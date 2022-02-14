function addNumbers(num1, num2) {
    // console.log(arguments);
    let result = 0;
    for (const num of arguments) {
        result = result + num;
    }
    // const result = num1 + num2;
    return result;
}
// console.log((addNumbers(23, 13, 50, 100, 420, 198)));

function getFullName(firstName, lastName) {
    let fullName = '';
    for (const part of arguments) {
        fullName = fullName + part + ' ';
    }
    return fullName;
}
console.log((getFullName('Omuk', 'songket', 'bin', 'Hanif', 'songket', 'bin', 'Tomuk', 'songket', 'bin', 'kumuk', 'songket')));

function getSum(num1, num2) {
    let result = 0;
    for (const sum of arguments) {
        result = result + sum;
    }
    return result;
}
console.log((getSum(30, 40, 50, 20, 10)));
