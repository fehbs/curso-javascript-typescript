// Lógica de Programação //
/*
1) Operadores de comparação
> maior que
>= maior que ou igual a
< menor que
<= menor que ou igaul a
=== igualdade estrita (valor e tipo)
!== diferente estrito (valor e tipo)


const num1 = 10; // number
const num2 = 10; // number
const comp = num1 === num2;
console.log(comp);  */

/*#############################################/

2) Operadores Lógicos
&& -> AND -> E -> Todas as expressões precisam ser verdadeiras para retornar true
|| -> OR -> OU
! -> NOT -> NÃO
*/
/*const expressao = true && true && false && true;
console.log(expressao); 

const expressaoOr = false || true || false || true;
console.log(expressaoOr); 

const usuario = 'Darth';
const senha = '123456';

const vailogar = usuario === 'Darth' && senha === '123456';
console.log(vailogar); 

console.log(!true); */

/*#############################################/

3) // Avaliacão - Short-Circuit(curto-circuito) // 
/* && -> false && true -> false "o mesmo valor"
|| ->   true || false -> "vai retornar o valor verdadeiro"
false
0
'' "" ``
null / undefined
NaN                                                  


function falaOi () {
    return 'Oi';
}

const vaiExecutar = false;

console.log(vaiExecutar && falaOi()); 

///////////////////////////////////////////////////////

//console.log(0 || false || null || 'José Carlos' || true);

const corUsuario = null;
const corPadrao = corUsuario || 'preto';

console.log(corPadrao); 


//////////////////////////////////////////////////////

const a = 0;
const b = null;
const c = 'false';
const d = false;
const e = NaN;

console.log(a || b || c || d || e); 

const a = 0;
const b = null;
const c = false;
const d = false;
const e = NaN;

console.log(a || b || c || d || e); */

/*#############################################/

4) if, else if e else (parte 1) */
// if - pode ser usado sozinho
// Sempre que utilizo a palvra else, preciso de um if antes
// Eu posso ter vários else if na checagem
// Só posso ter um else na checagem
// Podemos usar condições sem else if, utilizando apenas if e else
 // ex(1) //
 /*
const hora = 40;

if (hora >= 0 && hora <= 11) {
    console.log('Bom dia!');
} else if (hora >= 12 && hora <= 17) {
    console.log('Boa tarde!!')
} else if (hora >= 18 && hora <= 23) {
    console.log('Boa noite!!!');
} else {
    console.log('Olá.')
} 

// ex (2)  //

const tenhoGrana = null;

if (tenhoGrana) {
    console.log('Vou sair de casa.');
} else {
    console.log('Naõ vou sair de casa.');
}   */
///////////////////////////////////////////////////
/*
5) if, else if e else (parte 2) 

const numero = 11;

if (numero >= 0 && numero <= 5) {
    console.log('O número está entre 0 e 5.');
} else if (numero >= 6 && numero <= 8) {
    console.log('O número está entre 6 e 8.');
} else if (numero >= 9 && numero <= 11) {
    console.log('O núemero está entre 9 e 11.');
} else {
    console.log('O número não está entre 0 e 11.');
} */

//////////////////////////////////////////////////////
/*


   
























    
