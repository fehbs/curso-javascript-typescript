//Ex(1)
/*
const tresHoras = 60 * 60 * 3 * 1000;
const umDia = 60 * 60 * 24 * 1000;    // - um dia a menos e + adiciona um dia
const data = new Date(0 + tresHoras - umDia);  // 01/01/1970 Timestamp unix ou épocaunix
console.log(data.toString()); */ 

//Ex(2)
/*
const data = new Date(2019, 3, 20, 15, 14, 27, 500);  //ano, mês, dia, hora, minuto, segundo, milissegundo
console.log(data.toString()); */

//Ex:(3)
/*
const data = new Date();  //ano, mês, dia, hora, minuto, segundo, milissegundo
console.log('Dia', data.getFullYear());
console.log('Mês', data.getMonth() +1);  // Mês começa do zero
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('Dia da semana', data.getDay() +1);  // 0 - Domingo, 6 - Sábado
console.log(data.toString()); 
console.log(Date.now()); */




//Ex:(4)
/*
const data = Date();
console.log(data.toString()); // Uma forma de inderir data atual */


//Ex:(5) - Criando uma função que formata uma data (Padrão-Brasil)

function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
   const dia = zeroAEsquerda(data.getDate());
   const mes = zeroAEsquerda(data.getMonth() +1);
   const ano = zeroAEsquerda(data.getFullYear());
   const hora = zeroAEsquerda(data.getHours());
   const min =  zeroAEsquerda(data.getMinutes());
   const seg =  zeroAEsquerda(data.getSeconds());

   return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);









