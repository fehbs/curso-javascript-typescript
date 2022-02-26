// Operação Ternária
/*const pontuacaoUsuario = 900;

if (pontuacaoUsuario >= 1000) {
    console.log('Usuário VIP');
} else {
    console.log('Usuário normal');
}*/

//ex(1) - Operação Ternária //
/*const pontuacaoUsuario = 900;
const nivelUsuario = pontuacaoUsuario >= 1000? 'Usuario VIP' : 'Usuario normal';
console.log(nivelUsuario); */

/*const idade = 14;

if (idade >= 18) {
    console.log('MAIOR DE 18 ANOS.');
} else {
    console.log('MENOR DE 18 ANOS.');
}*/

/*
const idade = 19;
const idadeUsuario = idade >= 18? 'Maior de 18 ANOS.' : 'MENOR DE 18 ANOS.';
console.log(idadeUsuario);*/

//ex(2)

const corUsuario = null;
const corPadrao = corUsuario || 'Preta';

console.log( corUsuario);