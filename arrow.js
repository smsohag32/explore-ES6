// function declaration 
function add(add1, add2){
    return add1 + add2;
}
// function expresion 
let add3 = function(add1, add2){
    return add1 + add2;
}
// arrow function 

let person = (person, person2) => `${person} ${person2}`;
console.log(person('sohag', 'sheik'));


const result = (add1, add2 = 5) => add1+ add2;
console.log(result(3));
