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
//the ways to search elements in a string

//indexof
const output = [];
for (const product of products) {
    if (product.toLowerCase().indexOf(searching.toLowerCase()) != -1) {
        // output.push(product);
    }
}
// console.log(output);

//includes
for (const product of products) {
    if (product.toLowerCase().includes(searching.toLowerCase())) {
        // output.push(product);
    }
}
// console.log(output);

//starts with
for (const product of products) {
    if (product.toLowerCase().startsWith(searching.toLowerCase())) {
        // output.push(product);
    }
}
// console.log(output);

//ends with
for (const product of products) {
    if (product.toLocaleLowerCase().endsWith(searching.toLowerCase())) {
        output.push(product);
    }
}
console.log(output);