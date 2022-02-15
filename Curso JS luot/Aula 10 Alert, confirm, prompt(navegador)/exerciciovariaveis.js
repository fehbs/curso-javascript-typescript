/* let varA ='A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

varA = 'Fernando';
varB = 'Gabriele';
varC = 'A';
console.log(varA, varB, varC);


let varA = 'A';
let varB = 'B';
let varC = 'C';


const varATemp = varA;
varA = varB;
varB = varC;
varC = varATemp;

console.log(varA, varB, varC); */

let varA = 'A';
let varB = 'B';
let varC = 'C';

[varA, varB, varC] = [varB, varC, varA] 

console.log(varA, varB, varC);

