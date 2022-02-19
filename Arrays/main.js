//-----------------------------------------------------------//
/* EX:(12)
//               0       1        2          3      4
const alunos = ['Luiz', 'Maria', 'João']; // Luiza, Eduardo

console.log(typeof alunos);  // array é um objeto indexado
console.log(alunos instanceof Array); */

//-----------------------------------------------------------//
/* EX:(11)
//               0       1        2          3      4
const alunos = ['Luiz', 'Maria', 'João']; // Luiza, Eduardo

alunos.push('Luiza');  // Deleta o último indíce
alunos.push('Eduardo');

console.log(alunos.slice());  *///FATIAMENTO// -0 vai para o primeiro indíce. -1 vai para o último indíce.

//----------------------------------------------------------//
/* EX:(10)
//               0       1        2          3      4
const alunos = ['Luiz', 'Maria', 'João']; // Luiza, Eduardo

console.log(alunos[50]); */ // Acessando um indíce inexistente

//-----------------------------------------------------------//
/* EX:(9)
//               0       1        2          3      4
const alunos = ['Luiz', 'Maria', 'João']; // Luiza, Eduardo

delete alunos[1];
console.log(alunos[1]);
delete alunos[1];  // Deleta o último indíce
console.log(alunos); */

//-----------------------------------------------------------//
/* EX:(8)
//               0       1        2          3      4
const alunos = ['Luiz', 'Maria', 'João']; // Luiza, Eduardo

alunos.shift();  // Deleta o primeiro indíce
console.log(alunos); */

//-----------------------------------------------------------//
/* EX:(7)
//               0       1        2          3      4
const alunos = ['Luiz', 'Maria', 'João']; // Luiza, Eduardo

alunos.pop();  // Deleta o último indíce
console.log(alunos); */

//-----------------------------------------------------------//
/* EX:(6)
//               0       1        2
const alunos = ['Luiz', 'Maria', 'João'];

alunos.unshift('Julieta');  // Adiciona ao começo
alunos.unshift('Romeu');

console.log(alunos); */ 

//-----------------------------------------------------------//
/* EX:(5)
//               0       1        2
const alunos = ['Luiz', 'Maria', 'João'];

alunos.push('Luiza'); // Adiciona ao fim
alunos.push('Fábio');
alunos.push('Carlos');


console.log(alunos); */

//-----------------------------------------------------------//
/* EX:(4)
//               0       1        2
const alunos = ['Luiz', 'Maria', 'João'];

alunos[alunos.length] = 'Luiza';  // Adiciona ao fim
alunos[alunos.length] = 'Fábio';
alunos[alunos.length] = 'Luana'

console.log(alunos);  */

//-----------------------------------------------------------//
/*EX:(3)
//               0       1        2
const alunos = ['Luiz', 'Maria', 'João']

alunos[2] = 'Eduardo';
alunos[3] = 'Gabriele';
alunos[4] = 'Fernando';
console.log(alunos);   // acessar indíce */

//-----------------------------------------------------------// 
/* EX:(2)          0       1        2
//const alunos = ['Luiz', 'Maria', 'João']

console.log(alunos);   // acessar indíce
console.log(alunos[0]);
console.log(alunos[1]);
console.log(alunos[2]); */ 

//-----------------------------------------------------------//
/* EX:(1)
//            012345678910  // indíce
const nome = 'Luiz Otávio'

 //               0       1       2
const alunos = ['Luiz', 'Maria', 'João'];
console.log(nome[10]);   // acessar indíce */
//-----------------------------------------------------------//