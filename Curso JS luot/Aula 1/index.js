//console.log('Nesse sábado, dia', 05, 'de fevereito às', 16, 'da tarde eu tenho uma reunião.');


/*
let A = Number([11]);
let B = Number([7]);
console.log(`X = ${A + B}`); 


let A = Number([6]);
let B = Number([11]);
console.log(`X = ${A - B}`);


let A = Number([11]);
let B = Number([2]);
console.log(`X = ${A - B}`); */


/*
let A = Number([10]);
let B = Number([7]);
let total = A + B;
console.log(`X = ${total}`); */

/*
let valor1 = Number(3);
let valor2 = Number(9);
let total = valor1 * valor2; // Altere o valor da variável com o cálculo esperado 
console.log(`PROD = ${total}`); */

// Desafio 02//
/*
let valor1 = Number(3);
let valor2 = Number(9);
console.log(`Prod = ${valor1 * valor2}`); */
/*
 let valor1 = Number(0);
 let valor2 = Number(9);
 let total = valor1 / valor2;
 console.log(`PROD = ${total}`);
 */

 //desafio 03
/*
 let valor1 = Number(25);
 let valor2 = Number(100);
 let valor3 = Number(5.50);

 let numero = (valor1 % valor2);
 let salario = (valor2 * valor3);
 
 console.log(`NUMBER = ${numero}`);
 console.log(`SALARY = U$ ${salario}.00`); */


//Desafio 1/5 - Quantidade de Números Positivos

/*
let valor = Number(576);

console.log(valor);

let qtdNotas = parseInt(valor / 100 );
console.log(`${qtdNotas} nota(s) de R$ ${100},00`);
valor = valor % 100;

qtdNotas = parseInt(valor / 50);
console.log(`${qtdNotas} nota(s) de R$ ${50},00`);
valor = valor % 50;

qtdNotas = parseInt(valor / 20);
console.log(`${qtdNotas} nota(s) de R$ ${20},00`);
valor = valor % 20;

qtdNotas = parseInt(valor / 10);
console.log(`${qtdNotas} nota(s) de R$ ${10},00`);
valor = valor % 10;

qtdNotas = parseInt(valor / 5);
console.log(`${qtdNotas} nota(s) de R$ ${5},00`);
valor = valor % 5;

qtdNotas = parseInt(valor / 2);
console.log(`${qtdNotas} nota(s) de R$ ${2},00`);
valor = valor % 2;

qtdNotas = parseInt(valor / 1);
console.log(`${qtdNotas} nota(s) de R$ ${1},00`);
valor = valor % 1;  */

//const input = require("fs").readFileSync("stdin", "utf8");


let valor = parseInt(576);

const notas = [100, 50, 20, 10, 5, 2, 1];

console.log(valor);

for (let nota of notas) {
    let qtdNotas = parseInt(valor / nota);
    console.log(` ${qtdNotas} nota(s) de R$ ${nota},00`);
    valor = valor % nota;
}








