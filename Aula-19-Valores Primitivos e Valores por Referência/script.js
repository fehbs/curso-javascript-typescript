/* Valores Primitivos e Valores por Referência 
// Primitivos (imutáveis) - stirng, number, boolean, undefined, 
// null (bigint, symbol) - Valores copiados
// Referência (mutável) - array, object, function - Passados por referência */

//*********************************************************************//

//*********************************************************************//
// Ex: 1
/*
let a = 'A';
let b = a;  // Cópia
console.log(a, b);

a = 'Outra coisa';
console.log(a, b);
                                                                        */
//*********************************************************************//

//*********************************************************************//
// Ex: 2
/*
let a = [1, 2, 3];
let b = [...a];
let c = b;
console.log(a, b);

a.push(4);
console.log(a, b);

b.pop();
console.log(a, b);

a.push('Luiz');
console.log(a, c);
                                                                        */
//*********************************************************************//

//*********************************************************************//
// Ex: 3
/*

const a = {
    nome: 'José',
    sobrenome: 'Dorival'
};

const b = a;

b.nome = 'Silva';
console.log(a);
console.log(b);
                                                                        */
//*********************************************************************//



