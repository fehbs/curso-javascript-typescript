/*
Fernando Henrique Bailão da Silva tem 39 anos, pesa 84 kg
tem 1.8 de altura e seu IMC é de 25.925925925925924
//let imc; // *fórmula peso / (altura * altura)
//anoNascimento = // Fórmula ano atual - idade;
*/

const nome = 'Fernando Henrique';
const sobrenome = 'Bailão da Silva';
const idade = 39;
const peso = 73;
const alturaEmM = 1.68;


indiceMassaCorporal = peso / (alturaEmM * alturaEmM);
anoNascimento = 2021 - idade;

// template strings

console.log(`${nome} ${sobrenome}, tem ${idade} anos, pesa ${peso} kg,`);
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal},`);
console.log(`${nome} nasceu em ${anoNascimento}.`);
