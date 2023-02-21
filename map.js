const numbers = [2, 8, 5, 5];
const output = [];
for(const number of numbers){
    const dubled = number * 2;
    output.push(dubled);
}
console.log(output);
function getDoubles (number){
   let  output = [];
    for(const number of numbers){
        output.push(number);
    }
    return output;
}
// perpose get an array for every elements of the array do somthing store the 
const doubleIt = num => num * 2;
const result = getDoubles(numbers);
console.log()

const doubleMake = numbers.map(num=> num * 2);
console.log(doubleMake);


const friends = ['sohag', 'agun', 'durjoby'];
const firstLetters = friends.map(f => f[0]);
// console.log(firstLetters);

const products = [
    {id: 1, name: 'laptop', price: 9000},
    {id: 1, name: 'phone', price: 9000},
    {id: 1, name: 'watch', price: 9000}
];

const productsName = products.map(product => product.name);
console.log(productsName);

const price = products.map(product => product.price);
console.log(price);



