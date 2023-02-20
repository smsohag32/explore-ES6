// var let const breack up with var

const numbers = [21, 546, 45];
let salary = 450;
salary = 455;

// default parameters
function calculateSalary(salary, tax = 0.25, bonus = 0) {
    const remaining = salary - salary * tax;
    const total = remaining + bonus;
    return total;
}
// template string 
// document.getElementById('btn').a
const elementHtml = `
<div>
    <p>somthing</p>
    <p>somthing</p>
    <p>somthing ${calculateSalary(1000, 0, 0)}</p>
    <p>salary: ${numbers[2]} </p>
</div>
`

// arrow function 

const duubleIt = x => x * 2;
const calculateSalary2 = (salary, tax, bonus) => salary - salary * tax + bonus;


// spread out oparator
const ages = [11, 22, 11, 15, 15,];
const newAges = [...ages, 22, 25];

// destructuring  
const { x, y, ...c } = { x: 45, y: 12, z: 33, name: 'sakib', salary: 500000 }

//  also 
const [a, b] = [12, 45, 25, 55];